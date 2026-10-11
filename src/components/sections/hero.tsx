"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

const barHeights = [28, 40, 55, 48, 72, 100];

export function Hero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container-x grid items-center gap-8 sm:gap-12 py-12 sm:py-16 lg:py-20 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="brand" dot className="mb-4 sm:mb-6">
            Available for Q4 projects
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.12] tracking-tight">
            Software that moves your business{" "}
            <span className="text-brand-strong">forward.</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
            Logix is a software company that designs, builds and scales digital
            products for ambitious teams — from the first workshop to launch
            and beyond.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto justify-center">
                Start a project
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <ButtonLink
                href="#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("services");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#services");
                  }
                }}
              >
                Explore services
              </ButtonLink>
            </motion.div>
          </div>
          <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
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
          className="relative rounded-xl bg-primary p-4 sm:p-5 shadow-2xl border border-white/10"
        >
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <pre className="mt-4 font-mono text-[11px] sm:text-xs leading-5 sm:leading-6 text-white/70 overflow-x-auto">
{`const logix = await build({
  product: "your-platform",
  stack: ["Next.js", "Node", "AWS"],
  weeks: 14,
});`}
          </pre>
          <div className="mt-5 sm:mt-6 flex h-36 sm:h-48 items-end gap-2 sm:gap-3 px-1 sm:px-2 pb-12 sm:pb-0">
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
            className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-lg bg-white/10 px-3.5 py-2.5 sm:px-4 sm:py-3 text-white backdrop-blur border border-white/10 shadow-lg"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-primary">
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
