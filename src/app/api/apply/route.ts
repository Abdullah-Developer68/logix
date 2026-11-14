import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { internshipApplications } from "@/db/schema";
import { createMailer } from "@/lib/mailer";
import { isAllowedOrigin } from "@/lib/security/origin";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { uploadResume } from "@/lib/storage";
import {
  APPLY_MAX_LEN,
  EMAIL_RE,
  escapeHtml,
  field,
  multiLine,
  parseContentLength,
  singleLine,
} from "@/lib/validation";

// Vercel Functions reject request bodies over 4.5 MB, so keep the resume
// limit (plus multipart overhead) safely below that.
const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4 MB
const MAX_MULTIPART_OVERHEAD_BYTES = 400 * 1024; // 400 KB
const MAX_REQUEST_BYTES = MAX_RESUME_BYTES + MAX_MULTIPART_OVERHEAD_BYTES;
const ALLOWED_RESUME_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request.headers)) {
      return NextResponse.json(
        { error: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    const contentLength = parseContentLength(request.headers);
    if (contentLength !== null && contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: "Request payload is too large. Resume file size exceeds the 4MB limit." },
        { status: 413 },
      );
    }

    const clientIp = getClientIp(request.headers);
    const rateLimit = checkRateLimit(`apply:${clientIp}`, {
      windowMs: 10 * 60 * 1000,
      maxRequests: 5,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many applications submitted. Please wait a few minutes and try again." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        },
      );
    }

    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid form submission. Please check your inputs and try again." },
        { status: 400 },
      );
    }

    // Honeypot trap: silently accept bot submissions without processing, storing, or emailing.
    const honeypot = field(formData, "website");
    if (honeypot.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Application submitted successfully.",
      });
    }

    const name = singleLine(field(formData, "name"));
    const email = singleLine(field(formData, "email"));
    const phone = singleLine(field(formData, "phone")) || null;
    const role = singleLine(field(formData, "role")) || "General Internship";
    const note = multiLine(field(formData, "note")) || null;
    const resumeFile = formData.get("resume");

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 },
      );
    }

    if (
      name.length > APPLY_MAX_LEN.name ||
      email.length > APPLY_MAX_LEN.email ||
      (phone !== null && phone.length > APPLY_MAX_LEN.phone) ||
      role.length > APPLY_MAX_LEN.role ||
      (note !== null && note.length > APPLY_MAX_LEN.note)
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json(
        { error: "A valid resume file is required." },
        { status: 400 },
      );
    }

    // Limit resume size to 4MB
    if (resumeFile.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume file size exceeds the 4MB limit." },
        { status: 400 },
      );
    }

    // Only accept PDF / Word documents, and derive the MIME type from the
    // extension rather than trusting the client-supplied type.
    const dotIndex = resumeFile.name.lastIndexOf(".");
    const ext = dotIndex > 0 ? resumeFile.name.slice(dotIndex + 1).toLowerCase() : "";
    const resumeMimeType = ALLOWED_RESUME_TYPES[ext];
    if (!resumeMimeType) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document (.pdf, .doc, .docx)." },
        { status: 400 },
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    if (resumeBuffer.length > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume file size exceeds the 4MB limit." },
        { status: 400 },
      );
    }

    // Verify file signature matches the extension.
    const isPdf = resumeBuffer.length >= 5 && resumeBuffer.subarray(0, 5).toString("latin1") === "%PDF-";
    const isZip =
      resumeBuffer.length >= 4 &&
      resumeBuffer[0] === 0x50 &&
      resumeBuffer[1] === 0x4b &&
      resumeBuffer[2] === 0x03 &&
      resumeBuffer[3] === 0x04; // .docx
    const isOle =
      resumeBuffer.length >= 4 &&
      resumeBuffer.subarray(0, 4).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0])); // .doc
    if ((ext === "pdf" && !isPdf) || (ext === "docx" && !isZip) || (ext === "doc" && !isOle)) {
      return NextResponse.json(
        { error: "The resume file appears to be corrupted or is not a real PDF/Word document." },
        { status: 400 },
      );
    }

    const baseName =
      resumeFile.name
        .slice(0, dotIndex)
        .replace(/[^\w.\- ]+/g, "_")
        .slice(0, 80) || "resume";
    const resumeFileName = `${baseName}.${ext}`;

    console.log(
      `[INTERNSHIP APPLICATION RECEIVED] role="${role}" resume=${ext} ${Math.round(resumeFile.size / 1024)}KB`,
    );

    // 1. Upload resume to private Storage (continue with null path if storage fails).
    let resumePath: string | null = null;
    try {
      resumePath = await uploadResume(resumeBuffer, resumeMimeType, ext);
    } catch (err: unknown) {
      console.error("[RESUME UPLOAD ERROR]", err instanceof Error ? err.message : "Unknown storage error");
    }

    // 2. Persist application row to Postgres.
    const db = getDb();
    let insertedId: string | null = null;
    if (db) {
      try {
        const [inserted] = await db
          .insert(internshipApplications)
          .values({
            fullName: name,
            email,
            phone,
            role,
            note,
            resumePath,
            resumeFileName,
            resumeMimeType,
            resumeSizeBytes: resumeBuffer.length,
          })
          .returning({ id: internshipApplications.id });
        insertedId = inserted?.id ?? null;
      } catch (err: unknown) {
        console.error("[APPLICATION DB ERROR]", err instanceof Error ? err.message : "Unknown database error");
      }
    }

    // 3. Send email notification if SMTP is configured.
    const mailer = createMailer("Logix Internships");
    let emailSent = false;
    if (mailer) {
      const displayPhone = phone ?? "Not provided";
      const displayNote = note ?? "None";
      const h = {
        name: escapeHtml(name),
        email: escapeHtml(email),
        phone: escapeHtml(displayPhone),
        role: escapeHtml(role),
        note: escapeHtml(displayNote),
        file: escapeHtml(resumeFileName),
      };

      const recipientEmail =
        process.env.INTERNSHIP_NOTIFICATION_EMAIL ||
        process.env.HR_EMAIL ||
        "info@logixofficial.site";

      const mailOptions = {
        from: mailer.from,
        to: recipientEmail,
        replyTo: email,
        subject: `[New Internship Application] ${role} — ${name}`,
        text: `New Internship Application Received:
----------------------------------------
Role: ${role}
Name: ${name}
Email: ${email}
Phone: ${displayPhone}
Note / Message:
${displayNote}

Resume attached: ${resumeFileName}
`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0b1f3a; padding: 24px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Internship Application</h2>
              <p style="margin: 4px 0 0 0; color: #22d3b0; font-size: 14px;">Logix Talent Acquisition</p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Position Applied:</td>
                  <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${h.role}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Full Name:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${h.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${encodeURIComponent(email)}" style="color: #0e9983; text-decoration: none;">${h.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${h.phone}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #334155; font-size: 13px;">Applicant Note:</p>
                <p style="margin: 0; color: #475569; font-size: 14px; white-space: pre-wrap;">${h.note}</p>
              </div>
              <div style="margin-top: 20px; padding: 12px 16px; background-color: #f0fdfa; border-radius: 6px; border: 1px solid #99f6e4; color: #0f766e; font-size: 13px;">
                📎 <strong>Resume Attached:</strong> ${h.file} (${Math.round(resumeFile.size / 1024)} KB)
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              This notification was generated automatically by Logix Internships Portal.
            </div>
          </div>
        `,
        attachments: [
          {
            filename: resumeFileName,
            content: resumeBuffer,
            contentType: resumeMimeType,
          },
        ],
      };

      try {
        await mailer.transporter.sendMail(mailOptions);
        emailSent = true;
        console.log("[EMAIL DISPATCHED] Successfully emailed internship application.");
      } catch (err: unknown) {
        console.error("[APPLICATION EMAIL ERROR]", err instanceof Error ? err.message : "Unknown email error");
      }
    } else {
      console.log(
        "[EMAIL READY] SMTP credentials not configured yet. Application validated and ready for dispatch once SMTP is provided.",
      );
    }

    if (db && insertedId && emailSent) {
      try {
        await db
          .update(internshipApplications)
          .set({ emailSent: true })
          .where(eq(internshipApplications.id, insertedId));
      } catch (err: unknown) {
        console.error("[APPLICATION DB UPDATE ERROR]", err instanceof Error ? err.message : "Unknown database error");
      }
    }

    const neitherConfigured = !db && !mailer;
    if (!insertedId && !emailSent && !neitherConfigured) {
      return NextResponse.json(
        {
          error: "An error occurred while submitting your application. Please try again or email us directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err: unknown) {
    console.error("[APPLICATION ERROR]", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      {
        error: "An error occurred while submitting your application. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
