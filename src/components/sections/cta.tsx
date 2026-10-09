"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-background pb-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid items-center gap-8 rounded-xl bg-brand p-10 text-primary md:grid-cols-[1.4fr_1fr] md:p-14 shadow-xl"
        >
          <div>
            <h2>Have an idea? Let&apos;s build it together.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-primary/75">
              Book a free 30-minute discovery call. Tell us what you&apos;re building and we&apos;ll show you how we&apos;d approach it.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink href="/contact" size="lg" className="w-full">
                Start a project
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ButtonLink
                href="/contact"
                variant="ghost"
                size="lg"
                className="w-full bg-white/25 hover:bg-white/40"
              >
                Book a discovery call
              </ButtonLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
