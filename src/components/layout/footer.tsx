import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services#web" },
      { label: "Mobile Apps", href: "/services#mobile" },
      { label: "UI/UX Design", href: "/services#design" },
      { label: "Custom Software", href: "/services#custom" },
      { label: "Cloud & DevOps", href: "/services#cloud" },
      { label: "AI & Automation", href: "/services#ai" },
    ],
  },
  {
    title: "Offices",
    links: [
      { label: "Karachi, PK (Engineering HQ)", href: "/contact#offices" },
      { label: "Lahore, PK (Mobile Lab)", href: "/contact#offices" },
      { label: "London, UK (Europe)", href: "/contact#offices" },
      { label: "Austin, US (Americas)", href: "/contact#offices" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary">
      <div className="container-x pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Logix is a software company that designs, builds and scales digital products for ambitious businesses.
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/60">
              <p>
                <a href="mailto:hello@logix.dev" className="hover:text-brand transition-colors">hello@logix.dev</a>
              </p>
              <p>
                <a href="tel:+15550123456" className="hover:text-brand transition-colors">+1 (555) 012-3456</a>
              </p>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white tracking-tight">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© 2026 Logix Technologies Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
