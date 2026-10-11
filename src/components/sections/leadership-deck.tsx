import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  tag?: string;
};

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full w-[260px] -rotate-3 flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-md transition-all duration-300 hover:z-10 hover:-translate-y-3 hover:rotate-0 hover:shadow-2xl sm:w-[290px]">
      <div>
        <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg border border-border bg-muted sm:h-48">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="290px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-bold text-primary">{member.name}</h3>
        <p className="text-xs font-semibold text-brand-strong">{member.role}</p>
        <p className="mt-3 text-xs leading-5 text-muted-foreground">{member.bio}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
        <span>Verified Logix Lead</span>
        <Badge variant="brand" dot={false}>
          {member.tag ?? "Core"}
        </Badge>
      </div>
    </article>
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

