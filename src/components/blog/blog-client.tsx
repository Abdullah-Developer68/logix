"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Article {
  slug: string;
  category: "all" | "architecture" | "frontend" | "mobile" | "cloud" | "ai";
  categoryLabel: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  image?: string;
  author: {
    name: string;
    role: string;
    initials: string;
    image?: string;
  };
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: "enterprise-nextjs-app-router-migration",
    category: "frontend",
    categoryLabel: "Frontend Architecture",
    title: "Migrating Enterprise Microservices to Next.js App Router: Lessons from 14 Weeks",
    excerpt:
      "How we converted a fragmented 12-app logistics portal into a unified Next.js App Router architecture with Server Components, streaming SSR, and 60% faster LCP.",
    readTime: "8 min read",
    publishedAt: "Oct 2026",
    image: "/images/blog/featured-tech.jpg",
    author: {
      name: "Ayesha Tariq",
      role: "VP of Product Engineering",
      initials: "AT",
      image: "/images/team/ayesha.jpg",
    },
    featured: true,
  },
  {
    slug: "zero-downtime-data-migrations-aws",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    title: "Zero-Downtime Database Migrations on AWS: Blue-Green Patterns for Financial Systems",
    excerpt:
      "A deep dive into dual-writing, backfilling, and cutover strategies when handling millions of transactions without interrupting active checkout sessions.",
    readTime: "11 min read",
    publishedAt: "Sep 2026",
    image: "/images/portfolio/korapay.jpg",
    author: {
      name: "David Chen",
      role: "Head of Cloud & Infrastructure",
      initials: "DC",
      image: "/images/team/david.jpg",
    },
  },
  {
    slug: "offline-first-react-native-sqlite",
    category: "mobile",
    categoryLabel: "Mobile Engineering",
    title: "Offline-First Mobile Architecture with React Native & SQLite for Industrial Field Teams",
    excerpt:
      "Architecting local transactional queues, conflict resolution policies, and background retry loops for technicians working in remote cellular dead-zones.",
    readTime: "9 min read",
    publishedAt: "Aug 2026",
    image: "/images/portfolio/fieldly.jpg",
    author: {
      name: "Zain Malik",
      role: "Managing Director",
      initials: "ZM",
      image: "/images/team/zain.jpg",
    },
  },
  {
    slug: "tokenized-design-systems-figma-tailwind",
    category: "architecture",
    categoryLabel: "Design Systems",
    title: "Tokenized Design Systems: Bridging Figma Variables and Tailwind CSS v4 at Scale",
    excerpt:
      "Eliminating design debt by enforcing a single source of truth for semantic color tokens, typography scales, and component variants from design to deployment.",
    readTime: "7 min read",
    publishedAt: "Jul 2026",
    image: "/images/about/team-office.jpg",
    author: {
      name: "Sarah Jenkins",
      role: "Director of UX & Design Systems",
      initials: "SJ",
      image: "/images/team/sarah.jpg",
    },
  },
  {
    slug: "practical-rag-without-hallucinations",
    category: "ai",
    categoryLabel: "AI & Automation",
    title: "Practical RAG Workflows: Eliminating Hallucinations in High-Stakes Enterprise Tools",
    excerpt:
      "Why standard vector similarity search fails in production, and how hybrid dense-sparse retrieval plus cross-encoder reranking yields reliable answers.",
    readTime: "12 min read",
    publishedAt: "Jun 2026",
    image: "/images/portfolio/skyscape.jpg",
    author: {
      name: "Ayesha Tariq",
      role: "VP of Product Engineering",
      initials: "AT",
      image: "/images/team/ayesha.jpg",
    },
  },
  {
    slug: "fixed-scope-sprints-engineering-integrity",
    category: "architecture",
    categoryLabel: "Engineering Culture",
    title: "Eliminating Waterfall Fluff: Why Senior-Only Pods Outperform 20-Person Agency Teams",
    excerpt:
      "A breakdown of how small, senior-only engineering squads maintain shipping velocity, eradicate handoff miscommunications, and protect architectural integrity.",
    readTime: "6 min read",
    publishedAt: "May 2026",
    image: "/images/portfolio/northwind.jpg",
    author: {
      name: "Zain Malik",
      role: "Managing Director",
      initials: "ZM",
      image: "/images/team/zain.jpg",
    },
  },
];

const categories = [
  { id: "all", label: "All Insights" },
  { id: "frontend", label: "Frontend" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI & Data" },
  { id: "architecture", label: "Architecture" },
] as const;

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = articles.find((a) => a.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div>
      {/* Featured Article Banner with Visual Image */}
      {featured && activeCategory === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card inverted className="p-8 md:p-10 overflow-hidden relative shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="brand" dot={false} className="bg-brand text-primary font-semibold">
                    Featured Insight
                  </Badge>
                  <span className="text-xs text-white/60">{featured.publishedAt}</span>
                  <span className="text-xs text-white/40">·</span>
                  <span className="text-xs text-white/60">{featured.readTime}</span>
                </div>
                <h3 className="mt-5 text-2xl sm:text-3xl font-bold leading-tight text-white">
                  {featured.title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm leading-6 text-white/70">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <Avatar
                      initials={featured.author.initials}
                      src={featured.author.image}
                      className="size-10 ring-2 ring-brand/50"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-white">{featured.author.name}</div>
                      <div className="text-white/60">{featured.author.role}</div>
                    </div>
                  </div>
                  <Link
                    href={`#`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                  >
                    Read full breakdown →
                  </Link>
                </div>
              </div>

              {/* Featured Image Thumbnail */}
              <div className="relative h-60 lg:h-72 w-full overflow-hidden rounded-xl border border-white/15 bg-primary/50 shadow-inner">
                <Image
                  src={featured.image || "/images/blog/featured-tech.jpg"}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm scale-105"
                  : "bg-muted text-muted-foreground hover:bg-border/60 hover:text-foreground",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Articles Grid with AnimatePresence */}
      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((art) => (
            <motion.div
              key={art.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="flex flex-col justify-between p-6 h-full transition-all hover:border-brand-strong/40 shadow-sm hover:shadow-lg">
                <div>
                  {art.image && (
                    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-lg border border-border/60 bg-muted">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Badge variant="brand" dot={false}>
                      {art.categoryLabel}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{art.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-primary">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Avatar
                        initials={art.author.initials}
                        src={art.author.image}
                        className="size-7 text-[11px]"
                      />
                      <div className="text-[11px]">
                        <span className="font-semibold text-foreground">{art.author.name}</span>
                        <span className="block text-muted-foreground">{art.publishedAt}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-strong hover:underline cursor-pointer">
                      Read →
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Newsletter Card with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-xl border border-border bg-muted p-8 md:p-10 shadow-sm"
      >
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="brand" dot className="mb-4">
            Logix Dispatch
          </Badge>
          <h3 className="text-2xl font-bold text-primary">
            Engineering lessons delivered once every two weeks.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            No marketing newsletters or promotional fluff. Just architectural blueprints, performance insights, and production stories from our leads.
          </p>

          {subscribed ? (
            <div className="mt-6 rounded-lg bg-accent p-4 text-sm font-semibold text-brand-strong border border-brand-strong/20">
              ✓ You are subscribed to Logix Dispatch! We will only email high-value engineering deep-dives.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
              />
              <Button type="submit" variant="default" className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-3 text-[11px] text-muted-foreground">
            Zero spam. Unsubscribe with 1 click at any time.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
