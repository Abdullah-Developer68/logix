import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  { icon: "</>", title: "Web Development", text: "Scalable web apps and platforms built with React, Next.js and Node.", inverted: false },
  { icon: "▭", title: "Mobile App Development", text: "Native and cross-platform apps for iOS and Android with React Native.", inverted: false },
  { icon: "◧", title: "UI/UX Design", text: "Research-led product design, from prototypes to full design systems.", inverted: false },
  { icon: "≫", title: "Custom Software Development", text: "Tailored internal tools, portals and integrations that fit how you work.", inverted: false },
  { icon: "☁", title: "Cloud & DevOps", text: "Reliable infrastructure, CI/CD and observability on AWS, GCP and Azure.", inverted: false },
  { icon: "✦", title: "AI & Automation", text: "Practical AI features and workflow automation that save real hours.", inverted: true },
];

export function Services() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="container-x py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Our services</p>
            <h2 className="max-w-md text-[32px]! leading-tight!">End-to-end services, one accountable team.</h2>
          </div>
          <ButtonLink href="/services" variant="outline" size="sm">All services</ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} inverted={s.inverted} className="flex flex-col">
              <span className={cn("flex size-9 items-center justify-center rounded-lg text-sm font-medium", s.inverted ? "bg-brand text-primary" : "bg-accent text-brand-strong")}>
                {s.icon}
              </span>
              <h3 className="mt-5 text-base!">{s.title}</h3>
              <p className={cn("mt-2 text-sm leading-6", s.inverted ? "text-white/65" : "text-muted-foreground")}>{s.text}</p>
              <Link href="/services" className="mt-6 pt-2 text-xs font-medium hover:underline">Explore service →</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
