import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { value: "250+", label: "Projects shipped", highlight: false },
  { value: "120+", label: "Happy clients", highlight: false },
  { value: "9 yrs", label: "In business", highlight: false },
  { value: "96%", label: "Client retention", highlight: true },
];

export function About() {
  return (
    <section className="bg-background">
      <div className="container-x grid items-center gap-8 sm:gap-12 py-12 sm:py-16 lg:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3 sm:mb-4">About us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px]! leading-tight!">
            A senior team of engineers, designers and strategists who treat your product like our own.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm leading-6 text-muted-foreground">
            Since 2016 Logix has partnered with founders and product leaders to turn ideas into reliable software. No handoffs to juniors, no surprises — just a small senior team that stays with you from discovery to launch and beyond.
          </p>
          <Link href="/about" className="mt-5 sm:mt-6 inline-block text-sm font-medium text-foreground hover:underline">
            More about us →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={cn(
                "rounded-xl p-3.5 sm:p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
                s.highlight ? "bg-accent border-brand-strong/20" : "bg-background border-border",
              )}
            >
              <div className={cn("text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight", s.highlight ? "text-brand-strong" : "text-primary")}>
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
