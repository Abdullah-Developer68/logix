"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "web",
    icon: "</>",
    title: "Web Development",
    text: "Scalable web apps and platforms built with React, Next.js and Node.",
    image: "/images/services/web-dev.jpg",
    inverted: false,
  },
  {
    id: "mobile",
    icon: "▭",
    title: "Mobile App Development",
    text: "Native and cross-platform apps for iOS and Android with React Native.",
    image: "/images/services/mobile-dev.jpg",
    inverted: false,
  },
  {
    id: "design",
    icon: "◧",
    title: "UI/UX Design",
    text: "Research-led product design, from prototypes to full design systems.",
    image: "/images/services/ui-ux.jpg",
    inverted: false,
  },
  {
    id: "custom",
    icon: "≫",
    title: "Custom Software Development",
    text: "Tailored internal tools, portals and integrations that fit how you work.",
    image: "/images/services/custom-software.jpg",
    inverted: false,
  },
  {
    id: "cloud",
    icon: "☁",
    title: "Cloud & DevOps",
    text: "Reliable infrastructure, CI/CD and observability on AWS, GCP and Azure.",
    image: "/images/services/cloud-devops.jpg",
    inverted: false,
  },
  {
    id: "ai",
    icon: "✦",
    title: "AI & Automation",
    text: "Practical AI features and workflow automation that save real hours.",
    image: "/images/services/ai-automation.jpg",
    inverted: true,
  },
];

export function Services() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="container-x py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-4">Our services</p>
            <h2 className="max-w-md text-[32px]! leading-tight!">
              End-to-end services, one accountable team.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonLink href="/services" variant="outline" size="sm">
              All services
            </ButtonLink>
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
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
              <Card
                inverted={s.inverted}
                className="group flex flex-col h-full justify-between overflow-hidden p-0 transition-all duration-300 hover:shadow-xl border border-border shadow-sm"
              >
                <div>
                  {/* Project / Service visual preview above */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t",
                        s.inverted
                          ? "from-primary via-primary/30 to-transparent"
                          : "from-background/70 via-transparent to-transparent"
                      )}
                    />
                    {/* Floating icon badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={cn(
                          "flex size-8 items-center justify-center rounded-lg text-xs font-bold shadow-md backdrop-blur",
                          s.inverted
                            ? "bg-brand text-primary"
                            : "bg-white/95 text-brand-strong border border-border/60"
                        )}
                      >
                        {s.icon}
                      </span>
                    </div>
                  </div>

                  {/* Details below the image */}
                  <div className="p-6 pt-5">
                    <h3
                      className={cn(
                        "text-lg font-bold tracking-tight",
                        s.inverted ? "text-white" : "text-primary"
                      )}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-xs sm:text-sm leading-6",
                        s.inverted ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {s.text}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div
                    className={cn(
                      "pt-4 border-t",
                      s.inverted ? "border-white/10" : "border-border/60"
                    )}
                  >
                    <Link
                      href={`/services#${s.id}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-semibold hover:underline",
                        s.inverted
                          ? "text-brand hover:text-brand"
                          : "text-primary hover:text-brand-strong"
                      )}
                    >
                      Explore service →
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
