ALTER TABLE "internship_applications" DROP CONSTRAINT "internship_applications_status_check";--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "admin_notes" text;--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "contacted_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "reviewed_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "reviewed_by" text;--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "intern_record_id" text;--> statement-breakpoint
ALTER TABLE "internship_applications" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
CREATE INDEX "internship_applications_status_idx" ON "internship_applications" USING btree ("status");--> statement-breakpoint
ALTER TABLE "internship_applications" ADD CONSTRAINT "internship_applications_status_check" CHECK ("internship_applications"."status" IN ('new', 'contacted', 'reviewing', 'shortlisted', 'rejected', 'hired'));