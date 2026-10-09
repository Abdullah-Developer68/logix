import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { BlogClient } from "@/components/blog/blog-client";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog & Technical Insights — Logix Software Consultancy",
  description:
    "Engineering insights, software architecture deep-dives, Next.js optimization guides, and design system patterns from the Logix engineering team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="ENGINEERING DISPATCH"
          badgeText="Technical Insights"
          badgeDot
          title={
            <>
              Perspectives on modern software delivery,{" "}
              <span className="text-brand-strong">architecture, and design.</span>
            </>
          }
          description="Read practical blueprints, production post-mortems, and performance benchmarks authored by our practicing senior engineers and architects."
        />

        {/* Blog Posts Grid with Interactive Category Tabs */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="PUBLICATIONS"
              title="Recent engineering breakdowns"
              description="Real lessons learned building and scaling applications for high-growth tech companies."
              align="center"
            />
            <BlogClient />
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

