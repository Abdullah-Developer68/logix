const clients = ["northwind", "Skyscape", "Fieldly", "peachcloud", "Kora Pay", "Lumeris"];

export function Clients() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="container-x py-10 text-center">
        <p className="text-xs text-muted-foreground">Trusted by 120+ teams, from startups to enterprise</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span key={c} className="text-lg font-semibold tracking-tight text-muted-foreground">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
