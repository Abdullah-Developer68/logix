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
      <div className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">About us</p>
          <h2 className="text-3xl! leading-tight! sm:text-[32px]!">
            A senior team of engineers, designers and strategists who treat your product like our own.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Since 2016 Logix has partnered with founders and product leaders to turn ideas into reliable software. No handoffs to juniors, no surprises — just a small senior team that stays with you from discovery to launch and beyond.
          </p>
          <Link href="/about" className="mt-6 inline-block text-sm font-medium text-foreground hover:underline">
            More about us →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={cn("rounded-xl p-6", s.highlight ? "bg-accent" : "bg-background")}>
              <div className={cn("text-5xl font-bold tracking-tight", s.highlight ? "text-brand-strong" : "text-primary")}>{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
