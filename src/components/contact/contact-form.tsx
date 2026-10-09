"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const servicesList = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Custom Software",
  "Cloud & DevOps",
  "AI & Automation",
];

const budgetRanges = ["< $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [budget, setBudget] = useState<string>("$25k - $50k");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-accent p-8 text-center sm:p-12">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-primary">
          ✓
        </div>
        <h3 className="mt-4 text-2xl font-bold text-primary">Inquiry Received</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out to Logix. A senior technical lead will review your project requirements and respond within 24 hours to schedule our discovery call.
        </p>
        <div className="mt-6">
          <Badge variant="brand" dot={false} className="border border-brand-strong/20">
            Mutual NDA automatically applied
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-background p-6 sm:p-10 shadow-sm">
      {/* Name and Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Your Name *
          </label>
          <Input required placeholder="Alex Mercer" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Work Email *
          </label>
          <Input required type="email" placeholder="you@company.com" />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          Company / Organization
        </label>
        <Input placeholder="Northwind Logistics" />
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          Services Needed
        </label>
        <div className="flex flex-wrap gap-2">
          {servicesList.map((srv) => {
            const isSelected = selectedServices.includes(srv);
            return (
              <button
                key={srv}
                type="button"
                onClick={() => toggleService(srv)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors",
                  isSelected
                    ? "border-brand-strong bg-accent text-brand-strong font-semibold"
                    : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {isSelected ? "✓ " : "+ "}
                {srv}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          Estimated Project Budget
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {budgetRanges.map((b) => {
            const isSelected = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={cn(
                  "rounded-lg py-2 text-center text-xs font-semibold border transition-colors",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Details Textarea */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          Project Details *
        </label>
        <Textarea
          required
          rows={4}
          placeholder="Tell us what you're building, key challenges, target launch timeline, or current technical stack..."
        />
      </div>

      {/* Privacy note & Submit button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <p className="text-xs text-muted-foreground">
          🔒 Strict confidentiality. We sign mutual NDAs before reviewing sensitive specs.
        </p>
        <Button type="submit" variant="default" size="lg" disabled={loading} className="shrink-0">
          {loading ? "Sending..." : "Submit Project Inquiry"}
        </Button>
      </div>
    </form>
  );
}

