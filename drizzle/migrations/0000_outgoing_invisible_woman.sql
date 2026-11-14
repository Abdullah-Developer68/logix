CREATE TABLE "internship_applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"role" text NOT NULL,
	"note" text,
	"resume_path" text,
	"resume_file_name" text,
	"resume_mime_type" text,
	"resume_size_bytes" integer,
	"status" text DEFAULT 'new' NOT NULL,
	"email_sent" boolean DEFAULT false NOT NULL,
	CONSTRAINT "internship_applications_status_check" CHECK ("internship_applications"."status" IN ('new', 'reviewing', 'shortlisted', 'rejected', 'hired'))
);
--> statement-breakpoint
ALTER TABLE "internship_applications" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "project_inquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"company" text,
	"details" text NOT NULL,
	"status" text DEFAULT 'new' NOT NULL,
	"email_sent" boolean DEFAULT false NOT NULL,
	CONSTRAINT "project_inquiries_status_check" CHECK ("project_inquiries"."status" IN ('new', 'contacted', 'in_progress', 'won', 'lost', 'closed'))
);
--> statement-breakpoint
ALTER TABLE "project_inquiries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE INDEX "internship_applications_created_at_idx" ON "internship_applications" USING btree ("created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "internship_applications_email_idx" ON "internship_applications" USING btree ("email");--> statement-breakpoint
CREATE INDEX "project_inquiries_created_at_idx" ON "project_inquiries" USING btree ("created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "project_inquiries_email_idx" ON "project_inquiries" USING btree ("email");