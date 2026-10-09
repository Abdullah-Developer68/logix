import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services & Capabilities — Logix Software Consultancy",
  description:
    "Explore Logix end-to-end engineering services: web applications, mobile apps, UI/UX design, custom software, cloud DevOps, and AI automation.",
};

const serviceDetails = [
  {
    id: "web",
    icon: "</>",
    title: "Custom Web Development",
    description:
      "High-velocity, performant web applications engineered for scalability. We leverage modern React, Next.js, and typed Node.js backends to ensure lightning-fast page loads and robust state management.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    deliverables: [
      "Production-ready Next.js SSR / SSG applications",
      "Type-safe REST & GraphQL API integrations",
      "Sub-second Largest Contentful Paint (LCP) performance",
      "Automated CI/CD testing pipelines and unit suites",
    ],
    inverted: false,
  },
  {
    id: "mobile",
    icon: "▭",
    title: "Mobile App Development",
    description:
      "Native-grade mobile applications built for iOS and Android. Using React Native and Expo, we deliver unified codebases that feel completely native, with smooth animations and offline data sync.",
    tech: ["React Native", "Expo", "iOS Swift", "Android Kotlin", "SQLite", "Push Notifications"],
    deliverables: [
      "Cross-platform iOS and Android deployments",
      "Offline-first SQLite local persistence and background sync",
      "App Store & Google Play submission and review management",
      "Hardware integrations: Bluetooth, camera, location services",
    ],
    inverted: false,
  },
  {
    id: "design",
    icon: "◧",
    title: "UI/UX Design & Design Systems",
    description:
      "Research-driven digital product design that turns complex workflows into intuitive, beautiful user experiences. We build robust tokenized design systems that bridge Figma directly to code.",
    tech: ["Figma Tokens", "Design Systems", "Prototyping", "WCAG 2.1 AA", "User Journey Mapping"],
    deliverables: [
      "Comprehensive multi-platform design systems and token libraries",
      "High-fidelity interactive prototypes for stakeholder alignment",
      "Usability testing and workflow cognitive load audits",
      "Tailwind component parity matching Figma variants",
    ],
    inverted: false,
  },
  {
    id: "custom",
    icon: "≫",
    title: "Custom Software & Internal Tools",
    description:
      "Bespoke enterprise applications, operational portals, and workflow engines that replace clunky spreadsheets and outdated legacy monoliths with streamlined modern tools.",
    tech: ["Custom Portals", "Role-based Access (RBAC)", "Webhook Integrations", "ERP / CRM Sync"],
    deliverables: [
      "Internal admin consoles and executive metric dashboards",
      "Multi-tenant customer portals with granular security controls",
      "Legacy system modernization and database migrations",
      "Third-party system connectors (Salesforce, Stripe, NetSuite)",
    ],
    inverted: false,
  },
  {
    id: "cloud",
    icon: "☁",
    title: "Cloud Architecture & DevOps",
    description:
      "Resilient, highly available cloud infrastructure built with Infrastructure as Code. We ensure zero-downtime releases, SOC2-compliant configurations, and active observability.",
    tech: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Datadog", "GitHub Actions"],
    deliverables: [
      "Terraform-managed multi-region cloud environments",
      "Automated container orchestration with Kubernetes",
      "Zero-downtime rolling deployments and automated rollbacks",
      "Security hardening, secret management, and compliance audits",
    ],
    inverted: false,
  },
  {
    id: "ai",
    icon: "✦",
    title: "Practical AI & Automation",
    description:
      "Practical machine learning and generative AI workflows engineered into your actual product. We skip speculative hype and build reliable LLM features that drive measurable ROI.",
    tech: ["LLM Orchestration", "Retrieval Augmented Generation (RAG)", "Vector Embeddings", "Workflow Agents"],
    deliverables: [
      "Domain-specific RAG knowledge search across company data",
      "Automated document processing and structured extraction",
      "Guardrailed AI assistants integrated into customer apps",
      "Autonomous background workflow automation and agents",
    ],
    inverted: true,
  },
];

const methodology = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description:
      "We unpack your business objectives, map technical requirements, evaluate security constraints, and produce an unambiguous architectural blueprint and sprint schedule.",
  },
  {
    step: "02",
    title: "Architecture & Sprint 0",
    description:
      "Our engineers establish repository structures, design system tokens, database schemas, and CI/CD environments before writing feature code.",
  },
  {
    step: "03",
    title: "Iterative Bi-Weekly Sprints",
    description:
      "You receive functional staging builds every two weeks. We review code in real-time, test rigorously, and adjust backlog priorities collaboratively in Slack.",
  },
  {
    step: "04",
    title: "Hardening & Production Launch",
    description:
      "We run performance benchmarking, load simulations, vulnerability scans, and disaster recovery dry runs prior to zero-downtime launch.",
  },
  {
    step: "05",
    title: "SLA Support & Continuous Evolution",
    description:
      "Post-launch, our team remains on call with guaranteed response time SLAs, telemetry monitoring, and incremental feature iteration.",
  },
];

