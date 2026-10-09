import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home V2 (Paper Edition) — Logix Software Company",
  description:
    "Logix is a software company that designs, builds and scales web platforms, mobile apps and AI products for ambitious teams.",
};

export default function HomeV2() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] text-[var(--color-foreground)] flex flex-col items-center">
      {/* Switcher Banner */}
      <aside aria-label="Version switcher" className="w-full bg-[var(--color-primary)] text-white/80 border-b border-white/10 px-4 py-2.5 text-xs text-center flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <span className="size-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
          <span>Home V2 — Paper Design System Edition</span>
        </span>
        <span className="text-white/40">|</span>
        <Link
          href="/"
          className="text-[var(--color-brand)] font-semibold underline underline-offset-2 hover:text-white transition-colors"
        >
          ← Switch to Home V1
        </Link>
      </aside>

      {/* Main Container - Paper Desktop Spec */}
      <div
        className="w-full max-w-[1440px] flex flex-col font-sans text-xs leading-4 antialiased overflow-x-hidden"
        style={{
          backgroundColor: "var(--color-background)",
          boxSizing: "border-box",
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Navigation Bar */}
        <header
          style={{
            alignItems: "center",
            borderBottomColor: "var(--color-border)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            boxSizing: "border-box",
            display: "flex",
            flexShrink: "0",
            height: "72px",
            justifyContent: "space-between",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          {/* Logo */}
          <Link
            href="/home-2"
            style={{
              alignItems: "center",
              boxSizing: "border-box",
              display: "flex",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "inline-block", flexShrink: "0" }}
            >
              <rect width="36" height="36" rx="9" fill="var(--color-primary)" />
              <path d="M10 9h4.5v14H24v4H10z" fill="#FFFFFF" />
              <path d="M22.5 9.5l3.2 2.3-6.6 9.2-3.2-2.3z" fill="var(--color-brand)" />
            </svg>
            <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex" }}>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "20px",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "0.18em",
                  lineHeight: "24px",
                }}
              >
                LOGI
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-brand)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "20px",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "24px",
                }}
              >
                X
              </div>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "2px 6px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-brand-strong)",
                  lineHeight: "14px",
                }}
              >
                V2
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav
            style={{
              alignItems: "center",
              boxSizing: "border-box",
              display: "flex",
              gap: "32px",
            }}
            className="hidden md:flex"
            aria-label="Paper Navigation"
          >
            <Link
              href="/home-2"
              style={{
                boxSizing: "border-box",
                color: "var(--color-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
            >
              Home V2
            </Link>
            <Link
              href="/"
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Home V1
            </Link>
            <Link
              href="/about"
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-sm)",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-foreground)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "8px" }}>
            <a
              href="tel:+923001234567"
              style={{
                alignItems: "center",
                borderRadius: "var(--radius-md)",
                boxSizing: "border-box",
                display: "flex",
                height: "40px",
                paddingInline: "16px",
                textDecoration: "none",
              }}
              className="hidden sm:flex hover:bg-[var(--color-muted)] transition-colors"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                }}
              >
                +92 300 1234567
              </div>
            </a>
            <Link
              href="/contact"
              style={{
                alignItems: "center",
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--radius-md)",
                boxSizing: "border-box",
                display: "flex",
                height: "40px",
                paddingInline: "20px",
                textDecoration: "none",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-primary-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                }}
              >
                Start a project
              </div>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section
          style={{
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            gap: "64px",
            paddingBottom: "112px",
            paddingTop: "96px",
          }}
          className="flex-col lg:flex-row px-6 md:px-12 lg:px-[120px]"
        >
          {/* Hero Left Content */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              flexShrink: "0",
              gap: "32px",
            }}
            className="w-full lg:w-[620px]"
          >
            {/* Pill Announcement */}
            <Link
              href="/services"
              style={{
                alignItems: "center",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-full)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                gap: "8px",
                paddingBlock: "4px",
                paddingLeft: "6px",
                paddingRight: "12px",
                width: "fit-content",
                textDecoration: "none",
              }}
              className="hover:border-[var(--color-brand)] transition-colors"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-full)",
                  boxSizing: "border-box",
                  display: "flex",
                  paddingBlock: "2px",
                  paddingInline: "8px",
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-brand-strong)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xs)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "16px",
                  }}
                >
                  New
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "16px",
                }}
              >
                AI &amp; automation services now live →
              </div>
            </Link>

            {/* Massive Heading */}
            <h1
              style={{
                boxSizing: "border-box",
                columnGap: "16px",
                display: "flex",
                flexWrap: "wrap",
              }}
              className="w-full text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.045em] leading-[1.05]"
            >
              <span style={{ color: "var(--color-foreground)" }}>Software</span>{" "}
              <span style={{ color: "var(--color-foreground)" }}>that</span>{" "}
              <span style={{ color: "var(--color-foreground)" }}>moves</span>{" "}
              <span style={{ color: "var(--color-foreground)" }}>your</span>{" "}
              <span style={{ color: "var(--color-foreground)" }}>business</span>{" "}
              <span style={{ color: "var(--color-brand-strong)" }}>forward.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-lg)",
                lineHeight: "30px",
              }}
              className="max-w-[520px]"
            >
              Logix is a software company that designs, builds and scales web platforms, mobile apps and AI products for ambitious teams — from first sketch to millions of users.
            </p>

            {/* Hero CTAs */}
            <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "var(--radius-md)",
                  boxSizing: "border-box",
                  display: "flex",
                  gap: "8px",
                  height: "48px",
                  paddingInline: "24px",
                  textDecoration: "none",
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-primary-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    lineHeight: "20px",
                  }}
                >
                  Start a project
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-brand)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    lineHeight: "20px",
                  }}
                >
                  →
                </div>
              </Link>
              <Link
                href="/portfolio"
                style={{
                  alignItems: "center",
                  borderColor: "var(--color-input)",
                  borderRadius: "var(--radius-md)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "flex",
                  height: "48px",
                  paddingInline: "24px",
                  textDecoration: "none",
                }}
                className="hover:bg-[var(--color-muted)] transition-colors"
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    lineHeight: "20px",
                  }}
                >
                  View our work
                </div>
              </Link>
            </div>

            {/* Social Proof Rating */}
            <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "12px", paddingTop: "8px" }}>
              <svg width="92" height="16" viewBox="0 0 92 16" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                <path d="M8 0l2.4 5 5.4.6-4 3.7 1.1 5.3L8 12l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="var(--color-brand)" />
                <path transform="translate(19 0)" d="M8 0l2.4 5 5.4.6-4 3.7 1.1 5.3L8 12l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="var(--color-brand)" />
                <path transform="translate(38 0)" d="M8 0l2.4 5 5.4.6-4 3.7 1.1 5.3L8 12l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="var(--color-brand)" />
                <path transform="translate(57 0)" d="M8 0l2.4 5 5.4.6-4 3.7 1.1 5.3L8 12l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="var(--color-brand)" />
                <path transform="translate(76 0)" d="M8 0l2.4 5 5.4.6-4 3.7 1.1 5.3L8 12l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="var(--color-brand)" />
              </svg>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  lineHeight: "18px",
                }}
              >
                4.9/5
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-muted-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                from 80+ clients on Clutch
              </div>
            </div>
          </div>

          {/* Hero Right Card (Interactive Code Specimen) */}
          <div
            style={{
              backgroundColor: "var(--color-primary)",
              borderRadius: "var(--radius-xl)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minHeight: "540px",
              overflow: "clip",
              padding: "28px",
              position: "relative",
            }}
            className="w-full lg:flex-1"
          >
            {/* Terminal Header */}
            <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", justifyContent: "space-between" }}>
              <div style={{ boxSizing: "border-box", display: "flex", gap: "6px" }}>
                <div style={{ backgroundColor: "rgb(255 255 255 / 22%)", borderRadius: "var(--radius-full)", boxSizing: "border-box", flexShrink: "0", height: "10px", width: "10px" }} />
                <div style={{ backgroundColor: "rgb(255 255 255 / 22%)", borderRadius: "var(--radius-full)", boxSizing: "border-box", flexShrink: "0", height: "10px", width: "10px" }} />
                <div style={{ backgroundColor: "rgb(255 255 255 / 22%)", borderRadius: "var(--radius-full)", boxSizing: "border-box", flexShrink: "0", height: "10px", width: "10px" }} />
              </div>
              <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 55%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", lineHeight: "16px" }}>
                logix / client-portal
              </div>
            </div>

            {/* Code Body */}
            <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: "var(--font-mono)" }}>
              <div style={{ boxSizing: "border-box", display: "flex", gap: "8px" }}>
                <div style={{ boxSizing: "border-box", color: "var(--color-brand)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  export async function
                </div>
                <div style={{ boxSizing: "border-box", color: "#FFFFFF", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  launch(product) {"{"}
                </div>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", gap: "8px", paddingLeft: "20px" }}>
                <div style={{ boxSizing: "border-box", color: "var(--color-brand)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  const
                </div>
                <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 72%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  plan = await discover(product)
                </div>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", gap: "8px", paddingLeft: "20px" }}>
                <div style={{ boxSizing: "border-box", color: "var(--color-brand)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  const
                </div>
                <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 72%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", whiteSpace: "pre-wrap", width: "max-content" }}>
                  ui{"   "}= design(plan, {"{"} users: &apos;first&apos; {"}"})
                </div>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", gap: "8px", paddingLeft: "20px" }}>
                <div style={{ boxSizing: "border-box", color: "var(--color-brand)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  const
                </div>
                <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 72%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", whiteSpace: "pre-wrap", width: "max-content" }}>
                  app{"  "}= build(ui, [&apos;web&apos;, &apos;ios&apos;, &apos;android&apos;])
                </div>
              </div>
              <div style={{ boxSizing: "border-box", flexShrink: "0", height: "24px" }} />
              <div style={{ boxSizing: "border-box", display: "flex", gap: "8px", paddingLeft: "20px" }}>
                <div style={{ boxSizing: "border-box", color: "var(--color-brand)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  return
                </div>
                <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 72%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", width: "max-content" }}>
                  scale(app)
                </div>
                <div style={{ boxSizing: "border-box", color: "rgb(255 255 255 / 40%)", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px", whiteSpace: "pre-wrap", width: "max-content" }}>
                  {"  // → 1M+ users"}
                </div>
              </div>
              <div style={{ boxSizing: "border-box", color: "#FFFFFF", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "24px" }}>
                {"}"}
              </div>
            </div>

            {/* Growth Chart Bars */}
            <div style={{ alignItems: "flex-end", borderTopColor: "#FFFFFF1F", borderTopStyle: "solid", borderTopWidth: "1px", boxSizing: "border-box", display: "flex", flexGrow: "1", gap: "10px", minHeight: "120px", paddingTop: "12px" }}>
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "28%" }} />
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "40%" }} />
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "34%" }} />
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "52%" }} />
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "61%" }} />
              <div style={{ backgroundColor: "rgb(255 255 255 / 14%)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "74%" }} />
              <div style={{ backgroundColor: "var(--color-brand)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", boxSizing: "border-box", flexBasis: "0%", flexGrow: "1", height: "100%" }} />
            </div>

            {/* Deployed Badge Float */}
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                boxShadow: "#0B1F3A47 0px 12px 32px",
                boxSizing: "border-box",
                display: "flex",
                gap: "12px",
                paddingBlock: "12px",
                paddingInline: "16px",
              }}
              className="mt-4 self-start shadow-xl"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-full)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "32px",
                  justifyContent: "center",
                  width: "32px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="M20 6 9 17l-5-5" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "18px",
                  }}
                >
                  Deployed to production
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xs)",
                    lineHeight: "16px",
                  }}
                >
                  v2.4.0 · 2 minutes ago
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Strip */}
        <section
          style={{
            alignItems: "center",
            backgroundColor: "var(--color-muted)",
            borderBottomColor: "var(--color-border)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderTopColor: "var(--color-border)",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingBlock: "48px",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          <div
            style={{
              boxSizing: "border-box",
              color: "var(--color-muted-foreground)",
              display: "inline-block",
              fontFamily: "system-ui, sans-serif",
              fontSize: "var(--text-sm)",
              lineHeight: "18px",
            }}
          >
            Trusted by 120+ companies across 14 countries
          </div>
          <div
            style={{
              alignItems: "center",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
            className="flex-wrap gap-8 justify-center lg:justify-between"
          >
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: "system-ui, sans-serif", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: "28px" }}>
              northwind
            </div>
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: '"Georgia", system-ui, sans-serif', fontSize: "22px", fontStyle: "italic", lineHeight: "28px" }}>
              Meridian
            </div>
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: "system-ui, sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "0.22em", lineHeight: "22px" }}>
              ALTITUDE
            </div>
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: "system-ui, sans-serif", fontSize: "22px", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: "28px" }}>
              pulse/health
            </div>
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: "system-ui, sans-serif", fontSize: "22px", fontWeight: 700, lineHeight: "28px" }}>
              Kora·Pay
            </div>
            <div style={{ boxSizing: "border-box", color: "#8593A6", display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "20px", fontWeight: 500, lineHeight: "24px" }}>
              stackline
            </div>
          </div>
        </section>

        {/* Who We Are & Metrics Section */}
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            gap: "96px",
            paddingBottom: "112px",
            paddingTop: "128px",
          }}
          className="flex-col lg:flex-row px-6 md:px-12 lg:px-[120px]"
        >
          {/* Who We Are Text */}
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              flexShrink: "0",
              gap: "28px",
            }}
            className="w-full lg:w-[600px]"
          >
            <div
              style={{
                boxSizing: "border-box",
                color: "var(--color-brand-strong)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "var(--tracking-wide)",
                lineHeight: "16px",
                textTransform: "uppercase",
              }}
            >
              Who we are
            </div>
            <h2
              style={{
                boxSizing: "border-box",
                color: "var(--color-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-4xl)",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "46px",
              }}
            >
              A senior team of engineers, designers and strategists who treat your product like our own.
            </h2>
            <p
              style={{
                boxSizing: "border-box",
                color: "var(--color-muted-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-base)",
                lineHeight: "28px",
              }}
            >
              Since 2016, Logix has partnered with startups and enterprises to turn complex problems into simple, reliable software. No hand-offs, no black boxes — just a dedicated squad, weekly demos and code you fully own.
            </p>
            <Link
              href="/about"
              style={{
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                gap: "8px",
                textDecoration: "none",
                width: "fit-content",
              }}
              className="group"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "underline 1px",
                  textUnderlineOffset: "4px",
                }}
              >
                More about Logix
              </span>
              <span
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </Link>
          </div>

          {/* Stats 2x2 Grid */}
          <div
            style={{
              alignSelf: "start",
              borderLeftColor: "var(--color-border)",
              borderLeftStyle: "solid",
              borderLeftWidth: "1px",
              borderTopColor: "var(--color-border)",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
            }}
            className="w-full lg:flex-1 max-w-[503px]"
          >
            {/* Stat 1 */}
            <div
              style={{
                borderBottomColor: "var(--color-border)",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRightColor: "var(--color-border)",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "32px",
              }}
              className="w-1/2 min-w-[180px]"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-6xl)",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "64px",
                }}
              >
                250+
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-muted-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                Projects delivered
              </div>
            </div>

            {/* Stat 2 */}
            <div
              style={{
                borderBottomColor: "var(--color-border)",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRightColor: "var(--color-border)",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "32px",
              }}
              className="w-1/2 min-w-[180px]"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-6xl)",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "64px",
                }}
              >
                120+
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-muted-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                Happy clients worldwide
              </div>
            </div>

            {/* Stat 3 */}
            <div
              style={{
                borderBottomColor: "var(--color-border)",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRightColor: "var(--color-border)",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "32px",
              }}
              className="w-1/2 min-w-[180px]"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-6xl)",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "64px",
                }}
              >
                9 yrs
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-muted-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                Building software
              </div>
            </div>

            {/* Stat 4 - Accent Highlight */}
            <div
              style={{
                backgroundColor: "var(--color-accent)",
                borderBottomColor: "var(--color-border)",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRightColor: "var(--color-border)",
                borderRightStyle: "solid",
                borderRightWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "32px",
              }}
              className="w-1/2 min-w-[180px]"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-brand-strong)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-6xl)",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "64px",
                }}
              >
                96%
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                Client retention rate
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Services Section */}
        <section
          style={{
            backgroundColor: "var(--color-muted)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
            paddingBlock: "112px",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          {/* Header */}
          <div
            style={{
              alignItems: "flex-end",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="flex-col md:flex-row gap-6 md:gap-0"
          >
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                gap: "20px",
              }}
              className="max-w-[640px]"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-brand-strong)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "var(--tracking-wide)",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                }}
              >
                What we do
              </div>
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-5xl)",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "54px",
                }}
              >
                End-to-end services, one accountable team.
              </h2>
            </div>
            <Link
              href="/services"
              style={{
                alignItems: "center",
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-input)",
                borderRadius: "var(--radius-md)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                height: "44px",
                paddingInline: "20px",
                textDecoration: "none",
              }}
              className="hover:bg-white/80 transition-colors"
            >
              <div
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                }}
              >
                All services →
              </div>
            </Link>
          </div>

          {/* 6 Service Cards Grid */}
          <div
            style={{
              boxSizing: "border-box",
              display: "grid",
              gap: "16px",
              width: "100%",
            }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Service 1 */}
            <div
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-xl)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-md transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="m16 18 6-6-6-6" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m8 6-6 6 6 6" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  Web Development
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  High-performance websites, portals and SaaS platforms built with React, Next.js and Node.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:text-[var(--color-brand-strong)] transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Service 2 */}
            <div
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-xl)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-md transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 18h2" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  Mobile App Development
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  Native and cross-platform iOS &amp; Android apps with Flutter and React Native.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:text-[var(--color-brand-strong)] transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Service 3 */}
            <div
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-xl)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-md transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="M12 19l7-7 3 3-7 7-3-3z" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 2l7.6 7.6" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11" cy="11" r="2" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  UI/UX Design
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  Research-led product design, design systems and prototypes that users love.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:text-[var(--color-brand-strong)] transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Service 4 */}
            <div
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-xl)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-md transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  Custom Software &amp; ERP
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  Tailored business systems, CRMs and integrations that fit how your team actually works.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:text-[var(--color-brand-strong)] transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Service 5 */}
            <div
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
                borderRadius: "var(--radius-xl)",
                borderStyle: "solid",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-md transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="none" stroke="var(--color-brand-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  Cloud &amp; DevOps
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-muted-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  AWS, Azure and GCP architecture, CI/CD pipelines and 24/7 monitoring that scales.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:text-[var(--color-brand-strong)] transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Service 6 (Primary Dark Highlight) */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--radius-xl)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "268px",
                padding: "32px",
              }}
              className="hover:shadow-lg transition-shadow"
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-brand)",
                  borderRadius: "var(--radius-lg)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  height: "44px",
                  justifyContent: "center",
                  width: "44px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7z" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", flexGrow: "1", gap: "10px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-primary-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-xl)",
                    fontWeight: "var(--font-weight-semibold)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "24px",
                  }}
                >
                  AI &amp; Automation
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "color-mix(in srgb, var(--color-primary-foreground) 70%, transparent)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                  }}
                >
                  LLM-powered assistants, workflow automation and data pipelines that save hours every week.
                </div>
              </div>
              <Link
                href="/services"
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-brand)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "18px",
                  textDecoration: "none",
                }}
                className="hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        {/* Client Stories Testimonials */}
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
            paddingBlock: "128px",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            className="max-w-[720px]"
          >
            <div
              style={{
                boxSizing: "border-box",
                color: "var(--color-brand-strong)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "var(--tracking-wide)",
                lineHeight: "16px",
                textTransform: "uppercase",
              }}
            >
              Client stories
            </div>
            <h2
              style={{
                boxSizing: "border-box",
                color: "var(--color-foreground)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--text-5xl)",
                fontWeight: "var(--font-weight-bold)",
                letterSpacing: "var(--tracking-tighter)",
                lineHeight: "54px",
              }}
            >
              Teams that stopped worrying about software.
            </h2>
          </div>

          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              gap: "16px",
            }}
            className="flex-col lg:flex-row"
          >
            {/* Dark Feature Testimonial */}
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--radius-xl)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                justifyContent: "space-between",
                padding: "48px",
              }}
              className="w-full lg:w-[592px] shrink-0"
            >
              <svg width="36" height="28" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                <path d="M0 28V16C0 7 5 1.5 14 0l1.5 3.5C10.5 5 8 8.5 8 13h7v15H0zm21 0V16c0-9 5-14.5 14-16l1 3.5c-5 1.5-7.5 5-7.5 9.5H36v15H21z" fill="var(--color-brand)" />
              </svg>
              <blockquote
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-primary-foreground)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "26px",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "var(--tracking-tight)",
                  lineHeight: "38px",
                }}
              >
                Logix rebuilt our dispatch platform in 14 weeks. Delivery times dropped 31% and our ops team finally has software they enjoy using.
              </blockquote>
              <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "14px" }}>
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "var(--color-brand)",
                      borderRadius: "var(--radius-full)",
                      boxSizing: "border-box",
                      display: "flex",
                      flexShrink: "0",
                      height: "48px",
                      justifyContent: "center",
                      width: "48px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-primary)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "20px",
                      }}
                    >
                      SA
                    </div>
                  </div>
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-primary-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "20px",
                      }}
                    >
                      Sara Ahmed
                    </div>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "color-mix(in srgb, var(--color-primary-foreground) 65%, transparent)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        lineHeight: "18px",
                      }}
                    >
                      COO, Northwind Logistics
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "color-mix(in srgb, var(--color-primary-foreground) 45%, transparent)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: "28px",
                  }}
                >
                  northwind
                </div>
              </div>
            </div>

            {/* Stacked Testimonials Right */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              className="w-full lg:flex-1"
            >
              {/* Card 1 */}
              <div
                style={{
                  borderColor: "var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  justifyContent: "space-between",
                  padding: "32px",
                }}
                className="flex-1"
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-lg)",
                    lineHeight: "28px",
                  }}
                >
                  &ldquo;From a napkin sketch to 50k downloads in six months. Their product thinking is as strong as their code.&rdquo;
                </div>
                <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "var(--color-muted)",
                      borderColor: "var(--color-border)",
                      borderRadius: "var(--radius-full)",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexShrink: "0",
                      height: "40px",
                      justifyContent: "center",
                      width: "40px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "18px",
                      }}
                    >
                      UR
                    </div>
                  </div>
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "18px",
                      }}
                    >
                      Usman Raza
                    </div>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-muted-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        lineHeight: "18px",
                      }}
                    >
                      Founder, Kora·Pay
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  borderColor: "var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  justifyContent: "space-between",
                  padding: "32px",
                }}
                className="flex-1"
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-lg)",
                    lineHeight: "28px",
                  }}
                >
                  &ldquo;Weekly demos, honest estimates and zero surprises. Logix is the first agency we’ve renewed three years running.&rdquo;
                </div>
                <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "var(--color-muted)",
                      borderColor: "var(--color-border)",
                      borderRadius: "var(--radius-full)",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexShrink: "0",
                      height: "40px",
                      justifyContent: "center",
                      width: "40px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "18px",
                      }}
                    >
                      EL
                    </div>
                  </div>
                  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-semibold)",
                        lineHeight: "18px",
                      }}
                    >
                      Emily Lawson
                    </div>
                    <div
                      style={{
                        boxSizing: "border-box",
                        color: "var(--color-muted-foreground)",
                        display: "inline-block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "var(--text-sm)",
                        lineHeight: "18px",
                      }}
                    >
                      VP Engineering, pulse/health
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big Teal CTA Card */}
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            paddingBottom: "128px",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "var(--color-brand)",
              borderRadius: "20px",
              boxSizing: "border-box",
              display: "flex",
              gap: "64px",
              justifyContent: "space-between",
              overflow: "clip",
              paddingBlock: "72px",
              width: "100%",
            }}
            className="flex-col lg:flex-row px-8 sm:px-12 lg:px-16"
          >
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                gap: "20px",
              }}
              className="max-w-[640px]"
            >
              <h2
                style={{
                  boxSizing: "border-box",
                  color: "var(--color-primary)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "56px",
                  fontWeight: "var(--font-weight-bold)",
                  letterSpacing: "var(--tracking-tighter)",
                  lineHeight: "60px",
                }}
                className="text-3xl sm:text-5xl lg:text-[56px]"
              >
                Have an idea? Let’s build it together.
              </h2>
              <p
                style={{
                  boxSizing: "border-box",
                  color: "color-mix(in srgb, var(--color-primary) 80%, transparent)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-lg)",
                  lineHeight: "28px",
                }}
              >
                Book a free 30-minute discovery call. You’ll leave with a clear scope, timeline and estimate — no strings attached.
              </p>
            </div>

            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                gap: "12px",
              }}
              className="w-full sm:w-[280px]"
            >
              <Link
                href="/contact"
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "var(--radius-md)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  gap: "8px",
                  height: "52px",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-primary-foreground)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    lineHeight: "20px",
                  }}
                >
                  Book a free call
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-brand)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    lineHeight: "20px",
                  }}
                >
                  →
                </div>
              </Link>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  alignItems: "center",
                  borderColor: "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  borderRadius: "var(--radius-md)",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexShrink: "0",
                  gap: "8px",
                  height: "52px",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
                className="hover:bg-black/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "var(--color-primary)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    lineHeight: "20px",
                  }}
                >
                  Chat on WhatsApp
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Paper Footer Section */}
        <footer
          style={{
            backgroundColor: "var(--color-primary)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            paddingBottom: "40px",
            paddingTop: "80px",
          }}
          className="px-6 md:px-12 lg:px-[120px]"
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="flex-col lg:flex-row gap-12 lg:gap-0"
          >
            {/* Footer Brand Info */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                gap: "20px",
              }}
              className="max-w-[340px]"
            >
              <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", gap: "10px" }}>
                <svg width="32" height="32" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: "0" }}>
                  <rect width="36" height="36" rx="9" fill="#FFFFFF" />
                  <path d="M10 9h4.5v14H24v4H10z" fill="var(--color-primary)" />
                  <path d="M22.5 9.5l3.2 2.3-6.6 9.2-3.2-2.3z" fill="var(--color-brand)" />
                </svg>
                <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex" }}>
                  <div
                    style={{
                      boxSizing: "border-box",
                      color: "#FFFFFF",
                      display: "inline-block",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "20px",
                      fontWeight: "var(--font-weight-medium)",
                      letterSpacing: "0.18em",
                      lineHeight: "24px",
                    }}
                  >
                    LOGI
                  </div>
                  <div
                    style={{
                      boxSizing: "border-box",
                      color: "var(--color-brand)",
                      display: "inline-block",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "20px",
                      fontWeight: "var(--font-weight-medium)",
                      lineHeight: "24px",
                    }}
                  >
                    X
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255 255 255 / 65%)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "22px",
                }}
              >
                Software company building web, mobile and AI products for ambitious teams worldwide.
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255 255 255 / 65%)",
                  display: "inline-block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--text-sm)",
                  lineHeight: "18px",
                }}
              >
                hello@logix.dev · +92 300 1234567
              </div>
            </div>

            {/* Link Columns */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
              }}
              className="flex-wrap gap-12 sm:gap-16 lg:gap-20"
            >
              {/* Col 1 */}
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "18px",
                  }}
                >
                  Company
                </div>
                <Link href="/about" className="text-white/65 hover:text-white transition-colors text-sm">
                  About us
                </Link>
                <Link href="/portfolio" className="text-white/65 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
                <Link href="/services" className="text-white/65 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
                <Link href="/contact" className="text-white/65 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </div>

              {/* Col 2 */}
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "18px",
                  }}
                >
                  Services
                </div>
                <Link href="/services" className="text-white/65 hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
                <Link href="/services" className="text-white/65 hover:text-white transition-colors text-sm">
                  Mobile Apps
                </Link>
                <Link href="/services" className="text-white/65 hover:text-white transition-colors text-sm">
                  UI/UX Design
                </Link>
                <Link href="/services" className="text-white/65 hover:text-white transition-colors text-sm">
                  AI &amp; Automation
                </Link>
              </div>

              {/* Col 3 */}
              <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "18px",
                  }}
                >
                  Office
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    color: "rgb(255 255 255 / 65%)",
                    display: "inline-block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--text-sm)",
                    lineHeight: "22px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Arfa Software Technology Park<br />Ferozepur Road, Lahore<br />Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Legal Bar */}
          <div
            style={{
              borderTopColor: "rgb(255 255 255 / 12%)",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "24px",
            }}
            className="flex-col sm:flex-row gap-4 sm:gap-0"
          >
            <div
              style={{
                boxSizing: "border-box",
                color: "rgb(255 255 255 / 50%)",
                display: "inline-block",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                lineHeight: "16px",
              }}
            >
              © 2026 Logix Software Company. All rights reserved.
            </div>
            <div style={{ boxSizing: "border-box", display: "flex", gap: "24px" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-[13px]">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-[13px]">
                Instagram
              </a>
              <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-[13px]">
                Clutch
              </a>
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-[13px]">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
