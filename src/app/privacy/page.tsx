import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy — Logix Software Consultancy",
  description: "Privacy policy and client data confidentiality commitments of Logix Technologies Inc.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="LEGAL & COMPLIANCE"
          badgeText="Updated October 2026"
          badgeDot={false}
          title="Privacy Policy & Client Data Protection"
          description="Logix Technologies Inc. is committed to maintaining strict confidentiality, data privacy, and security for all clients, prospective partners, and visitors."
        />

        <section className="bg-background py-16 lg:py-24">
          <div className="container-x max-w-3xl space-y-10 text-sm leading-7 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h2>
              <p>
                When you submit a project inquiry, request a discovery consultation, or subscribe to Logix Dispatch, we collect information you directly provide, such as your full name, work email address, company name, project specifications, and estimated budget ranges. We do not sell, rent, or trade your personal or business data to third parties under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Confidentiality & Non-Disclosure</h2>
              <p>
                All technical architectures, proprietary software requirements, source code snippets, and business strategies shared during discovery consultations are treated as strictly confidential. We execute mutual non-disclosure agreements (NDAs) prior to in-depth technical audits or code repository access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Use of Information</h2>
              <p>
                We use collected contact information solely to evaluate project scopes, coordinate technical discovery meetings, deliver milestone documentation, and occasionally send our technical engineering newsletter (which can be opted out of at any time).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Security & Data Retention</h2>
              <p>
                All communication channels and project management workflows adhere to industry standard encryption protocols (TLS 1.3 in transit and AES-256 at rest). Client documentation is stored within SOC2-compliant repositories.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Inquiries & Contact</h2>
              <p>
                If you have questions regarding data retention or wish to request data deletion, contact our privacy desk at <a href="mailto:privacy@logix.dev" className="text-brand-strong font-semibold hover:underline">privacy@logix.dev</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

