import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const small = [
  { quote: "They shipped our MVP in 10 weeks and the codebase was cleaner than anything we'd had before.", name: "Marcus Lee", role: "CTO, Fieldly", initials: "ML" },
  { quote: "Logix felt like part of our team from day one. Communication and quality were outstanding.", name: "Amelia Grant", role: "Founder, Skyscape", initials: "AG" },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="container-x py-24">
        <p className="eyebrow mb-4">Testimonials</p>
        <h2 className="max-w-md text-[32px]! leading-tight!">Teams that stopped worrying about software.</h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card inverted className="flex flex-col justify-between p-8">
            <p className="text-xl font-medium leading-8">
              “Logix rebuilt our dispatch platform in 14 weeks. Delivery times dropped 31% and our team finally has software they enjoy using.”
            </p>
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar initials="SA" className="size-10" />
                <div className="text-sm">
                  <div className="font-semibold">Sara Ahmed</div>
                  <div className="text-white/60">COO, Northwind Logistics</div>
                </div>
              </div>
              <span className="font-semibold text-white/80">northwind</span>
            </div>
          </Card>
          <div className="flex flex-col gap-4">
            {small.map((t) => (
              <Card key={t.name} className="flex-1">
                <p className="text-sm leading-6">“{t.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar initials={t.initials} className="bg-accent text-brand-strong" />
                  <div className="text-xs">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
