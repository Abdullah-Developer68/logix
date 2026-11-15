import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";

const SITE = "https://logixofficial.site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Logix",
    locale: "en_US",
    url: "/",
    title: "Logix — Custom Software, Web & Mobile App Development",
    description:
      "Custom software, web and mobile apps, UI/UX, cloud and AI automation from a senior team in Islamabad, Pakistan.",
  },
};

const SERVICES = [
  ["Web Development", "High-performance websites, portals and SaaS platforms built with React, Next.js and Node."],
  ["Mobile App Development", "Native and cross-platform iOS & Android apps with Flutter and React Native."],
  ["UI/UX Design", "Research-led product design, design systems and prototypes."],
  ["Custom Software & ERP", "Tailored business systems, CRMs and integrations."],
  ["Cloud & DevOps", "AWS, Azure and GCP architecture, CI/CD pipelines and monitoring."],
  ["AI & Automation", "LLM-powered assistants, workflow automation and data pipelines."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Logix",
      url: SITE,
      logo: `${SITE}/apple-icon.png`,
      email: "info@logixofficial.site",
      telephone: "+92 349 9780508",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@logixofficial.site",
        telephone: "+92 349 9780508",
        availableLanguage: ["English", "Urdu"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Logix",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: "Logix — Custom Software, Web & Mobile App Development",
      url: SITE,
      image: `${SITE}/opengraph-image`,
      telephone: "+92 349 9780508",
      email: "info@logixofficial.site",
      parentOrganization: { "@id": `${SITE}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahria Town Phase 8",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software services",
        itemListElement: SERVICES.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <JsonLd data={structuredData} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
