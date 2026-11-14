import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { projectInquiries } from "@/db/schema";
import { createMailer } from "@/lib/mailer";
import { isAllowedOrigin } from "@/lib/security/origin";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import {
  CONTACT_MAX_LEN,
  CONTACT_MIN_DETAILS_LEN,
  EMAIL_RE,
  escapeHtml,
  field,
  multiLine,
  parseContentLength,
  singleLine,
} from "@/lib/validation";

const MAX_REQUEST_BYTES = 32 * 1024; // 32 KB

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
        { error: "Request payload is too large." },
        { status: 413 },
      );
    }

    const clientIp = getClientIp(request.headers);
    const rateLimit = checkRateLimit(`contact:${clientIp}`, {
      windowMs: 10 * 60 * 1000,
      maxRequests: 5,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many inquiries submitted. Please wait a few minutes and try again." },
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
        message: "Inquiry submitted successfully.",
      });
    }

    const name = singleLine(field(formData, "name"));
    const email = singleLine(field(formData, "email"));
    const company = singleLine(field(formData, "company")) || null;
    const details = multiLine(field(formData, "details"));

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required fields." },
        { status: 400 },
      );
    }

    if (
      name.length > CONTACT_MAX_LEN.name ||
      email.length > CONTACT_MAX_LEN.email ||
      (company !== null && company.length > CONTACT_MAX_LEN.company) ||
      details.length > CONTACT_MAX_LEN.details
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

    if (details.length < CONTACT_MIN_DETAILS_LEN) {
      return NextResponse.json(
        {
          error: `Please provide at least ${CONTACT_MIN_DETAILS_LEN} characters of project details.`,
        },
        { status: 400 },
      );
    }

    console.log("[PROJECT INQUIRY RECEIVED]");

    // 1. Persist inquiry row to Postgres.
    const db = getDb();
    let insertedId: string | null = null;
    if (db) {
      try {
        const [inserted] = await db
          .insert(projectInquiries)
          .values({
            fullName: name,
            email,
            company,
            details,
          })
          .returning({ id: projectInquiries.id });
        insertedId = inserted?.id ?? null;
      } catch (err: unknown) {
        console.error("[CONTACT DB ERROR]", err instanceof Error ? err.message : "Unknown database error");
      }
    }

    // 2. Send email notification if SMTP is configured.
    const mailer = createMailer("Logix");
    let emailSent = false;
    if (mailer) {
      const displayCompany = company ?? "Not provided";
      const h = {
        name: escapeHtml(name),
        email: escapeHtml(email),
        company: escapeHtml(displayCompany),
        details: escapeHtml(details),
      };

      const recipientEmail =
        process.env.CONTACT_NOTIFICATION_EMAIL ||
        process.env.INTERNSHIP_NOTIFICATION_EMAIL ||
        "info@logixofficial.site";

      const mailOptions = {
        from: mailer.from,
        to: recipientEmail,
        replyTo: email,
        subject: `[New Project Inquiry] ${company || name}`,
        text: `New Project Inquiry Received:
----------------------------------------
Name: ${name}
Email: ${email}
Company: ${displayCompany}
Project Details:
${details}
`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0b1f3a; padding: 24px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Project Inquiry</h2>
              <p style="margin: 4px 0 0 0; color: #22d3b0; font-size: 14px;">Logix Contact Portal</p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
                  <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${h.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Work Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${encodeURIComponent(email)}" style="color: #0e9983; text-decoration: none;">${h.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${h.company}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #334155; font-size: 13px;">Project Details:</p>
                <p style="margin: 0; color: #475569; font-size: 14px; white-space: pre-wrap;">${h.details}</p>
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              This notification was generated automatically by Logix Contact Portal.
            </div>
          </div>
        `,
      };

      try {
        await mailer.transporter.sendMail(mailOptions);
        emailSent = true;
        console.log("[EMAIL DISPATCHED] Successfully emailed project inquiry.");
      } catch (err: unknown) {
        console.error("[CONTACT EMAIL ERROR]", err instanceof Error ? err.message : "Unknown email error");
      }
    } else {
      console.log(
        "[EMAIL READY] SMTP credentials not configured yet. Inquiry validated and ready for dispatch once SMTP is provided.",
      );
    }

    if (db && insertedId && emailSent) {
      try {
        await db
          .update(projectInquiries)
          .set({ emailSent: true })
          .where(eq(projectInquiries.id, insertedId));
      } catch (err: unknown) {
        console.error("[CONTACT DB UPDATE ERROR]", err instanceof Error ? err.message : "Unknown database error");
      }
    }

    const neitherConfigured = !db && !mailer;
    if (!insertedId && !emailSent && !neitherConfigured) {
      return NextResponse.json(
        {
          error: "An error occurred while submitting your inquiry. Please try again or email us directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (err: unknown) {
    console.error("[CONTACT ERROR]", err instanceof Error ? err.message : "Unknown error");
    return NextResponse.json(
      {
        error: "An error occurred while submitting your inquiry. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
