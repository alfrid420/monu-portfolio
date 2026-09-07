import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  accent = "lime",
  className,
}: {
  children: React.ReactNode;
  accent?: "lime" | "cyan" | "magenta";
  className?: string;
}) {
  const accentColor = {
    lime: "text-lime",
    cyan: "text-cyan",
    magenta: "text-magenta",
  }[accent];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("font-mono text-xs", accentColor)}>✦</span>
      <span className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
        {children}
      </span>
      <span className="h-px flex-1 max-w-16 bg-base-border" />
    </div>
  );
}
