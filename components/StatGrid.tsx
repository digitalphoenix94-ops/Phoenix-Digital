import type { Stat } from "@/content/types";

export function StatGrid({
  stats,
  className = "",
  accent = "ember",
}: {
  stats: Stat[];
  className?: string;
  accent?: "ember" | "gold" | "leaf";
}) {
  const color = accent === "gold" ? "text-gold" : accent === "leaf" ? "text-leaf" : "text-ember";
  const cols =
    stats.length >= 6
      ? "grid-cols-2 md:grid-cols-3"
      : stats.length === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : stats.length === 3
          ? "grid-cols-2 md:grid-cols-3"
          : "grid-cols-2";
  return (
    <dl className={`grid gap-px overflow-hidden rounded-sm border border-line bg-line ${cols} ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse justify-end bg-night p-4 sm:p-7">
          <dt className="mt-2 text-sm text-muted">{s.label}</dt>
          <dd className={`display break-words ${s.value.length > 6 ? "text-2xl sm:text-4xl" : s.value.length >= 5 ? "text-3xl sm:text-5xl" : "text-4xl sm:text-5xl"} ${color}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
