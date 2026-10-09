import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us — Logix Software Consultancy",
  description:
    "Learn about Logix: a senior team of engineers, designers, and strategists building reliable digital products since 2016.",
};

const stats = [
  { value: "250+", label: "Projects shipped", highlight: false },
  { value: "120+", label: "Happy clients", highlight: false },
  { value: "9 yrs", label: "In business", highlight: false },
  { value: "96%", label: "Client retention", highlight: true },
];

const values = [
  {
    icon: "⚡",
    title: "Senior Talent Only",
    description:
      "We do not pass your project to junior developers after the sale. Every engineer and designer on your project is an experienced practitioner who knows how to ship.",
  },
  {
    icon: "🎯",
    title: "Skin in the Game",
    description:
      "We tie our success to your business outcomes — speed to market, user conversion, uptime, and efficiency — rather than just counting billable hours.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    description:
      "Direct communication in shared Slack/Teams channels, weekly end-to-end demonstrations, and transparent sprint boards. No surprises, no guesswork.",
  },
  {
    icon: "🏗️",
    title: "Engineered for Longevity",
    description:
      "We build modular, maintainable architectures with strict typing, automated testing suites, and clear documentation that your team can own forever.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Foundation & First Delivery",
    description: "Founded by senior software engineers with a vision to build software without agency fluff or bloated overhead.",
  },
  {
    year: "2019",
    title: "Global Pods Expansion",
    description: "Expanded our distributed technical pods across the US, UK, and Pakistan, servicing Series A and B startups.",
  },
  {
    year: "2022",
    title: "Enterprise Scale & Logistics",
    description: "Delivered mission-critical dispatch and fintech systems processing over $120M in transactions annually.",
  },
  {
    year: "2026",
    title: "AI-Native Engineering",
    description: "Incorporated modern AI workflows, automated test pipelines, and high-performance fullstack systems.",
  },
];

const leadership = [
  {
    name: "Zain Malik",
    role: "Managing Director & Co-Founder",
    bio: "Former Staff Engineer at global tech firms. 14+ years designing high-throughput distributed systems.",
    initials: "ZM",
  },
  {
    name: "Ayesha Tariq",
    role: "VP of Product Engineering",
    bio: "Specializes in Next.js architectures, scalable microfrontends, and rapid MVP execution.",
    initials: "AT",
  },
  {
    name: "David Chen",
    role: "Head of Cloud & Infrastructure",
    bio: "AWS & GCP certified architect with deep experience in SOC2 compliance and zero-downtime migrations.",
    initials: "DC",
  },
  {
    name: "Sarah Jenkins",
    role: "Director of UX & Design Systems",
    bio: "Passionate about accessible human-centered interfaces, typography, and cohesive design tokens.",
    initials: "SJ",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="ABOUT LOGIX"
          badgeText="Established 2016"
          badgeDot
          title={
            <>
              A senior team of engineers, designers, and strategists who treat your product{" "}
              <span className="text-brand-strong">like our own.</span>
            </>
          }
          description="Since 2016, Logix has partnered with founders and technology leaders to turn ambitious ideas into dependable, high-performing software products. No juniors, no runarounds — just accountable engineering."
        >
          <ButtonLink href="/contact" size="lg">
            Start a project
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            Our capabilities
          </ButtonLink>
        </PageHero>

        {/* Stats Grid */}
        <section className="border-b border-border bg-muted py-14">
          <div className="container-x">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-xl p-6 border ${
                    s.highlight
                      ? "bg-accent border-brand-strong/20"
                      : "bg-background border-border"
                  }`}
                >
                  <div
                    className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                      s.highlight ? "text-brand-strong" : "text-primary"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="HOW WE WORK"
              title="Four principles that define every Logix engagement."
              description="We founded Logix to provide the antithesis of the traditional dev shop. We believe software quality is directly proportional to craft and accountability."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((v) => (
                <Card key={v.title} className="flex flex-col p-8">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-xl">
                    {v.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{v.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="OUR MILESTONES"
              title="A decade of continuous engineering evolution."
              description="From boutique consultancy to a global technology partner trusted by industry leaders."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => (
                <div key={m.year} className="rounded-xl border border-border bg-background p-6">
                  <span className="inline-block text-2xl font-bold text-brand-strong">{m.year}</span>
                  <h4 className="mt-3 text-base font-semibold text-primary">{m.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="LEADERSHIP"
              title="Led by engineers and practitioners."
              description="Our partners stay active on code review, architectural design, and direct client communication."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((member) => (
                <Card key={member.name} className="flex flex-col justify-between p-6">
                  <div>
                    <Avatar initials={member.initials} className="size-14 text-base bg-accent text-brand-strong font-bold" />
                    <h3 className="mt-4 text-base font-bold text-primary">{member.name}</h3>
                    <p className="text-xs font-semibold text-brand-strong">{member.role}</p>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">{member.bio}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>Verified Logix Lead</span>
                    <Badge variant="brand" dot={false}>Core</Badge>
                  </div>
                </Card>
              ))}
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
