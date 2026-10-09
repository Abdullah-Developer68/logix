import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Badge variant="brand" className="mb-6">
            <span className="size-1.5 rounded-full bg-brand" /> Available for Q4 projects
          </Badge>
          <h1>
            Software that moves your business <span className="text-brand-strong">forward.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Logix is a software company that designs, builds and scales digital products for ambitious teams — from the first workshop to launch and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">Start a project</ButtonLink>
            <ButtonLink href="/portfolio" variant="outline" size="lg">View our work</ButtonLink>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-brand" aria-hidden>★★★★★</span>
            Rated 4.9/5 by 120+ clients
          </div>
        </div>

        <div className="relative rounded-xl bg-primary p-5 shadow-xl">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <pre className="mt-4 font-mono text-xs leading-6 text-white/70">
{`const logix = await build({
  product: "your-platform",
  stack: ["Next.js", "Node", "AWS"],
  weeks: 14,
});`}
          </pre>
          <div className="mt-6 flex h-48 items-end gap-3 px-2">
            {[28, 40, 55, 48, 72, 100].map((h, i) => (
              <div key={i} className={i === 5 ? "w-full rounded-t bg-brand" : "w-full rounded-t bg-white/15"} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-white backdrop-blur">
            <span className="flex size-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-primary">✓</span>
            <span className="text-xs">
              <strong className="block font-semibold">Deployed to production</strong>
              <span className="text-white/60">14 weeks · on schedule</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