const engagementModels = [
  {
    title: "Dedicated Engineering Pod",
    tag: "Most Popular",
    description:
      "A complete senior team (Tech Lead, Fullstack Engineers, UI/UX Designer, QA) dedicated 100% to your product roadmap.",
    points: [
      "Direct integration into your team Slack/Jira",
      "Flexible scope adapted to shifting business needs",
      "Predictable monthly billing with zero staffing overhead",
    ],
  },
  {
    title: "Fixed-Scope Milestone Project",
    tag: "Best for MVPs",
    description:
      "A well-defined scope delivered with fixed pricing and guaranteed delivery deadlines. Ideal for initial product launches.",
    points: [
      "Guaranteed delivery date and fixed investment",
      "Rigorous milestone sign-offs and specification fidelity",
      "Full IP and documentation handover upon completion",
    ],
  },
  {
    title: "Specialist Staff Acceleration",
    tag: "Domain Experts",
    description:
      "Senior domain specialists (e.g. Next.js performance architects or cloud security leads) embedded into your existing team.",
    points: [
      "Rapid ramp-up within 5 business days",
      "Mentorship and best-practice transfer for internal staff",
      "Scalable up or down based on release milestones",
    ],
  },
];

const serviceFaqs = [
  {
    id: "ip-ownership",
    question: "Who owns the code and intellectual property?",
    answer:
      "You own 100% of the intellectual property, code repositories, design assets, and architecture documentation from the moment each milestone is delivered. We claim zero residual ownership.",
  },
  {
    id: "team-allocation",
    question: "Do you outsource or use junior contractors?",
    answer:
      "No. Every engineer, designer, and architect on your Logix team is an in-house senior specialist. You interview and communicate directly with the exact individuals writing your software.",
  },
  {
    id: "handover-process",
    question: "How does code handover work when our internal team takes over?",
    answer:
      "We engineer every codebase for maintainability with comprehensive TypeScript types, automated test suites, architectural documentation, and pair-programming handover sessions with your incoming engineering team.",
  },
  {
    id: "speed-to-start",
    question: "How quickly can a Logix engineering pod start?",
    answer:
      "Following our initial discovery session and mutual NDA, dedicated pods typically mobilize and begin Sprint 0 within 5 to 10 business days.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="OUR SERVICES"
          badgeText="Full-Lifecycle Engineering"
          badgeDot
          title={
            <>
              End-to-end services,{" "}
              <span className="text-brand-strong">one accountable team.</span>
            </>
          }
          description="We deliver full-stack digital solutions that scale effortlessly from the first 100 users to millions. Explore our core practice areas."
        >
          <ButtonLink href="/contact" size="lg">
            Start a project
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="outline" size="lg">
            View case studies
          </ButtonLink>
        </PageHero>

        {/* Services Deep Dive Grid */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="CORE DISCIPLINES"
              title="Built to solve complex technological challenges."
              description="Every practice area is led by seasoned specialists who bring deep real-world experience to your technical architecture."
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceDetails.map((service) => (
                <Card
                  key={service.id}
                  id={service.id}
                  inverted={service.inverted}
                  className="flex flex-col justify-between p-8"
                >
                  <div>
                    <span
                      className={`flex size-11 items-center justify-center rounded-lg text-base font-semibold ${
                        service.inverted
                          ? "bg-brand text-primary"
                          : "bg-accent text-brand-strong"
                      }`}
                    >
                      {service.icon}
                    </span>
                    <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                    <p
                      className={`mt-3 text-sm leading-6 ${
                        service.inverted ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className={`rounded px-2 py-0.5 text-xs font-medium ${
                            service.inverted
                              ? "bg-white/10 text-white"
                              : "bg-muted text-muted-foreground border border-border"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Deliverables List */}
                    <div className="mt-6 space-y-2 border-t border-border/50 pt-5">
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          service.inverted ? "text-brand" : "text-brand-strong"
                        }`}
                      >
                        Key Deliverables
                      </p>
                      <ul className="space-y-1.5 text-xs">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2 ${
                              service.inverted ? "text-white/80" : "text-muted-foreground"
                            }`}
                          >
                            <span className="text-brand font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline ${
                        service.inverted ? "text-brand hover:text-brand" : "text-primary hover:text-brand-strong"
                      }`}
                    >
                      Inquire about {service.title} →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Methodology */}
        <section className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="METHODOLOGY"
              title="A battle-tested process engineered for predictability."
              description="We avoid chaotic scrambles through clear sprints, automated verification, and transparent delivery milestones."
            />

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {methodology.map((m) => (
                <div key={m.step} className="rounded-xl border border-border bg-background p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-bold text-brand-strong">{m.step}</span>
                    <h4 className="mt-4 text-base font-bold text-primary">{m.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{m.description}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-medium text-brand-strong">
                    Quality Gate Passed
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="ENGAGEMENT MODELS"
              title="Flexible partnership structures designed around your needs."
              description="Whether you require an autonomous squad or high-level architectural reinforcement, we have a model that fits."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {engagementModels.map((model) => (
                <Card key={model.title} className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="brand" dot={false}>{model.tag}</Badge>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">{model.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{model.description}</p>
                    <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                      {model.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="text-brand-strong font-bold">●</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <ButtonLink href="/contact" variant="outline" size="sm" className="w-full">
                      Discuss This Model
                    </ButtonLink>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        <section className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x max-w-4xl">
            <SectionHeader
              eyebrow="FREQUENTLY ASKED"
              title="Questions about our services & partnership."
              description="Clear answers about how we manage intellectual property, staffing, and project delivery."
              align="center"
            />
            <div className="bg-background rounded-xl p-8 border border-border">
              <Accordion items={serviceFaqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="pt-20">
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  );
}

