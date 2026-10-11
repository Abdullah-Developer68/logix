import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cta } from "@/components/sections/cta";
import { FadeIn, StaggerContainer, StaggerItem, MotionCardWrapper } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Careers — Remote Engineering Internships at Logix",
  description:
    "Launch your engineering journey with Logix. All internships are 100% remote with hands-on mentorship from senior practitioners, real-world production systems, and paid stipends.",
};

const openRoles = [
  {
    title: "Software Engineering Intern (Fullstack Web)",
    department: "Web Platform Pod",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Work directly alongside senior engineers shipping production features using Next.js App Router, React, TypeScript, and modern Node.js services.",
  },
  {
    title: "Mobile App Development Intern (React Native / Flutter)",
    department: "Mobile Engineering",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Build user-facing mobile interfaces and assist in engineering cross-platform apps with React Native, TypeScript, and native mobile device integrations.",
  },
  {
    title: "Cloud & DevOps Engineering Intern",
    department: "Infrastructure Pod",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Learn modern infrastructure automation, Docker containerization, CI/CD pipelines with GitHub Actions, and cloud deployments on AWS/GCP.",
  },
  {
    title: "UI/UX & Product Design Intern",
    department: "Design Systems",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Collaborate with lead designers on Figma design systems, wireframes, user journeys, and component library maintenance for client platforms.",
  },
  {
    title: "AI & Data Engineering Intern",
    department: "AI & Automation Pod",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Contribute to LLM-powered applications, document processing pipelines, prompt workflows, and automated retrieval-augmented systems (RAG).",
  },
  {
    title: "QA & Test Automation Intern",
    department: "Quality Engineering",
    location: "100% Remote",
    type: "Internship (Paid · 3-6 Months)",
    description: "Learn automated end-to-end testing with Playwright, write regression test suites, and ensure zero-defect software releases.",
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
          badgeText="100% Remote Internships"
          badgeDot
          title={
            <>
              Launch your engineering career with a team of{" "}
              <span className="text-brand-strong">proven practitioners.</span>
            </>
          }
          description="Learn alongside senior architects and product designers from anywhere in the world. All Logix internships are 100% remote with paid stipends and dedicated 1-on-1 mentorship from day one."
        >
          <ButtonLink href="#roles" size="lg">
            View remote positions
          </ButtonLink>
          <ButtonLink href="/about" variant="outline" size="lg">
            About our culture
          </ButtonLink>
        </PageHero>

        {/* Culture Visual Banner */}
        <section className="bg-background py-10 border-b border-border">
          <div className="container-x">
            <FadeIn>
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-border/80 shadow-xl">
                <Image
                  src="/images/about/team-office.jpg"
                  alt="Logix engineering work environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-white">
                  <div>
                    <span className="eyebrow text-brand">LIFE AT LOGIX</span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                      Built for engineers who take pride in their craft.
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-lg bg-brand/20 text-brand px-3 py-1 text-xs font-semibold backdrop-blur border border-brand/30">
                      100% Remote
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-xs backdrop-blur border border-white/15">
                      Dedicated Mentorship
                    </span>
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-xs backdrop-blur border border-white/15">
                      Production Impact
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Open Roles - Internships */}
        <section id="roles" className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="REMOTE INTERNSHIP OPPORTUNITIES"
              title="Explore open remote intern positions."
              description="All internships at Logix are 100% remote. Kickstart your engineering career with flexible remote hours, hands-on mentorship, paid stipends, and clear pathways to full-time roles."
            />
            <StaggerContainer className="space-y-4">
              {openRoles.map((role) => (
                <StaggerItem key={role.title}>
                  <MotionCardWrapper>
                    <Card className="p-6 sm:p-8 flex flex-col justify-between sm:flex-row sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="brand" dot={false}>{role.department}</Badge>
                          <Badge variant="outline" className="border-brand-strong/30 text-brand-strong bg-brand/5">
                            {role.location}
                          </Badge>
                          <span className="text-xs font-medium text-brand-strong bg-brand/10 rounded-full px-2 py-0.5">{role.type}</span>
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
                  </MotionCardWrapper>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
