import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn, StaggerContainer, StaggerItem, MotionCardWrapper } from "@/components/ui/motion";

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
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header />
      <main className="flex-1">
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

        {/* Single Vertical Contact Form */}
        <section className="bg-background py-12 sm:py-16 lg:py-24 border-b border-border">
          <div className="container-x max-w-xl">
            <FadeIn>
              <SectionHeader
                eyebrow="PROJECT INQUIRY"
                title="Start a conversation"
                description="Fill out the details below. Our lead engineers review incoming requirements directly and respond within 24 hours."
                align="center"
              />
              <ContactForm />
            </FadeIn>
          </div>
        </section>

        {/* Global Office Locations */}
        <section id="offices" className="bg-muted py-16 sm:py-20 lg:py-28 border-b border-border">
          <div className="container-x">
            <SectionHeader
              eyebrow="GLOBAL REACH"
              title="Our engineering hubs and regional offices."
              description="With synchronized timezones across the Americas, Europe, and Asia, our pods provide round-the-clock delivery capability."
            />

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((office) => (
                <StaggerItem key={office.city}>
                  <MotionCardWrapper>
                    <Card className="flex flex-col justify-between p-5 sm:p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        <span className="text-xs font-bold text-brand-strong">{office.timezone}</span>
                        <h3 className="mt-2 text-base font-bold text-primary">{office.city}</h3>
                        <p className="text-xs font-semibold text-muted-foreground">{office.role}</p>
                        <p className="mt-4 text-xs leading-5 text-muted-foreground">{office.address}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-border space-y-1 text-xs">
                        <p className="text-muted-foreground">{office.phone}</p>
                        <p>
                          <a href={`mailto:${office.email}`} className="text-brand-strong font-semibold hover:underline break-all">
                            {office.email}
                          </a>
                        </p>
                      </div>
                    </Card>
                  </MotionCardWrapper>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-16 sm:py-20 lg:py-28">
          <div className="container-x max-w-4xl">
            <SectionHeader
              eyebrow="COMMON QUESTIONS"
              title="Frequently asked questions about getting started."
              description="Learn what to anticipate before booking your discovery session."
              align="center"
            />
            <FadeIn>
              <div className="bg-background rounded-xl p-5 sm:p-8 border border-border shadow-sm">
                <Accordion items={contactFaqs} />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
