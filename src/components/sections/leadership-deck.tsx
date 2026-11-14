import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  tag?: string;
};

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    // Stable, untransformed hover target; the tilted/lifted card is the inner
    // <article> (pointer-events-none) so its movement can't change :hover.
    <div className="group h-full w-[260px] sm:w-[300px]">
    <article className="pointer-events-none relative flex h-full w-full -rotate-2 sm:-rotate-3 flex-col overflow-hidden rounded-xl border border-border bg-card p-5 sm:p-6 shadow-md transition-[transform,box-shadow,border-color] duration-300 group-hover:z-10 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-2xl group-hover:border-brand-strong/40">
      {/* Brand accent strip + soft glow give the card visual weight without a photo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-strong/70 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-[radial-gradient(circle,rgba(34,211,176,0.16)_0%,transparent_70%)] transition-opacity duration-300 group-hover:opacity-100 opacity-70"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="inline-flex size-12 sm:size-14 shrink-0 select-none items-center justify-center rounded-xl border border-brand-strong/20 bg-accent text-base sm:text-lg font-bold tracking-wide text-brand-strong"
        >
          {initialsOf(member.name)}
        </span>
        <Badge variant="brand" dot={false} className="mt-1 shrink-0">
          {member.tag ?? "Core"}
        </Badge>
      </div>

      <div className="relative mt-4 sm:mt-5 flex flex-1 flex-col">
        <h3 className="text-base sm:text-lg font-bold leading-snug text-primary">{member.name}</h3>
        <p className="mt-0.5 text-xs font-semibold text-brand-strong">{member.role}</p>
        <p className="mt-3 flex-1 text-xs leading-5 text-muted-foreground">{member.bio}</p>
      </div>

      <div className="relative mt-5 flex items-center gap-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
        <BadgeCheck className="size-3.5 shrink-0 text-brand-strong" aria-hidden="true" />
        <span>Verified Logix Lead</span>
      </div>
    </article>
    </div>
  );
}

/**
 * A deck of tilted cards that continuously slides from right to left.
 * The list is rendered twice so the loop is seamless; the second copy is
 * hidden from assistive tech. Pauses on hover and respects reduced motion.
 */
export function LeadershipDeck({ members }: { members: TeamMember[] }) {
  return (
    <div
      className="relative -mx-4 overflow-hidden py-10 sm:-mx-6 lg:-mx-8"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="deck-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 gap-5 pr-5"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {members.map((m) => (
              <MemberCard key={`${copy}-${m.name}`} member={m} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
