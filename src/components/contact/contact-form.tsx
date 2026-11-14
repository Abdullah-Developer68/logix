"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      let data: { error?: string } | null = null;
      try {
        data = (await res.json()) as { error?: string };
      } catch {
        data = null;
      }

      if (!res.ok) {
        const fallbackByStatus: Record<number, string> = {
          400: "Please check your inquiry details and try again.",
          403: "Request blocked for security reasons. Please refresh the page and try again.",
          413: "Your message is too large. Please shorten your project details.",
          429: "Too many submissions from your connection. Please wait a few minutes and try again.",
          500: "Failed to submit inquiry. Please try again or email us directly.",
        };
        throw new Error(
          data?.error ||
            fallbackByStatus[res.status] ||
            "Failed to submit inquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-accent/30 p-8 text-center sm:p-10">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-primary">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary">Message Received</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. A senior technical lead will review your message and respond within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 sm:gap-5 rounded-xl border border-border bg-background p-5 sm:p-8 shadow-sm"
    >
      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs sm:text-sm text-destructive flex items-start gap-2">
          <svg className="size-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Honeypot field for bot detection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary">
          Your Name *
        </label>
        <Input id="name" name="name" required maxLength={120} autoComplete="name" placeholder="Your Name" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-primary">
          Work Email *
        </label>
        <Input id="email" name="email" required type="email" maxLength={254} autoComplete="email" placeholder="Email" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-primary">
          Company / Organization
        </label>
        <Input id="company" name="company" maxLength={120} autoComplete="organization" placeholder="Your Company" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="details" className="text-xs font-semibold uppercase tracking-wider text-primary">
          Project Details *
        </label>
        <Textarea
          id="details"
          name="details"
          required
          maxLength={4000}
          rows={5}
          placeholder="Tell us what you're building, key challenges, or target launch timeline..."
        />
      </div>

      <Button type="submit" variant="default" size="lg" disabled={loading} className="w-full mt-2">
        {loading ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
