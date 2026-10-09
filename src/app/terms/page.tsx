import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service — Logix Software Consultancy",
  description: "Terms of service and engineering engagement agreements of Logix Technologies Inc.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="LEGAL & TERMS"
          badgeText="Updated October 2026"
          badgeDot={false}
          title="Terms of Service & Engineering Agreements"
          description="These terms govern your use of our digital platforms and define the general operational framework for Logix engineering engagements."
        />

        <section className="bg-background py-16 lg:py-24">
          <div className="container-x max-w-3xl space-y-10 text-sm leading-7 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Scope of Engagements</h2>
              <p>
                All consulting services, dedicated engineering pods, and fixed-scope delivery projects performed by Logix are governed by a mutually executed Statement of Work (SOW) and Master Services Agreement (MSA). The specific deliverables, milestones, and timelines defined in the SOW supersede general website descriptions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Intellectual Property (IP) Transfer</h2>
              <p>
                Upon payment of corresponding milestone invoices, 100% of all custom software code, repository assets, architectural diagrams, and user interface designs created for the client are irrevocably assigned to the client. Pre-existing open-source libraries remain licensed under their respective open-source terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Warranty & Defect Resolution</h2>
              <p>
                All fixed-scope milestone projects include a standard 30-day post-launch warranty period during which any defects or deviations from approved specifications are remediated at zero additional cost.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Limitation of Liability</h2>
              <p>
                Logix provides software engineering and advisory services using industry best practices. Liability for any engagement is explicitly defined and limited in the executed Master Services Agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Contact Legal Desk</h2>
              <p>
                For legal inquiries, contract reviews, or enterprise vendor compliance requests, please email <a href="mailto:legal@logix.dev" className="text-brand-strong font-semibold hover:underline">legal@logix.dev</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

