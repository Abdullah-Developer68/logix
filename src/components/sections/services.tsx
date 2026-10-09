"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  { icon: "</>", title: "Web Development", text: "Scalable web apps and platforms built with React, Next.js and Node.", inverted: false },
  { icon: "▭", title: "Mobile App Development", text: "Native and cross-platform apps for iOS and Android with React Native.", inverted: false },
  { icon: "◧", title: "UI/UX Design", text: "Research-led product design, from prototypes to full design systems.", inverted: false },
  { icon: "≫", title: "Custom Software Development", text: "Tailored internal tools, portals and integrations that fit how you work.", inverted: false },
  { icon: "☁", title: "Cloud & DevOps", text: "Reliable infrastructure, CI/CD and observability on AWS, GCP and Azure.", inverted: false },
  { icon: "✦", title: "AI & Automation", text: "Practical AI features and workflow automation that save real hours.", inverted: true },
];

export function Services() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="container-x py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-4">Our services</p>
            <h2 className="max-w-md text-[32px]! leading-tight!">End-to-end services, one accountable team.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonLink href="/services" variant="outline" size="sm">All services</ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card inverted={s.inverted} className="flex flex-col h-full justify-between transition-shadow hover:shadow-lg">
                <div>
                  <span className={cn("flex size-9 items-center justify-center rounded-lg text-sm font-medium", s.inverted ? "bg-brand text-primary" : "bg-accent text-brand-strong")}>
                    {s.icon}
                  </span>
                  <h3 className="mt-5 text-base!">{s.title}</h3>
                  <p className={cn("mt-2 text-sm leading-6", s.inverted ? "text-white/65" : "text-muted-foreground")}>{s.text}</p>
                </div>
                <Link href="/services" className="mt-6 pt-2 text-xs font-medium hover:underline inline-block">Explore service →</Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
