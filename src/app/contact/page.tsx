import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Start a Project — Logix Software Consultancy",
  description:
    "Get in touch with Logix. Book a discovery call with a senior engineer or request a project estimate. Direct offices in Karachi, Lahore, London, and Austin.",
};

const offices = [
  {
    city: "Karachi, Pakistan",
    role: "Global Engineering HQ",
    address: "Clifton Block 4, Executive Tower, Suite 702",
    email: "karachi@logix.dev",
    phone: "+92 (21) 3582-9011",
    timezone: "UTC+5 (PKT)",
  },
  {
    city: "Lahore, Pakistan",
    role: "Mobile & AI Systems Lab",
    address: "Gulberg III, Tech Hub Center, Level 4",
    email: "lahore@logix.dev",
    phone: "+92 (42) 3578-4100",
    timezone: "UTC+5 (PKT)",
  },
  {
    city: "London, United Kingdom",
    role: "European Client Operations",
    address: "70 St Mary Axe, City of London, EC3A 8EP",
    email: "london@logix.dev",
    phone: "+44 20 7946 0912",
    timezone: "UTC+0 (GMT/BST)",
  },
  {
    city: "Austin, United States",
    role: "Americas Strategy & Partnerships",
    address: "500 W 2nd St, Suite 1900, Austin, TX 78701",
    email: "austin@logix.dev",
    phone: "+1 (512) 555-0199",
    timezone: "UTC-5 (CDT)",
  },
];

const contactFaqs = [
  {
    id: "turnaround",
    question: "How fast do you respond to project inquiries?",
    answer:
      "A senior technical director reviews every inquiry and responds within 24 business hours to coordinate an exploratory 30-minute discovery call.",
  },
  {
    id: "discovery-call",
    question: "What happens during the initial discovery call?",
    answer:
      "You will speak directly with an engineering lead or technical architect — never a sales rep. We evaluate your product scope, identify technical risks, and provide honest feedback on timeline feasibility.",
  },
  {
    id: "estimate-accuracy",
    question: "Do you offer fixed-price quotes or time-and-materials?",
    answer:
      "We offer both. For well-defined scopes and MVPs, we provide guaranteed fixed-price milestone delivery. For evolving roadmaps, we deploy dedicated engineering pods with monthly retainer billing.",
  },
  {
    id: "nda-protection",
    question: "Can we sign an NDA before sharing sensitive details?",
    answer:
      "Yes. We are happy to execute your standard mutual non-disclosure agreement (NDA) or provide our own prior to reviewing any proprietary documentation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <PageHero
          eyebrow="START A PROJECT"
          badgeText="24h Response SLA"
          badgeDot
          title={
            <>
              Tell us what you&apos;re building.{" "}
              <span className="text-brand-strong">We&apos;ll show you how we&apos;d approach it.</span>
            </>
          }
          description="Book a free 30-minute discovery session with our senior engineers. We will analyze your architecture, discuss trade-offs, and outline a realistic delivery timeline."
        />

        {/* Form and Direct Contact Grid */}
        <section className="bg-background py-16 lg:py-24 border-b border-border">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
              {/* Left Column: Interactive Form */}
              <div>
                <SectionHeader
                  eyebrow="PROJECT INQUIRY"
                  title="Request an architectural assessment"
                  description="Fill out the specifications below. Our lead engineers review incoming requirements directly."
                />
                <ContactForm />
              </div>

              {/* Right Column: Direct Info & Guarantees */}
              <div className="space-y-6">
                <Card className="p-8">
                  <h3 className="text-lg font-bold text-primary">Direct Inquiries</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Prefer direct email or phone? Reach our partnerships desk directly.
                  </p>
                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-brand-strong font-bold">
                        ✉
                      </span>
                      <div>
                        <span className="block text-xs font-semibold text-muted-foreground">General Enquiries</span>
                        <a href="mailto:hello@logix.dev" className="font-semibold text-primary hover:text-brand-strong">
                          hello@logix.dev
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-brand-strong font-bold">
                        📞
                      </span>
                      <div>
                        <span className="block text-xs font-semibold text-muted-foreground">Phone Hotline</span>
                        <a href="tel:+15550123456" className="font-semibold text-primary hover:text-brand-strong">
                          +1 (555) 012-3456
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card inverted className="p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">The Logix Guarantee</span>
                  <h4 className="mt-2 text-base font-bold text-white">No Junior Handoffs</h4>
                  <p className="mt-2 text-xs leading-5 text-white/70">
                    The leads you speak with during discovery are the same engineers who review pull requests and architect your database schemas.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/60">
                    <span>Response Time</span>
                    <strong className="text-brand">Under 24 Hours</strong>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Office Locations */}
        <section id="offices" className="bg-muted py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="GLOBAL REACH"
              title="Our engineering hubs and regional offices."
              description="With synchronized timezones across the Americas, Europe, and Asia, our pods provide round-the-clock delivery capability."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((office) => (
                <Card key={office.city} className="flex flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-bold text-brand-strong">{office.timezone}</span>
                    <h3 className="mt-2 text-base font-bold text-primary">{office.city}</h3>
                    <p className="text-xs font-semibold text-muted-foreground">{office.role}</p>
                    <p className="mt-4 text-xs leading-5 text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border space-y-1 text-xs">
                    <p className="text-muted-foreground">{office.phone}</p>
                    <p>
                      <a href={`mailto:${office.email}`} className="text-brand-strong font-semibold hover:underline">
                        {office.email}
                      </a>
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container-x max-w-4xl">
            <SectionHeader
              eyebrow="COMMON QUESTIONS"
              title="Frequently asked questions about getting started."
              description="Learn what to anticipate before booking your discovery session."
              align="center"
            />
            <div className="bg-background rounded-xl p-8 border border-border">
              <Accordion items={contactFaqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

