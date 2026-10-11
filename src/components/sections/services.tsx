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
    layout: "feature" as Layout,
    icon: <WebDevIcon />,
    title: "Web Development",
    text: "High-performance websites, portals and SaaS platforms built with React, Next.js and Node.",
    image: "/images/services/web-dev.jpg",
  },
  {
    id: "mobile",
    layout: "tall" as Layout,
    icon: <MobileDevIcon />,
    title: "Mobile App Development",
    text: "Native and cross-platform iOS & Android apps with Flutter and React Native.",
    image: "/images/services/iphone-mobile-dev.jpg",
  },
  {
    id: "design",
    layout: "small" as Layout,
    icon: <UiUxIcon />,
    title: "UI/UX Design",
    text: "Research-led product design, design systems and prototypes that users love.",
    image: "/images/services/ui-ux.jpg",
  },
  {
    id: "custom",
    layout: "small" as Layout,
    icon: <CustomSoftwareIcon />,
    title: "Custom Software & ERP",
    text: "Tailored business systems, CRMs and integrations that fit how your team actually works.",
    image: "/images/services/custom-software.jpg",
  },
  {
    id: "cloud",
    layout: "wide" as Layout,
    icon: <CloudDevOpsIcon />,
    title: "Cloud & DevOps",
    text: "AWS, Azure and GCP architecture, CI/CD pipelines and 24/7 monitoring that scales.",
    image: "/images/services/cloud-devops.jpg",
  },
  {
    id: "ai",
    layout: "wide-bottom" as Layout,
    icon: <AiAutomationIcon />,
    title: "AI & Automation",
    text: "LLM-powered assistants, workflow automation and data pipelines that save hours every week.",
    image: "/images/services/ai-automation.jpg",
  },
];

type Layout = "feature" | "tall" | "small" | "wide" | "wide-bottom";

// Responsive Bento placement:
// Mobile (<768px): 1 column clean stacked cards
// Tablet (768px-1023px): 2 columns (Web 2col, Mobile+Design 1col each, Custom+Cloud 1col each, AI 2col)
// Desktop (>=1024px): 4 columns, 3 rows bento grid
const layoutStyles: Record<
  Layout,
  { cell: string; card: string; image: string; body: string; title: string }
> = {
  feature: {
    cell: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2",
    card: "flex-col",
    image: "h-48 sm:h-56 lg:h-auto lg:min-h-0 lg:flex-1",
    body: "p-5 sm:p-6 lg:p-8",
    title: "text-lg sm:text-xl lg:text-2xl",
  },
  tall: {
    cell: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2",
    card: "flex-col",
    image: "h-48 sm:h-56 lg:h-auto lg:min-h-0 lg:flex-1",
    body: "p-5 sm:p-6",
    title: "text-lg",
  },
  small: {
    cell: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
    card: "flex-col",
    image: "h-44 sm:h-48 lg:h-auto lg:min-h-0 lg:flex-1",
    body: "p-5",
    title: "text-base sm:text-lg",
  },
  wide: {
    cell: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1",
    card: "flex-col lg:flex-row",
    image: "h-48 sm:h-52 min-h-[180px] lg:h-full lg:w-1/2 lg:shrink-0",
    body: "p-5 sm:p-6 lg:w-1/2",
    title: "text-lg sm:text-xl",
  },
  "wide-bottom": {
    cell: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1",
    card: "flex-col md:flex-row",
    image: "h-48 sm:h-52 min-h-[180px] md:h-auto md:w-1/2 md:shrink-0 lg:w-1/2",
    body: "p-5 sm:p-6 md:w-1/2 lg:w-1/2",
    title: "text-lg sm:text-xl",
  },
};


export function Services() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="container-x py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-3 sm:mb-4">Our services</p>
            <h2 className="max-w-md text-2xl sm:text-3xl lg:text-[32px]! leading-tight!">
              End-to-end services, one accountable team.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonLink href="/services" variant="outline" size="sm" className="w-fit">
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
          className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:auto-rows-[340px] lg:grid-cols-4"
        >
          {services.map((s) => {
            const l = layoutStyles[s.layout];
            return (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`h-full min-h-0 ${l.cell}`}
              >
                <Card
                  className={`group flex h-full flex-col overflow-hidden border border-border bg-card p-0 shadow-sm transition-all duration-300 hover:shadow-xl ${l.card}`}
                >
                  {/* Service image preview */}
                  <div className={`relative w-full overflow-hidden bg-muted ${l.image}`}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                    {/* Paper V2 SVG Icon inside rounded teal badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex size-10 items-center justify-center rounded-lg border border-brand-strong/20 bg-accent text-brand-strong shadow-md backdrop-blur">
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`flex flex-col justify-between ${l.body}`}>
                    <div>
                      <h3 className={`font-bold tracking-tight text-primary ${l.title}`}>
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                        {s.text}
                      </p>
                    </div>
                    <div className="mt-4 border-t border-border/60 pt-3">
                      <Link
                        href={`/services#${s.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-brand-strong"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
