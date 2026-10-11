"use client";

import {
  Code2,
  GitBranch,
  Cloud,
  Activity,
  Zap,
  ShieldCheck,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

interface Principle {
  id: string;
  title: string;
  category: string;
  tech: string;
  shortDesc: string;
  metric: string;
  icon: typeof Code2;
}

const principles: Principle[] = [
  {
    id: "type-safety",
    title: "Type-Safe Invariants",
    category: "Architecture",
    tech: "TypeScript · Zod",
    shortDesc: "End-to-end static typing from schema contracts to client components.",
    metric: "0 Schema Drift",
    icon: Code2,
  },
  {
    id: "cicd-gates",
    title: "Automated CI/CD Gates",
    category: "Reliability",
    tech: "GitHub Actions · Playwright",
    shortDesc: "Trunk-based pipelines with unit, integration & E2E regression suites.",
    metric: "100% Automated PR Gates",
    icon: GitBranch,
  },
  {
    id: "cloud-iac",
    title: "Declarative Cloud IaC",
    category: "Infrastructure",
    tech: "Terraform · Docker · AWS",
    shortDesc: "Immutable infrastructure defined as code with automated drift detection.",
    metric: "100% Code-Defined Infra",
    icon: Cloud,
  },
  {
    id: "observability",
    title: "Distributed Observability",
    category: "Operations",
    tech: "OpenTelemetry · Grafana",
    shortDesc: "Full-stack APM, distributed trace spans, and SLO-driven alerting.",
    metric: "<60s Incident MTTA",
    icon: Activity,
  },
  {
    id: "latency",
    title: "Sub-100ms Edge Latency",
    category: "Performance",
    tech: "Edge CDN · Redis · CWV",
    shortDesc: "Sub-second TTFB, edge compute, and aggressive caching strategies.",
    metric: "<100ms Edge TTFB",
    icon: Zap,
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security",
    category: "Security",
    tech: "KMS · OAuth · SOC2",
    shortDesc: "Least-privilege IAM, encrypted secrets, and continuous SAST scans.",
    metric: "SOC2 Type II Ready",
    icon: ShieldCheck,
  },
];

export function TechnicalPrinciples() {
  return (
    <section className="bg-background py-20 lg:py-28 border-b border-border overflow-hidden">
      <div className="container-x">
        <SectionHeader
          eyebrow="TECHNICAL RIGOR"
          title="Technical principles that govern every system we ship."
          description="We founded Logix to provide the antithesis of the traditional dev shop. We engineer software with strict typing, automated verification, cloud-native resilience, and zero-trust security."
        />

        {/* Orbit Visual Stage - Cards continuously rotating around the central orb */}
        <div className="relative mx-auto mt-6 sm:mt-10 flex items-center justify-center">
          <div
            className={cn(
              "relative flex items-center justify-center select-none",
              "h-[480px] w-full max-w-[480px] sm:h-[580px] sm:max-w-[580px] lg:h-[660px] lg:max-w-[660px]",
              // Responsive scaling for seamless mobile fit
              "scale-[0.78] sm:scale-95 lg:scale-100 transition-transform origin-center"
            )}
            style={
              {
                "--orbit-r": "clamp(150px, 26vw, 245px)",
              } as React.CSSProperties
            }
          >
            {/* Background Decorative Orbit Rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Outer Dashed Orbit Path */}
              <div
                className="rounded-full border border-dashed border-border/80"
                style={{
                  width: "calc(var(--orbit-r) * 2)",
                  height: "calc(var(--orbit-r) * 2)",
                }}
              />
              {/* Inner Decorative Accent Ring */}
              <div
                className="absolute rounded-full border border-brand/20"
                style={{
                  width: "calc(var(--orbit-r) * 1.35)",
                  height: "calc(var(--orbit-r) * 1.35)",
                }}
              />
              {/* Central Glowing Pulse Aura */}
              <div className="absolute size-52 sm:size-60 rounded-full bg-brand/10 blur-2xl" />
            </div>

            {/* Central Orb */}
            <div className="relative z-10 flex size-40 sm:size-48 lg:size-56 items-center justify-center rounded-full border border-brand/30 bg-background/95 p-5 text-center shadow-2xl backdrop-blur-md">
              <div className="flex flex-col items-center">
                <div className="flex size-11 sm:size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg ring-2 ring-brand/40">
                  <Terminal className="size-5 sm:size-6 text-brand" />
                </div>
                <span className="mt-2.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-strong">
                  Logix Core
                </span>
                <h4 className="mt-1 text-xs sm:text-sm font-bold tracking-tight text-primary">
                  System Architecture
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground max-w-[140px]">
                  6 autonomous production pillars
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-brand-strong">
                  <span className="size-1.5 rounded-full bg-brand-strong animate-ping" />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>

            {/* Orbit Track - Continuously rotating clockwise around the Central Orb */}
            <div className="orbit-track pointer-events-none absolute inset-0 size-full">
              {principles.map((item, index) => {
                const angleDeg = (360 / principles.length) * index;
                const angleRad = (angleDeg * Math.PI) / 180;
                const cos = Math.cos(angleRad);
                const sin = Math.sin(angleRad);
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + (var(--orbit-r) * ${cos.toFixed(4)}))`,
                      top: `calc(50% + (var(--orbit-r) * ${sin.toFixed(4)}))`,
                    }}
                  >
                    {/* Orbit Item - Counter-rotating counter-clockwise so the card stays upright */}
                    <div className="orbit-item pointer-events-auto">
                      <article className="group flex w-[180px] sm:w-[210px] flex-col rounded-xl border border-border bg-background/95 p-3 sm:p-3.5 text-left shadow-md backdrop-blur-md transition-all duration-300 hover:border-brand-strong/60 hover:shadow-xl hover:scale-105 select-none">
                        {/* Header */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-lg border border-brand-strong/20 bg-accent text-brand-strong shadow-xs transition-colors group-hover:bg-brand-strong group-hover:text-white">
                            <Icon className="size-3.5 sm:size-4" />
                          </div>
                          <span className="truncate rounded-md bg-muted px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium text-muted-foreground border border-border">
                            {item.tech.split("·")[0].trim()}
                          </span>
                        </div>

                        {/* Title & Short Description */}
                        <h4 className="mt-2 text-xs sm:text-sm font-bold tracking-tight text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[11px] leading-4 text-muted-foreground line-clamp-2">
                          {item.shortDesc}
                        </p>

                        {/* Metric Badge */}
                        <div className="mt-2.5 flex items-center gap-1 border-t border-border/60 pt-1.5 text-[10px] font-medium text-brand-strong">
                          <CheckCircle2 className="size-3 shrink-0" />
                          <span className="truncate">{item.metric}</span>
                        </div>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
