"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  client: string;
  category: "all" | "web" | "mobile" | "enterprise" | "cloud-ai";
  categoryLabel: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
  inverted?: boolean;
}

const projects: Project[] = [
  {
    id: "northwind",
    client: "Northwind Logistics",
    category: "web",
    categoryLabel: "Web Platform",
    title: "Automated dispatch platform cutting delivery turnaround by 31%",
    description:
      "Northwind's legacy dispatch tools caused driver dispatch errors and 45-minute communication delays. We engineered a reactive, real-time dispatch dashboard and driver portal that scaled across 10,000 daily routes.",
    metrics: [
      { label: "Delivery times drop", value: "31%" },
      { label: "Delivery timeline", value: "14 wks" },
      { label: "Daily active drivers", value: "10,000+" },
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    testimonial: {
      quote:
        "Logix rebuilt our dispatch platform in 14 weeks. Delivery times dropped 31% and our team finally has software they enjoy using.",
      author: "Sara Ahmed",
      role: "COO, Northwind Logistics",
      initials: "SA",
    },
    inverted: true,
  },
  {
    id: "skyscape",
    client: "Skyscape",
    category: "web",
    categoryLabel: "SaaS Application",
    title: "Real-time collaborative document platform launched in 10 weeks",
    description:
      "Engineered an enterprise collaboration workspace with WebSockets conflict resolution, high-concurrency document state synchrony, and sub-50ms latency across global geographies.",
    metrics: [
      { label: "Time to MVP launch", value: "10 wks" },
      { label: "System availability", value: "99.99%" },
      { label: "Concurrent sessions", value: "400k+" },
    ],
    tags: ["React", "WebSockets", "Node.js", "AWS", "Redis"],
    testimonial: {
      quote:
        "They shipped our MVP in 10 weeks and the codebase was cleaner than anything we'd had before.",
      author: "Marcus Lee",
      role: "CTO, Skyscape",
      initials: "ML",
    },
  },
  {
    id: "fieldly",
    client: "Fieldly",
    category: "mobile",
    categoryLabel: "Mobile Application",
    title: "Offline-first technician mobile app for remote industrial sites",
    description:
      "Equipped 45,000 industrial technicians with an offline SQLite mobile app capable of logging inspections in remote areas without cellular connectivity, with automated two-way cloud sync.",
    metrics: [
      { label: "Active technicians", value: "45,000" },
      { label: "Offline data loss", value: "0%" },
      { label: "Sync turnaround", value: "< 2 sec" },
    ],
    tags: ["React Native", "Expo", "SQLite", "iOS & Android", "AWS IoT"],
  },
  {
    id: "peachcloud",
    client: "PeachCloud",
    category: "enterprise",
    categoryLabel: "Analytics Engine",
    title: "Sub-second analytical querying across 2.4 billion business events",
    description:
      "Modernized customer reporting infrastructure by implementing columnar data indexing with ClickHouse and an ergonomic Next.js dashboard, slashing query latency by 85%.",
    metrics: [
      { label: "Query latency reduction", value: "85%" },
      { label: "Records indexed", value: "2.4B+" },
      { label: "Infra cost savings", value: "50%" },
    ],
    tags: ["Next.js", "ClickHouse", "Go", "Docker", "REST API"],
  },
  {
    id: "kora-pay",
    client: "Kora Pay",
    category: "cloud-ai",
    categoryLabel: "Fintech Infrastructure",
    title: "PCI-DSS compliant cross-border payment settlement architecture",
    description:
      "Constructed a high-throughput multi-currency settlement gateway featuring automated fraud scoring, double-entry ledger bookkeeping, and automated bank reconciliation.",
    metrics: [
      { label: "Volume processed", value: "$120M+" },
      { label: "Payment uptime", value: "99.98%" },
      { label: "Security compliance", value: "PCI-DSS" },
    ],
    tags: ["Kubernetes", "Node.js", "Terraform", "PostgreSQL", "HashiCorp Vault"],
  },
  {
    id: "lumeris",
    client: "Lumeris Health",
    category: "enterprise",
    categoryLabel: "Healthcare Portal",
    title: "HIPAA-compliant provider coordination and patient telemetry portal",
    description:
      "Developed a clinical coordination portal compliant with FHIR health standards and SOC2 Type II controls, enabling seamless multi-clinic collaboration without data leakage.",
    metrics: [
      { label: "Patient records secured", value: "250k+" },
      { label: "Compliance audit", value: "SOC2 II" },
      { label: "Provider adoption", value: "94%" },
    ],
    tags: ["Next.js", "GraphQL", "FHIR API", "AWS GovCloud", "TypeScript"],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "enterprise", label: "Enterprise Systems" },
  { id: "cloud-ai", label: "Cloud & Fintech" },
] as const;

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-border/60 hover:text-foreground",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((p) => (
          <Card
            key={p.id}
            inverted={p.inverted}
            className="flex flex-col justify-between p-8 transition-all hover:border-brand-strong/40"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "text-xs font-bold tracking-wider uppercase",
                    p.inverted ? "text-brand" : "text-brand-strong",
                  )}
                >
                  {p.client}
                </span>
                <Badge
                  variant={p.inverted ? "secondary" : "brand"}
                  dot={!p.inverted}
                  className={p.inverted ? "bg-white/10 text-white border-0" : ""}
                >
                  {p.categoryLabel}
                </Badge>
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 text-xl font-bold leading-tight">{p.title}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-6",
                  p.inverted ? "text-white/70" : "text-muted-foreground",
                )}
              >
                {p.description}
              </p>

              {/* Key Metrics */}
              <div
                className={cn(
                  "mt-6 grid grid-cols-3 gap-3 rounded-lg p-4 border",
                  p.inverted
                    ? "bg-white/5 border-white/10"
                    : "bg-muted border-border",
                )}
              >
                {p.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className={cn(
                        "text-lg font-bold tracking-tight",
                        p.inverted ? "text-brand" : "text-primary",
                      )}
                    >
                      {m.value}
                    </div>
                    <div
                      className={cn(
                        "mt-1 text-[11px] leading-tight",
                        p.inverted ? "text-white/60" : "text-muted-foreground",
                      )}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "rounded px-2 py-0.5 text-xs font-medium",
                      p.inverted
                        ? "bg-white/10 text-white"
                        : "bg-accent text-brand-strong border border-brand-strong/15",
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Client Quote */}
              {p.testimonial && (
                <div
                  className={cn(
                    "mt-6 border-t pt-5",
                    p.inverted ? "border-white/15" : "border-border",
                  )}
                >
                  <p
                    className={cn(
                      "text-xs italic leading-5",
                      p.inverted ? "text-white/80" : "text-muted-foreground",
                    )}
                  >
                    “{p.testimonial.quote}”
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    <Avatar
                      initials={p.testimonial.initials}
                      className={cn(
                        "size-7 text-[11px]",
                        p.inverted
                          ? "bg-brand text-primary"
                          : "bg-accent text-brand-strong",
                      )}
                    />
                    <div className="text-xs">
                      <span className="font-semibold">{p.testimonial.author}</span>
                      <span
                        className={cn(
                          "ml-1.5",
                          p.inverted ? "text-white/60" : "text-muted-foreground",
                        )}
                      >
                        · {p.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Inquire link */}
            <div className="mt-8 pt-4">
              <Link
                href={`/contact?project=${p.id}`}
                className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline",
                  p.inverted
                    ? "text-brand hover:text-brand"
                    : "text-primary hover:text-brand-strong",
                )}
              >
                Start a similar project with Logix →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

