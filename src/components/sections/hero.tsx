"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

const barHeights = [28, 40, 55, 48, 72, 100];

export function Hero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="brand" dot className="mb-6">
            Available for Q4 projects
          </Badge>
          <h1>
            Software that moves your business{" "}
            <span className="text-brand-strong">forward.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Logix is a software company that designs, builds and scales digital
            products for ambitious teams — from the first workshop to launch
            and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="/contact" size="lg">
                Start a project
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="/portfolio" variant="outline" size="lg">
                View our work
              </ButtonLink>
            </motion.div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-brand" aria-hidden>
              ★★★★★
            </span>
            Rated 4.9/5 by 120+ clients
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-xl bg-primary p-5 shadow-2xl border border-white/10"
        >
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <pre className="mt-4 font-mono text-xs leading-6 text-white/70 overflow-x-auto">
{`const logix = await build({
  product: "your-platform",
  stack: ["Next.js", "Node", "AWS"],
  weeks: 14,
});`}
          </pre>
          <div className="mt-6 flex h-48 items-end gap-3 px-2">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: "0%" }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className={
                  i === 5
                    ? "w-full rounded-t bg-brand shadow-[0_0_20px_rgba(31,200,170,0.5)]"
                    : "w-full rounded-t bg-white/15"
                }
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
            className="absolute bottom-6 left-6 flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-white backdrop-blur border border-white/10 shadow-lg"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-primary">
              ✓
            </span>
            <span className="text-xs">
              <strong className="block font-semibold">Deployed to production</strong>
              <span className="text-white/60">14 weeks · on schedule</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
