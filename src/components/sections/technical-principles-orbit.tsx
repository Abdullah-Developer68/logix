"use client";

import { useState, type ReactNode } from "react";

export interface OrbitPrincipleNode {
  id: string;
  word: string;
  left: string;
  top: string;
  icon: ReactNode;
}

export function TechnicalPrinciplesOrbit({ nodes }: { nodes: OrbitPrincipleNode[] }) {
  const [activeOrb, setActiveOrb] = useState<string | null>(null);

  return (
    <div className="orbit-track pointer-events-none absolute inset-0 size-full">
      {nodes.map((item) => {
        const isSelected = activeOrb === item.id;

        return (
          <div
            key={item.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: item.left,
              top: item.top,
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
                  className={`relative flex size-12 sm:size-14 lg:size-16 cursor-pointer items-center justify-center rounded-full border bg-background/95 dark:bg-[#0c182a]/98 text-primary shadow-lg transition-[transform,border-color,box-shadow,background-color] duration-300 hover:scale-120 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? "scale-120 border-brand shadow-[0_0_24px_rgba(34,211,176,0.6)] bg-accent/40"
                      : "border-border/80 dark:border-brand/20 hover:border-brand hover:shadow-[0_0_24px_rgba(34,211,176,0.5)] hover:bg-accent/30"
                  }`}
                >
                  {/* Subtle inner pulse glow */}
                  <span className="absolute inset-0 rounded-full bg-brand/5 group-hover:bg-brand/20 transition-colors" />

                  {/* Server-rendered Icon */}
                  {item.icon}
                </button>

                {/* Single-word Tooltip - Appears on hover, focus, or tap */}
                <div
                  className={`pointer-events-none absolute -bottom-8 sm:-bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 transition-[opacity,transform] duration-200 ${
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
  );
}
