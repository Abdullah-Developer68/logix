import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { HeroTerminal } from "@/components/sections/hero-terminal";

export function Hero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container-x grid items-center gap-8 sm:gap-12 py-12 sm:py-16 lg:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Badge variant="brand" dot className="mb-4 sm:mb-6">
            Available for Q4 projects
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.12] tracking-tight break-words">
            Software that moves your business{" "}
            <span className="text-brand-strong">forward.</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
            Logix is a software company that designs, builds and scales digital
            products for ambitious teams — from the first workshop to launch
            and beyond.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <div className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto justify-center">
                Start a project
              </ButtonLink>
            </div>
            <div className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <ButtonLink
                href="/#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                Explore services
              </ButtonLink>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span className="text-brand" aria-hidden>
              ★★★★★
            </span>
            Rated 4.9/5 by 120+ clients
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}
