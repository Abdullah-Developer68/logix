"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: "250+", label: "Projects shipped", highlight: false },
  { value: "120+", label: "Happy clients", highlight: false },
  { value: "9 yrs", label: "In business", highlight: false },
  { value: "96%", label: "Client retention", highlight: true },
];

export function About() {
  return (
    <section className="bg-background">
      <div className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="eyebrow mb-4">About us</p>
          <h2 className="text-3xl! leading-tight! sm:text-[32px]!">
            A senior team of engineers, designers and strategists who treat your product like our own.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Since 2016 Logix has partnered with founders and product leaders to turn ideas into reliable software. No handoffs to juniors, no surprises — just a small senior team that stays with you from discovery to launch and beyond.
          </p>
          <Link href="/about" className="mt-6 inline-block text-sm font-medium text-foreground hover:underline">
            More about us →
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(
                "rounded-xl p-6 border transition-shadow",
                s.highlight ? "bg-accent border-brand-strong/20" : "bg-background border-border",
              )}
            >
              <div className={cn("text-5xl font-bold tracking-tight", s.highlight ? "text-brand-strong" : "text-primary")}>
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
