"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function WebDevIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

function MobileDevIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function CustomSoftwareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function CloudDevOpsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function AiAutomationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" />
      <path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7z" />
    </svg>
  );
}

const services = [
  {
    id: "web",
    icon: <WebDevIcon />,
    title: "Web Development",
    text: "High-performance websites, portals and SaaS platforms built with React, Next.js and Node.",
    image: "/images/services/web-dev.jpg",
  },
  {
    id: "mobile",
    icon: <MobileDevIcon />,
    title: "Mobile App Development",
    text: "Native and cross-platform iOS & Android apps with Flutter and React Native.",
    image: "/images/services/mobile-dev.jpg",
  },
  {
    id: "design",
    icon: <UiUxIcon />,
    title: "UI/UX Design",
    text: "Research-led product design, design systems and prototypes that users love.",
    image: "/images/services/ui-ux.jpg",
  },
  {
    id: "custom",
    icon: <CustomSoftwareIcon />,
    title: "Custom Software & ERP",
    text: "Tailored business systems, CRMs and integrations that fit how your team actually works.",
    image: "/images/services/custom-software.jpg",
  },
  {
    id: "cloud",
    icon: <CloudDevOpsIcon />,
    title: "Cloud & DevOps",
    text: "AWS, Azure and GCP architecture, CI/CD pipelines and 24/7 monitoring that scales.",
    image: "/images/services/cloud-devops.jpg",
  },
  {
    id: "ai",
    icon: <AiAutomationIcon />,
    title: "AI & Automation",
    text: "LLM-powered assistants, workflow automation and data pipelines that save hours every week.",
    image: "/images/services/ai-automation.jpg",
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
              {/* All cards are pure white bg-card with standard border and elevation */}
              <Card
                className="group flex flex-col h-full justify-between overflow-hidden p-0 transition-all duration-300 hover:shadow-xl border border-border shadow-sm bg-card"
              >
                <div>
                  {/* Service image preview above */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                    {/* Paper V2 SVG Icon inside rounded teal badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand-strong shadow-md border border-brand-strong/20 backdrop-blur">
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  {/* Details below the image */}
                  <div className="p-6 pt-5">
                    <h3 className="text-lg font-bold tracking-tight text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-border/60">
                    <Link
                      href={`/services#${s.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-brand-strong transition-colors"
                    >
                      Learn more →
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
