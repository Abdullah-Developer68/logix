import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim() || "Not provided";
    const role = formData.get("role")?.toString().trim() || "General Internship";
    const portfolio = formData.get("portfolio")?.toString().trim() || "Not provided";
    const note = formData.get("note")?.toString().trim() || "None";
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 },
      );
    }

    if (!resumeFile || typeof resumeFile === "string" || resumeFile.size === 0) {
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

    // Convert resume file to buffer for email attachment
    const arrayBuffer = await resumeFile.arrayBuffer();
    const resumeBuffer = Buffer.from(arrayBuffer);
    const resumeFileName = resumeFile.name || "resume.pdf";
    const resumeMimeType = resumeFile.type || "application/pdf";

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

    console.log("====================================================");
    console.log("[INTERNSHIP APPLICATION RECEIVED]");
    console.log(`Role: ${role}`);
    console.log(`Applicant Name: ${name}`);
    console.log(`Applicant Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Portfolio/GitHub: ${portfolio}`);
    console.log(`Resume: ${resumeFileName} (${Math.round(resumeFile.size / 1024)} KB, ${resumeMimeType})`);
    console.log(`Note: ${note}`);
    console.log(`Notification Target: ${recipientEmail}`);
    console.log("====================================================");

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
Portfolio / Links: ${portfolio}
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
                  <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${role}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Full Name:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0e9983; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Portfolio / Link:</td>
                  <td style="padding: 8px 0;"><a href="${portfolio}" target="_blank" style="color: #0e9983; text-decoration: none;">${portfolio}</a></td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #334155; font-size: 13px;">Applicant Note:</p>
                <p style="margin: 0; color: #475569; font-size: 14px; white-space: pre-wrap;">${note}</p>
              </div>
              <div style="margin-top: 20px; padding: 12px 16px; background-color: #f0fdfa; border-radius: 6px; border: 1px solid #99f6e4; color: #0f766e; font-size: 13px;">
                📎 <strong>Resume Attached:</strong> ${resumeFileName} (${Math.round(resumeFile.size / 1024)} KB)
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
      applicant: {
        name,
        email,
        role,
        resume: resumeFileName,
      },
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
