import { cn } from "@/lib/utils";

const events: Record<number, string> = {
  15: "Payroll withholding, IL",
  20: "Sales tax, IL and Chicago",
  25: "Liquor tax, Cook County",
  30: "Liquor license renewal",
};

/* September 2026 begins on a Tuesday. */
const leadingBlanks = 1;
const daysInMonth = 30;

export function ComplianceCalendar({ className }: { className?: string }) {
  const cells = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className={cn("text-paper", className)} aria-hidden="true">
      <div className="flex items-baseline justify-between border-b border-paper/30 pb-3">
        <p className="font-display text-lg leading-none tracking-tight">September 2026</p>
        <p className="font-mono text-xs text-paper/60">4 filings</p>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-1 font-mono text-[0.6875rem] text-paper/50">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={`${d}-${i}`} className="py-1 text-center">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          const hasEvent = day !== null && day in events;
          return (
            <div
              key={index}
              className={cn(
                "flex aspect-square items-center justify-center rounded-xs font-mono text-xs tabular",
                day === null && "invisible",
                hasEvent ? "bg-paper text-ink" : "text-paper/70",
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
      <ul className="mt-5 space-y-2 border-t border-paper/30 pt-4 text-small">
        {Object.entries(events).map(([day, label]) => (
          <li key={day} className="flex items-baseline gap-3">
            <span className="w-6 shrink-0 font-mono text-xs text-paper/60 tabular">{day}</span>
            <span className="text-paper/90">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
