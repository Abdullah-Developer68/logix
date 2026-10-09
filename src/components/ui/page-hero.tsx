"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  badgeText?: string;
  badgeDot?: boolean;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  badgeText,
  badgeDot = true,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-background py-16 md:py-24 overflow-hidden", className)}>
      <div className="container-x max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          <span className="eyebrow">{eyebrow}</span>
          {badgeText && (
            <Badge variant="brand" dot={badgeDot}>
              {badgeText}
            </Badge>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-primary"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lead mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
