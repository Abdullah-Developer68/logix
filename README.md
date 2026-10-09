# Logix — Software Consultancy Website

A modern, responsive, and tokenized software consultancy website built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, engineered strictly according to the **Logix Design System v1.0**.

Repository: [https://github.com/Abdullah-Developer68/logix](https://github.com/Abdullah-Developer68/logix)

---

## 🎨 Design System & Foundations

The design tokens and foundational rules reside in [`designs/README.md`](designs/README.md) and [`designs/design-system.png`](designs/design-system.png):

- **Primary / Foreground (`#0B1F3A`)**: Deep navy for headings, navigation, dark inverted cards, and footer.
- **Brand / Ring (`#1FC8AA`)**: Vibrant cyan-teal for interactive brand fills, active indicators, and focus rings.
- **Brand-Strong (`#0E9983`)**: Dark teal for high-contrast uppercase eyebrows, stat highlights, and accent links.
- **Accent (`#E6F9F5`)**: Soft mint container backgrounds and icon backdrops.
- **Muted-Foreground (`#5B6B84`)**: Subtitles, body lead text, and secondary metadata.
- **Muted / Secondary (`#F4F6FA`)**: Alternating section backgrounds and secondary buttons.
- **Border / Input (`#E2E8F0`)**: Dividers, card borders, and input boundaries.
- **Base Radius (`0.625rem` / 10px)**: Cohesive radius across buttons, inputs, cards, and modal containers.
- **Typography Scale**: Geist Sans with responsive `h1` (64/68 desktop), `h2` (40/52), `h3` (20/28), `h4` (16/24), `lead` (16/28), `p` (14/24), and `.eyebrow` (12px, 500, +0.14em tracking).

---

## 🚀 Pages Included

1. **Homepage (`/`)**: Matched to `designs/homepage.png` featuring hero, client social proof, about summary, service grid, testimonials, and high-impact CTA.
2. **About (`/about`)**: Company story since 2016, 4 core values (Senior Talent Only, Skin in the Game, Radical Transparency, Architecture for Scale), 2016–2026 milestones, and leadership profiles with avatars.
3. **Services (`/services`)**: 6 core practice areas (Web Dev, Mobile Apps, UI/UX Design, Custom Software, Cloud & DevOps, AI Automation), 5-step delivery methodology, 3 engagement models, and service FAQs.
4. **Portfolio (`/portfolio`)**: Interactive category filtering (`PortfolioClient`), 6 detailed case studies (Northwind Logistics, Skyscape, Fieldly, PeachCloud, Kora Pay, Lumeris Health) with metrics and verified testimonials.
5. **Blog / Insights (`/blog`)**: Featured article banner, category pills, 6 technical engineering deep-dives, and newsletter subscription form.
6. **Contact (`/contact`)**: Interactive project inquiry quote form with service multi-select, budget pills, and project details textarea, plus 4 global office cards (Karachi, Lahore, London, Austin) and FAQ accordion.
7. **Careers (`/careers`)**: Engineering perks, remote-first culture, and 4 active senior engineering/design openings with application triggers.
8. **Privacy Policy (`/privacy`)**: Confidentiality and client data handling commitments.
9. **Terms of Service (`/terms`)**: 100% intellectual property ownership assignment, warranties, and master service agreements.

---

## 🛠️ Project Structure

```
├── designs/                  # Design system specifications & mockup images
│   ├── README.md             # Token definitions & typographic scale
│   ├── design-system.png     # Foundations, colors, components mockup
│   └── homepage.png          # Homepage visual reference
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/            # About page
│   │   ├── blog/             # Blog & Insights page
│   │   ├── careers/          # Careers page
│   │   ├── contact/          # Contact & Quote page
│   │   ├── portfolio/        # Portfolio & Case Studies page
│   │   ├── privacy/          # Privacy Policy page
│   │   ├── services/         # Services & Capabilities page
│   │   ├── terms/            # Terms of Service page
│   │   ├── globals.css       # Tailwind CSS v4 tokens & typography
│   │   ├── layout.tsx        # Root layout with Geist font
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── blog/             # Client blog filter & subscription
│   │   ├── contact/          # Client contact form & budget selector
│   │   ├── layout/           # Header (with mobile drawer) & Footer
│   │   ├── portfolio/        # Client case study filter tabs
│   │   ├── sections/         # Reusable homepage sections
│   │   └── ui/               # Button, Badge, Card, Input, Textarea, Avatar, Accordion, PageHero, SectionHeader
│   └── lib/
│       └── utils.ts          # Utility functions (cn class combiner)
```

---

## 💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/Abdullah-Developer68/logix.git
cd logix

# Install dependencies
npm install

# Run the development server
npm run dev

# Run type check
npx tsc --noEmit

# Run ESLint
npm run lint

# Build for production
npm run build
```
