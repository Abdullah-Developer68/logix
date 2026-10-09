import type { ReactNode } from "react";
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
    <section className={cn("border-b border-border bg-background py-16 md:py-24", className)}>
      <div className="container-x max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="eyebrow">{eyebrow}</span>
          {badgeText && (
            <Badge variant="brand" dot={badgeDot}>
              {badgeText}
            </Badge>
          )}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-primary">
          {title}
        </h1>
        <p className="lead mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

