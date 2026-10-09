"use client";

import { motion } from "framer-motion";

const clients = ["northwind", "Skyscape", "Fieldly", "peachcloud", "Kora Pay", "Lumeris"];

export function Clients() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="container-x py-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs text-muted-foreground"
        >
          Trusted by 120+ teams, from startups to enterprise
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-4"
        >
          {clients.map((c) => (
            <motion.span
              key={c}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
              className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors cursor-default"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
