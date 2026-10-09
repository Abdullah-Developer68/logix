"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+15550123456"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors lg:inline-block"
          >
            +1 (555) 012-3456
          </a>
          <ButtonLink href="/contact" size="sm" variant="default">
            Get a quote
          </ButtonLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base py-1 font-medium transition-colors",
                    isActive ? "text-brand-strong font-semibold" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4">
            <a href="tel:+15550123456" className="text-sm font-medium text-muted-foreground">
              Call us: +1 (555) 012-3456
            </a>
            <ButtonLink href="/contact" size="default" onClick={() => setMobileMenuOpen(false)}>
              Get a quote
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
