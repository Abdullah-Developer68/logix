"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const small = [
  { quote: "They shipped our MVP in 10 weeks and the codebase was cleaner than anything we'd had before.", name: "Marcus Lee", role: "CTO, Fieldly", initials: "ML" },
  { quote: "Logix felt like part of our team from day one. Communication and quality were outstanding.", name: "Amelia Grant", role: "Founder, Skyscape", initials: "AG" },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="container-x py-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="max-w-md text-[32px]! leading-tight!">Teams that stopped worrying about software.</h2>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className="flex flex-col justify-between p-8 h-full shadow-sm bg-card border border-border">
              <p className="text-xl font-medium leading-8 text-foreground">
                “Logix rebuilt our dispatch platform in 14 weeks. Delivery times dropped 31% and our team finally has software they enjoy using.”
              </p>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials="SA" className="size-10 bg-accent text-brand-strong font-bold border border-brand-strong/20" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Sara Ahmed</div>
                    <div className="text-muted-foreground">COO, Northwind Logistics</div>
                  </div>
                </div>
                <span className="font-bold text-muted-foreground/80 tracking-tight">northwind</span>
              </div>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-4">
            {small.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex-1"
              >
                <Card className="flex flex-col justify-between h-full p-6">
                  <p className="text-sm leading-6">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar initials={t.initials} className="bg-accent text-brand-strong font-semibold" />
                    <div className="text-xs">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
