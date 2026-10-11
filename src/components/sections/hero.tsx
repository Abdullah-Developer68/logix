"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { HeroTerminal } from "@/components/sections/hero-terminal";

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.12] tracking-tight break-words">
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

        <HeroTerminal />
      </div>
    </section>
  );
}
