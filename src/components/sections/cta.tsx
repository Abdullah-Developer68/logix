import { ButtonLink } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-background pb-24">
      <div className="container-x">
        <div className="grid items-center gap-8 rounded-xl bg-brand p-10 text-primary md:grid-cols-[1.4fr_1fr] md:p-14">
          <div>
            <h2>Have an idea? Let&apos;s build it together.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-primary/75">
              Book a free 30-minute discovery call. Tell us what you&apos;re building and we&apos;ll show you how we&apos;d approach it.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink href="/contact" size="lg">Start a project</ButtonLink>
            <ButtonLink href="/contact" variant="ghost" size="lg" className="bg-white/25 hover:bg-white/40">Book a discovery call</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
