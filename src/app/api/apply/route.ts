import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_LEN = { name: 120, email: 254, phone: 40, role: 120, note: 4000 } as const;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const ALLOWED_RESUME_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip control characters (incl. CR/LF) from single-line fields. */
function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

function field(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = singleLine(field(formData, "name"));
    const email = singleLine(field(formData, "email"));
    const phone = singleLine(field(formData, "phone")) || "Not provided";
    const role = singleLine(field(formData, "role")) || "General Internship";
    const note = field(formData, "note").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "") || "None";
    const resumeFile = formData.get("resume");

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 },
      );
    }

    if (
      name.length > MAX_LEN.name ||
      email.length > MAX_LEN.email ||
      phone.length > MAX_LEN.phone ||
      role.length > MAX_LEN.role ||
      note.length > MAX_LEN.note
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

    // Limit resume size to 10MB
    const maxSizeBytes = 10 * 1024 * 1024;
    if (resumeFile.size > maxSizeBytes) {
      return NextResponse.json(
        { error: "Resume file size exceeds the 10MB limit." },
        { status: 400 },
      );
    }

    // Only accept PDF / Word documents, and derive the MIME type from the
    // extension rather than trusting the client-supplied type.
    const ext = (resumeFile.name.split(".").pop() || "").toLowerCase();
    const resumeMimeType = ALLOWED_RESUME_TYPES[ext];
    if (!resumeMimeType) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document (.pdf, .doc, .docx)." },
        { status: 400 },
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);

    // Verify file signature matches the extension.
    const isPdf = resumeBuffer.subarray(0, 5).toString("latin1") === "%PDF-";
    const isZip = resumeBuffer[0] === 0x50 && resumeBuffer[1] === 0x4b; // .docx
    const isOle = resumeBuffer.subarray(0, 4).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0])); // .doc
    if ((ext === "pdf" && !isPdf) || (ext === "docx" && !isZip) || (ext === "doc" && !isOle)) {
      return NextResponse.json(
        { error: "The resume file appears to be corrupted or is not a real PDF/Word document." },
        { status: 400 },
      );
    }

    const baseName = resumeFile.name
      .slice(0, -(ext.length + 1))
      .replace(/[^\w.\- ]+/g, "_")
      .slice(0, 80) || "resume";
    const resumeFileName = `${baseName}.${ext}`;

    const h = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      role: escapeHtml(role),
      note: escapeHtml(note),
      file: escapeHtml(resumeFileName),
    };

    // Recipient email - configurable via env or placeholder
    // The user will provide the exact email later.
    const recipientEmail =
      process.env.INTERNSHIP_NOTIFICATION_EMAIL ||
      process.env.HR_EMAIL ||
      "internships@logix.dev";

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || `"Logix Talent Portal" <notifications@logix.dev>`;

    console.log(`[INTERNSHIP APPLICATION RECEIVED] role="${role}" resume=${ext} ${Math.round(resumeFile.size / 1024)}KB`);

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: smtpFrom,
        to: recipientEmail,
        replyTo: email,
        subject: `[New Internship Application] ${role} — ${name}`,
        text: `New Internship Application Received:
----------------------------------------
Role: ${role}
Name: ${name}
Email: ${email}
Phone: ${phone}
Note / Message:
${note}

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

      await transporter.sendMail(mailOptions);
      console.log(`[EMAIL DISPATCHED] Successfully emailed application to ${recipientEmail}`);
    } else {
      console.log(
        `[EMAIL READY] SMTP credentials not configured yet. Application details and resume (${resumeFileName}) captured and ready for dispatch once SMTP/target email is provided.`,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err: unknown) {
    console.error("[APPLICATION ERROR]", err);
    return NextResponse.json(
      {
        error: "An error occurred while submitting your application. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
