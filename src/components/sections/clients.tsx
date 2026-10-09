"use client";

import { motion } from "framer-motion";

const clientLogos = [
  {
    name: "northwind",
    render: () => (
      <div className="flex items-center gap-2.5">
        <svg className="size-5 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <polygon points="12 6 15 13 12 11 9 13" fill="currentColor" />
        </svg>
        <span className="text-xl font-bold tracking-tight text-primary font-sans lowercase">
          northwind
        </span>
      </div>
    ),
  },
  {
    name: "Skyscape",
    render: () => (
      <div className="flex items-center gap-2.5">
        <svg className="size-5 text-brand-strong shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 15a4 4 0 0 1 7-2 4 4 0 0 1 7 1 3 3 0 0 1 2 5H4a4 4 0 0 1 0-4z" />
        </svg>
        <span className="text-lg font-semibold tracking-normal text-primary font-sans">
          Skyscape
        </span>
      </div>
    ),
  },
  {
    name: "Fieldly",
    render: () => (
      <div className="flex items-center gap-2.5">
        <svg className="size-5 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <path d="M12 7l4 2.25v4.5L12 16l-4-2.25v-4.5L12 7z" fill="currentColor" fillOpacity="0.25" />
        </svg>
        <span className="text-xl font-bold tracking-tight text-primary font-sans">
          Fieldly
        </span>
      </div>
    ),
  },
  {
    name: "peachcloud",
    render: () => (
      <div className="flex items-center gap-2">
        <svg className="size-5 text-brand-strong shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="12" r="5" fill="currentColor" fillOpacity="0.2" />
          <circle cx="15" cy="12" r="5" />
          <path d="M9 17h6" />
        </svg>
        <div className="flex items-baseline text-xl font-sans tracking-tight">
          <span className="font-light text-muted-foreground">peach</span>
          <span className="font-bold text-primary">cloud</span>
        </div>
      </div>
    ),
  },
  {
    name: "Kora Pay",
    render: () => (
      <div className="flex items-center gap-2.5">
        <svg className="size-5 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <circle cx="8" cy="12" r="2" fill="currentColor" />
          <path d="M13 12h4" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="flex items-center gap-1.5 font-sans">
          <span className="text-base font-extrabold tracking-wider text-primary uppercase">
            KORA
          </span>
          <span className="text-[10px] font-bold tracking-widest text-brand-strong bg-accent px-1.5 py-0.5 rounded border border-brand-strong/20 uppercase">
            PAY
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Lumeris",
    render: () => (
      <div className="flex items-center gap-2.5">
        <svg className="size-5 text-brand-strong shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9" fill="currentColor" fillOpacity="0.3" />
        </svg>
        <span className="text-base font-extrabold tracking-[0.2em] text-primary uppercase font-sans">
          LUMERIS
        </span>
      </div>
    ),
  },
];

// Duplicate items twice to ensure a completely seamless continuous infinite loop
const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/60 py-12 overflow-hidden">
      <div className="container-x text-center mb-8">
        <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          Trusted by 120+ teams, from startups to enterprise
        </p>
      </div>

      {/* Infinite Horizontal Marquee Container with Gradient Edge Masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-center gap-16 sm:gap-24 py-2"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none shrink-0 grayscale-[35%] hover:grayscale-0"
            >
              {client.render()}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
