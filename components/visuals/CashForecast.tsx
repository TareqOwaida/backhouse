import { cn } from "@/lib/utils";

const lines = [
  ["Opening cash", "184,200"],
  ["Sales receipts", "+1,296,400"],
  ["Food and beverage", "−389,900"],
  ["Payroll", "−402,700"],
  ["Rent, 3 locations", "−156,000"],
  ["Loan, equipment", "−41,600"],
  ["Everything else", "−218,300"],
];

/* A 13-week cash summary. Sample figures. */
export function CashForecast({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-md border border-line-strong/60 bg-[#fbf9f4] p-6 sm:p-8", className)}
      aria-hidden="true"
    >
      <p className="text-label text-muted">13-week cash forecast</p>
      <p className="mt-1.5 font-display text-lg leading-none tracking-tight">
        Cielo Taqueria, consolidated
      </p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {lines.map(([label, value]) => (
          <li key={label} className="flex justify-between gap-4 border-b border-line/80 pb-2">
            <span className="text-ink-2">{label}</span>
            <span className="font-mono tabular">{value}</span>
          </li>
        ))}
        <li className="flex justify-between gap-4 pt-1 font-medium">
          <span>Closing cash, week 13</span>
          <span className="font-mono text-green tabular">272,100</span>
        </li>
      </ul>
      <p className="mt-4 border-t border-ink pt-3 text-small text-ink-2">
        Lowest point: week 6, $96k. Comfortable for a second-location deposit in week 9.
      </p>
    </div>
  );
}
