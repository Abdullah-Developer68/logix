import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonLink } from "@/components/ui/button";
import { PortfolioClient } from "@/components/portfolio/portfolio-client";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Logix Software Consultancy",
  description:
    "Explore Logix case studies: logistics dispatch, cloud collaboration, offline field apps, multi-tenant analytics, and fintech settlement platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="SELECTED CASE STUDIES"
          badgeText="120+ Products Launched"
          badgeDot
          title={
            <>
              Software that delivers measurable{" "}
              <span className="text-brand-strong">business outcomes.</span>
            </>
          }
          description="We take pride in building software that doesn't just look pristine, but directly moves key operational and commercial metrics for our partners."
        >
          <ButtonLink href="/contact" size="lg">
            Start your project
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            Explore capabilities
          </ButtonLink>
        </PageHero>

        {/* Portfolio Showcase Grid with Interactive Filters */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="PROVEN DELIVERIES"
              title="Real products, real metrics, real scale."
              description="Click through our selected case studies across web applications, native mobile systems, enterprise platforms, and cloud infrastructure."
              align="center"
            />
            <PortfolioClient />
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

