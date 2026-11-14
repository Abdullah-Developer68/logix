import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

export interface Mailer {
  transporter: Transporter;
  from: string;
}

export function createMailer(defaultFromName = "Logix"): Mailer | null {
  const smtpHost = process.env.SMTP_HOST;
  const parsedPort = process.env.SMTP_PORT ? Number.parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpPort = Number.isInteger(parsedPort) && parsedPort > 0 && parsedPort <= 65535 ? parsedPort : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  const from =
    process.env.SMTP_FROM ||
    (smtpUser ? `"${defaultFromName}" <${smtpUser}>` : `"${defaultFromName}" <info@logixofficial.site>`);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return { transporter, from };
}
