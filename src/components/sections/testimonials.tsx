import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const small = [
  { quote: "They shipped our MVP in 10 weeks and the codebase was cleaner than anything we'd had before.", name: "Marcus Lee", role: "CTO, Fieldly", initials: "ML" },
  { quote: "Logix felt like part of our team from day one. Communication and quality were outstanding.", name: "Amelia Grant", role: "Founder, Skyscape", initials: "AG" },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="container-x py-12 sm:py-16 lg:py-24">
        <div>
          <p className="eyebrow mb-3 sm:mb-4">Testimonials</p>
          <h2 className="max-w-md text-2xl sm:text-3xl lg:text-[32px]! leading-tight!">Teams that stopped worrying about software.</h2>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-4 lg:grid-cols-2">
          <div className="transition-all duration-200 hover:-translate-y-1">
            <Card className="flex flex-col justify-between p-5 sm:p-8 h-full shadow-sm bg-card border border-border">
              <p className="text-base sm:text-xl font-medium leading-6 sm:leading-8 text-foreground">
                “Logix rebuilt our dispatch platform in 14 weeks. Delivery times dropped 31% and our team finally has software they enjoy using.”
              </p>
              <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar initials="SA" className="size-9 sm:size-10 bg-accent text-brand-strong font-bold border border-brand-strong/20" />
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-foreground">Sara Ahmed</div>
                    <div className="text-muted-foreground">COO, Northwind Logistics</div>
                  </div>
                </div>
                <span className="font-bold text-muted-foreground/80 tracking-tight text-sm">northwind</span>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            {small.map((t) => (
              <div
                key={t.name}
                className="flex-1 transition-all duration-200 hover:-translate-y-1"
              >
                <Card className="flex flex-col justify-between h-full p-4 sm:p-6">
                  <p className="text-sm leading-6">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar initials={t.initials} className="bg-accent text-brand-strong font-semibold" />
                    <div className="text-xs">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
