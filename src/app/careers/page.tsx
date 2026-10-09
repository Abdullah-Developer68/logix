import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Careers — Join the Logix Engineering Team",
  description:
    "We are hiring senior software engineers, system architects, and product designers. Remote-first, competitive compensation, and high-impact projects.",
};

const perks = [
  {
    icon: "🌍",
    title: "Remote-First Flexibility",
    description: "Work from our hubs in Karachi, Lahore, London, Austin, or anywhere across compatible timezones.",
  },
  {
    icon: "📈",
    title: "Senior Peer Culture",
    description: "Collaborate with experienced engineers who care deeply about code craft, architecture, and developer joy.",
  },
  {
    icon: "💻",
    title: "Top-Tier Hardware & Budget",
    description: "Latest Apple MacBook Pro / Linux workstations, plus a dedicated annual learning and book stipend.",
  },
  {
    icon: "🩺",
    title: "Comprehensive Health & Wellness",
    description: "Full health, dental, and vision coverage for you and your dependents, plus generous paid time off.",
  },
];

const openRoles = [
  {
    title: "Staff Fullstack Engineer (Next.js / Node)",
    department: "Web Platform Pod",
    location: "Remote / Hybrid (PK / UK / US)",
    type: "Full-time",
    description: "Lead technical architecture and implementation for mission-critical client platforms using Next.js App Router, TypeScript, and distributed Node services.",
  },
  {
    title: "Senior Mobile Engineer (React Native)",
    department: "Mobile Engineering",
    location: "Remote / Lahore Lab",
    type: "Full-time",
    description: "Engineer offline-first mobile apps for enterprise logistics and health clients with React Native, SQLite, and custom native Swift/Kotlin modules.",
  },
  {
    title: "Principal Cloud & DevOps Architect",
    department: "Infrastructure Pod",
    location: "Remote",
    type: "Full-time",
    description: "Design Terraform-managed multi-region AWS/GCP infrastructure, Kubernetes clusters, and zero-downtime CI/CD automation pipelines.",
  },
  {
    title: "Senior Product Designer (UI/UX Systems)",
    department: "Design Systems",
    location: "Remote / London / Karachi",
    type: "Full-time",
    description: "Own end-to-end user research, Figma token libraries, and high-fidelity interaction design for data-dense B2B platforms.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="CAREERS AT LOGIX"
          badgeText="We're Hiring"
          badgeDot
          title={
            <>
              Build software that matters with a team of{" "}
              <span className="text-brand-strong">proven senior practitioners.</span>
            </>
          }
          description="We are a senior-only engineering team. No artificial bureaucracy, no junior handoffs, and no endless meetings. Just craft, accountability, and meaningful work."
        >
          <ButtonLink href="#roles" size="lg">
            View open positions
          </ButtonLink>
          <ButtonLink href="/about" variant="outline" size="lg">
            About our culture
          </ButtonLink>
        </PageHero>

        {/* Culture & Perks Grid */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="WHY WORK WITH US"
              title="An environment built by engineers, for engineers."
              description="We respect deep work and prioritize substantive engineering results over performative corporate ceremonies."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {perks.map((p) => (
                <Card key={p.title} className="p-6">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-4 text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{p.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="roles" className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="CURRENT OPENINGS"
              title="Explore open technical positions."
              description="Ready to do the best work of your career? Review our active roles below."
            />
            <div className="space-y-4">
              {openRoles.map((role) => (
                <Card key={role.title} className="p-6 sm:p-8 flex flex-col justify-between sm:flex-row sm:items-center gap-6">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="brand" dot={false}>{role.department}</Badge>
                      <Badge variant="outline">{role.location}</Badge>
                      <span className="text-xs text-muted-foreground">{role.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="shrink-0">
                    <ButtonLink href="mailto:careers@logix.dev" variant="default" size="default">
                      Apply Now →
                    </ButtonLink>
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

