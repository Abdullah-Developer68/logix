"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-background pb-12 sm:pb-16 lg:pb-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid items-center gap-6 sm:gap-8 rounded-xl bg-brand text-[#0b1f3a] p-5 sm:p-10 md:grid-cols-[1.4fr_1fr] md:p-14 shadow-xl"
        >
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#0b1f3a]">Have an idea? Let&apos;s build it together.</h2>
            <p className="mt-2.5 sm:mt-4 max-w-md text-xs sm:text-sm leading-5 sm:leading-6 text-[#0b1f3a]/80">
              Book a free 30-minute discovery call. Tell us what you&apos;re building and we&apos;ll show you how we&apos;d approach it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
              <ButtonLink
                href="/contact"
                variant="dark"
                size="lg"
                className="w-full justify-center font-semibold"
              >
                Start a project
              </ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
              <ButtonLink
                href="/contact"
                variant="outline-dark"
                size="lg"
                className="w-full justify-center font-semibold"
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
