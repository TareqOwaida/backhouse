import { cn } from "@/lib/utils";

const metrics = [
  { label: "Sales", value: "$48,920", vs: "+6.2%", good: true },
  { label: "Purchases", value: "29.1%", vs: "−0.8 pts", good: true },
  { label: "Labor", value: "31.6%", vs: "+1.9 pts", good: false },
  { label: "Prime cost", value: "60.7%", vs: "+1.1 pts", good: false },
];

const days = [
  { day: "Mon", sales: 4210, labor: 38 },
  { day: "Tue", sales: 4680, labor: 34 },
  { day: "Wed", sales: 5320, labor: 31 },
  { day: "Thu", sales: 6910, labor: 29 },
  { day: "Fri", sales: 10240, labor: 27 },
  { day: "Sat", sales: 11380, labor: 26 },
  { day: "Sun", sales: 6180, labor: 33 },
];

const maxSales = Math.max(...days.map((d) => d.sales));

/* The one-page Monday flash. Sample data. */
export function FlashReport({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-line-strong/60 bg-[#fbf9f4] p-5 sm:p-7",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-1.5 border-b border-ink pb-3 xs:flex-row xs:items-baseline xs:justify-between xs:gap-4">
        <p className="font-display text-lg leading-none tracking-tight">Weekly flash</p>
        <p className="font-mono text-xs text-muted tabular">Week 36 · 31 Aug to 6 Sep</p>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label}>
            <dt className="text-label text-muted">{m.label}</dt>
            <dd className="mt-1.5 text-figure text-2xl sm:text-[1.75rem]">{m.value}</dd>
            <dd
              className={cn(
                "mt-1 font-mono text-xs tabular",
                m.good ? "text-green" : "text-error",
              )}
            >
              {m.vs} vs avg
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 border-t border-line pt-4">
        <div className="flex items-baseline justify-between">
          <p className="text-label text-muted">Sales by day</p>
          <p className="text-label text-muted">Labor %</p>
        </div>
        <div className="mt-3 grid grid-cols-7 items-end gap-2" style={{ height: "6.5rem" }}>
          {days.map((d) => (
            <div key={d.day} className="flex h-full flex-col justify-end">
              <div
                className={cn("w-full rounded-xs", d.labor > 32 ? "bg-line-strong" : "bg-green")}
                style={{ height: `${(d.sales / maxSales) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2 font-mono text-[0.6875rem] text-muted tabular">
          {days.map((d) => (
            <div key={d.day} className="flex flex-col">
              <span>{d.day}</span>
              <span className={d.labor > 32 ? "text-error" : ""}>{d.labor}%</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 border-t border-line pt-4 text-small text-ink-2">
        <span className="font-medium text-ink">Note from Marcus:</span> Labor ran high Monday
        and Sunday on a slow week. Worth looking at the Sunday close crew before next
        schedule goes out.
      </p>
    </div>
  );
}
