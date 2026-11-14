import { sql } from "drizzle-orm";
import { boolean, check, index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const internshipApplications = pgTable(
  "internship_applications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    role: text("role").notNull(),
    note: text("note"),
    resumePath: text("resume_path"),
    resumeFileName: text("resume_file_name"),
    resumeMimeType: text("resume_mime_type"),
    resumeSizeBytes: integer("resume_size_bytes"),
    status: text("status").default("new").notNull(),
    emailSent: boolean("email_sent").default(false).notNull(),
  },
  (table) => [
    index("internship_applications_created_at_idx").on(table.createdAt.desc()),
    index("internship_applications_email_idx").on(table.email),
    check(
      "internship_applications_status_check",
      sql`${table.status} IN ('new', 'reviewing', 'shortlisted', 'rejected', 'hired')`,
    ),
  ],
).enableRLS();

export const projectInquiries = pgTable(
  "project_inquiries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    company: text("company"),
    details: text("details").notNull(),
    status: text("status").default("new").notNull(),
    emailSent: boolean("email_sent").default(false).notNull(),
  },
  (table) => [
    index("project_inquiries_created_at_idx").on(table.createdAt.desc()),
    index("project_inquiries_email_idx").on(table.email),
    check(
      "project_inquiries_status_check",
      sql`${table.status} IN ('new', 'contacted', 'in_progress', 'won', 'lost', 'closed')`,
    ),
  ],
).enableRLS();
