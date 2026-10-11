import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Mobile Apps", href: "/#services" },
      { label: "UI/UX Design", href: "/#services" },
      { label: "Custom Software", href: "/#services" },
      { label: "Cloud & DevOps", href: "/#services" },
      { label: "AI & Automation", href: "/#services" },
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
    <footer className="bg-[#0b1f3a] dark:bg-[#050c18] text-white border-t border-white/10">
      <div className="container-x pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70 break-words">
              Logix is a software company that designs, builds and scales digital products for ambitious businesses.
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/60">
              <p>
                <a href="mailto:hello@logix.dev" className="hover:text-brand transition-colors break-all">hello@logix.dev</a>
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
                      className="text-sm text-white/60 transition-colors hover:text-white leading-5 inline-block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span className="break-words">© 2026 Logix Technologies Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
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
