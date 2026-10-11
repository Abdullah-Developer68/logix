import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

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
    image: "/images/services/web-dev-v2.jpg",
  },
  {
    id: "mobile",
    icon: <MobileDevIcon />,
    title: "Mobile App Development",
    text: "Native and cross-platform iOS & Android apps with Flutter and React Native.",
    image: "/images/services/mobile-dev-v2.jpg",
  },
  {
    id: "design",
    icon: <UiUxIcon />,
    title: "UI/UX Design",
    text: "Research-led product design, design systems and prototypes that users love.",
    image: "/images/services/ui-ux-v2.jpg",
  },
  {
    id: "custom",
    icon: <CustomSoftwareIcon />,
    title: "Custom Software & ERP",
    text: "Tailored business systems, CRMs and integrations that fit how your team actually works.",
    image: "/images/services/custom-software-v2.jpg",
  },
  {
    id: "cloud",
    icon: <CloudDevOpsIcon />,
    title: "Cloud & DevOps",
    text: "AWS, Azure and GCP architecture, CI/CD pipelines and 24/7 monitoring that scales.",
    image: "/images/services/cloud-devops-v2.jpg",
  },
  {
    id: "ai",
    icon: <AiAutomationIcon />,
    title: "AI & Automation",
    text: "LLM-powered assistants, workflow automation and data pipelines that save hours every week.",
    image: "/images/services/ai-automation-v2.jpg",
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group flex h-full w-[260px] sm:w-[310px] -rotate-2 sm:-rotate-3 flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:z-10 hover:-translate-y-3 hover:rotate-0 hover:shadow-2xl">
      <div>
        {/* Service image preview */}
        <div className="relative h-40 w-full overflow-hidden bg-muted sm:h-48">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 260px, 310px"
            loading="lazy"
            decoding="async"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 sm:left-3.5 sm:top-3.5 z-10">
            <div className="flex size-9 sm:size-10 items-center justify-center rounded-lg border border-brand-strong/20 bg-background/90 text-brand-strong shadow-md backdrop-blur-md">
              {service.icon}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-primary">{service.title}</h3>
          <p className="mt-1.5 sm:mt-2 text-xs leading-5 sm:leading-6 text-muted-foreground sm:text-sm">{service.text}</p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="border-t border-border/60 pt-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-brand-strong"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 overflow-hidden border-y border-border bg-muted/60">
      <div className="container-x pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="eyebrow mb-2 sm:mb-4">Our services</p>
            <h2 className="max-w-md text-2xl leading-tight! sm:text-3xl lg:text-[32px]! break-words">
              End-to-end services, one accountable team.
            </h2>
          </div>
          <div>
            <ButtonLink href="/contact" variant="outline" size="sm" className="w-full sm:w-fit justify-center">
              Start a project
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Deck of tilted cards sliding right to left. The set is rendered twice
          so the -50% loop stays seamless on any screen;
          the duplicate copy is hidden from assistive tech. */}
      <div
        className="relative py-8 pb-12 sm:py-10 sm:pb-16 lg:pb-24 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="deck-track flex w-max" style={{ animationDuration: "50s" }}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 gap-5 pr-5"
              aria-hidden={copy > 0 ? true : undefined}
            >
              {services.map((s) => (
                <ServiceCard key={`${copy}-${s.id}`} service={s} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
