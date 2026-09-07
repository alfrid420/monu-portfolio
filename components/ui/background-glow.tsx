export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ambient color glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full bg-magenta/10 blur-[110px]" />
      <div className="absolute bottom-0 -left-32 h-[340px] w-[340px] rounded-full bg-cyan/10 blur-[110px]" />

      {/* thin orbiting rings */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden sm:block">
        <div className="relative h-64 w-64 animate-spin-slow rounded-full border border-base-border/80" />
        <div className="absolute inset-8 animate-spin-slower rounded-full border border-dashed border-base-border/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-lime animate-pulse-soft" />
        </div>
      </div>

      {/* faint grid */}
      <div
        className="absolute inset-0 grid-fade-mask opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f5f7 1px, transparent 1px), linear-gradient(90deg, #f5f5f7 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}

export function SectionGlow({
  accent = "lime",
  side = "left",
}: {
  accent?: "lime" | "cyan" | "magenta";
  side?: "left" | "right";
}) {
  const color = {
    lime: "bg-lime/10",
    cyan: "bg-cyan/10",
    magenta: "bg-magenta/10",
  }[accent];

  return (
    <div
      className={`pointer-events-none absolute top-0 ${
        side === "left" ? "-left-40" : "-right-40"
      } h-[360px] w-[360px] rounded-full ${color} blur-[120px]`}
    />
  );
}
