"use client";

import { useState } from "react";
import {
  Code2,
  GitBranch,
  Cloud,
  Activity,
  Zap,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface Principle {
  id: string;
  word: string;
  icon: typeof Code2;
}

const principles: Principle[] = [
  {
    id: "type-safety",
    word: "TypeScript",
    icon: Code2,
  },
  {
    id: "cicd-gates",
    word: "CI/CD",
    icon: GitBranch,
  },
  {
    id: "cloud-iac",
    word: "Cloud",
    icon: Cloud,
  },
  {
    id: "observability",
    word: "Telemetry",
    icon: Activity,
  },
  {
    id: "latency",
    word: "Edge",
    icon: Zap,
  },
  {
    id: "zero-trust",
    word: "Security",
    icon: ShieldCheck,
  },
];

export function TechnicalPrinciples() {
  const [activeOrb, setActiveOrb] = useState<string | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28 border-b border-border overflow-hidden">
      <div className="container-x">
        <SectionHeader
          eyebrow="SYSTEM ARCHITECTURE"
          title="Six core engineering principles in continuous orbit."
          description="Hover over any orbiting node to explore the pillars that govern every system we ship — from strict static typing and automated CI/CD gates to edge computing and zero-trust security."
        />

        {/* Orbit Visual Stage - Circular orbs rotating around the central orb */}
        <div className="relative mx-auto mt-6 sm:mt-10 flex h-[360px] sm:h-[460px] lg:h-[560px] items-center justify-center">
          <div className="orbit-stage relative flex items-center justify-center select-none w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] transition-transform origin-center">
            {/* Background Decorative Orbit Rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Outer Dashed Orbit Path */}
              <div
                className="rounded-full border border-dashed border-border/80 dark:border-white/15"
                style={{
                  width: "calc(var(--orbit-r) * 2)",
                  height: "calc(var(--orbit-r) * 2)",
                }}
              />
              {/* Inner Decorative Accent Ring */}
              <div
                className="absolute rounded-full border border-brand/20 dark:border-brand/15"
                style={{
                  width: "calc(var(--orbit-r) * 1.35)",
                  height: "calc(var(--orbit-r) * 1.35)",
                }}
              />
              {/* Central Glowing Pulse Aura */}
              <div className="absolute size-32 sm:size-48 lg:size-60 rounded-full bg-brand/10 dark:bg-brand/15 blur-2xl" />
            </div>

            {/* Central Orb */}
            <div className="relative z-10 flex size-16 sm:size-20 lg:size-24 items-center justify-center rounded-full border border-brand/40 bg-background/95 dark:bg-[#081220]/95 shadow-2xl backdrop-blur-md group cursor-default ring-4 ring-brand/10 transition-transform duration-300 hover:scale-105">
              <div className="flex size-9 sm:size-11 lg:size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-brand/40">
                <Terminal className="size-4.5 sm:size-5.5 lg:size-6 text-brand" />
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
                const isSelected = activeOrb === item.id;

                return (
                  <div
                    key={item.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + (var(--orbit-r) * ${cos.toFixed(4)}))`,
                      top: `calc(50% + (var(--orbit-r) * ${sin.toFixed(4)}))`,
                    }}
                  >
                    {/* Orbit Item - Counter-rotating counter-clockwise so the orb and tooltip stay upright */}
                    <div className="orbit-item pointer-events-auto">
                      <div className="group relative flex items-center justify-center">
                        {/* Circular Orb */}
                        <button
                          type="button"
                          aria-label={item.word}
                          onClick={() => setActiveOrb(isSelected ? null : item.id)}
                          onMouseEnter={() => setActiveOrb(item.id)}
                          onMouseLeave={() => setActiveOrb(null)}
                          className={`relative flex size-12 sm:size-14 lg:size-16 cursor-pointer items-center justify-center rounded-full border bg-background/90 dark:bg-[#0c182a]/95 text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-120 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            isSelected
                              ? "scale-120 border-brand shadow-[0_0_24px_rgba(34,211,176,0.6)] bg-accent/40"
                              : "border-border/80 dark:border-brand/20 hover:border-brand hover:shadow-[0_0_24px_rgba(34,211,176,0.5)] hover:bg-accent/30"
                          }`}
                        >
                          {/* Subtle inner pulse glow */}
                          <span className="absolute inset-0 rounded-full bg-brand/5 group-hover:bg-brand/20 transition-colors" />

                          {/* Icon */}
                          <Icon className="relative z-10 size-5 sm:size-6 lg:size-7 text-brand-strong transition-transform duration-300 group-hover:scale-110 group-hover:text-brand" />
                        </button>

                        {/* Single-word Tooltip - Appears on hover, focus, or tap */}
                        <div
                          className={`pointer-events-none absolute -bottom-8 sm:-bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 transition-all duration-200 ${
                            isSelected
                              ? "opacity-100 translate-y-0 scale-100"
                              : "opacity-0 translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100"
                          }`}
                        >
                          <span className="rounded-full bg-[#0b1f3a] dark:bg-[#081220] border border-brand/40 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold tracking-wide text-white dark:text-foreground shadow-xl">
                            {item.word}
                          </span>
                        </div>
                      </div>
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
