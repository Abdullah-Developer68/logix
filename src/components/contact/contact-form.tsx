"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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
      className="flex flex-col gap-4 sm:gap-5 rounded-xl border border-border bg-background p-5 sm:p-8 shadow-sm"
    >
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
