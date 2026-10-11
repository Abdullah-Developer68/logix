import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { Cta } from "@/components/sections/cta";
import { InternshipList } from "@/components/internships/internship-list";

export const metadata: Metadata = {
  title: "Internships — Remote Engineering & Design Internships at Logix",
  description:
    "Launch your engineering journey with Logix. All internships are 100% remote with hands-on mentorship from senior practitioners, real-world production systems, and pathways to full-time roles.",
};

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          eyebrow="INTERNSHIPS AT LOGIX"
          badgeText="100% Remote Internships"
          badgeDot
          title={
            <>
              Launch your engineering career with a team of{" "}
              <span className="text-brand-strong">proven practitioners.</span>
            </>
          }
          description="Learn alongside senior architects and product designers from anywhere in the world. All Logix internships are 100% remote with dedicated 1-on-1 mentorship from day one."
        >
          <ButtonLink href="#roles" size="lg" className="w-full sm:w-auto justify-center">
            View remote internships
          </ButtonLink>
          <ButtonLink href="/about" variant="outline" size="lg" className="w-full sm:w-auto justify-center">
            About our culture
          </ButtonLink>
        </PageHero>

        {/* Culture Visual Banner */}
        <section className="bg-background py-8 sm:py-10 border-b border-border">
          <div className="container-x">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl border border-border/80 shadow-xl">
              <Image
                src="/images/about/team-office.jpg"
                alt="Logix engineering work environment"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/95 via-[#0b1f3a]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-white">
                <div>
                  <span className="eyebrow text-brand">LIFE AT LOGIX</span>
                  <h3 className="mt-2 text-lg sm:text-2xl font-bold text-white">
                    Built for engineers who take pride in their craft.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg bg-brand/20 text-brand px-2.5 py-1 text-xs font-semibold backdrop-blur border border-brand/30">
                    100% Remote
                  </span>
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs backdrop-blur border border-white/15">
                    Dedicated Mentorship
                  </span>
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs backdrop-blur border border-white/15">
                    Production Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles - Internships */}
        <section id="roles" className="bg-muted py-16 sm:py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="REMOTE INTERNSHIP OPPORTUNITIES"
              title="Explore open remote intern positions."
              description="All internships at Logix are 100% remote. Kickstart your engineering career with flexible remote hours, hands-on mentorship, and clear pathways to full-time engineering roles."
            />
            <InternshipList />
          </div>
        </section>

        {/* CTA */}
        <div className="pt-20">
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  );
}

