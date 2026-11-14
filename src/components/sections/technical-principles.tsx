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
import {
  TechnicalPrinciplesOrbit,
  type OrbitPrincipleNode,
} from "@/components/sections/technical-principles-orbit";

const principles = [
  { id: "type-safety", word: "TypeScript", icon: Code2 },
  { id: "cicd-gates", word: "CI/CD", icon: GitBranch },
  { id: "cloud-iac", word: "Cloud", icon: Cloud },
  { id: "observability", word: "Telemetry", icon: Activity },
  { id: "latency", word: "Edge", icon: Zap },
  { id: "zero-trust", word: "Security", icon: ShieldCheck },
];

export function TechnicalPrinciples() {
  const nodes: OrbitPrincipleNode[] = principles.map((item, index) => {
    const angleDeg = (360 / principles.length) * index;
    const angleRad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const Icon = item.icon;

    return {
      id: item.id,
      word: item.word,
      left: `calc(50% + (var(--orbit-r) * ${cos.toFixed(4)}))`,
      top: `calc(50% + (var(--orbit-r) * ${sin.toFixed(4)}))`,
      icon: (
        <Icon className="relative z-10 size-5 sm:size-6 lg:size-7 text-brand-strong transition-transform duration-300 group-hover:scale-110 group-hover:text-brand" />
      ),
    };
  });

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
              <div className="absolute size-32 sm:size-48 lg:size-60 rounded-full bg-[radial-gradient(circle,rgba(34,211,176,0.16)_0%,transparent_70%)]" />
            </div>

            {/* Central Orb */}
            <div className="relative z-10 flex size-16 sm:size-20 lg:size-24 items-center justify-center rounded-full border border-brand/40 bg-background/95 dark:bg-[#081220]/95 shadow-2xl group cursor-default ring-4 ring-brand/10 transition-transform duration-300 hover:scale-105">
              <div className="flex size-9 sm:size-11 lg:size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-brand/40">
                <Terminal className="size-4.5 sm:size-5.5 lg:size-6 text-brand" />
              </div>
            </div>

            {/* Orbit Track - Continuously rotating clockwise around the Central Orb */}
            <TechnicalPrinciplesOrbit nodes={nodes} />
          </div>
        </div>
      </div>
    </section>
  );
}
