import { cn } from "@/lib/utils";

const lines = [
  { label: "Server · 28.5 hrs × $9.48 tipped rate", amount: "270.18" },
  { label: "Bartender · 12.0 hrs × $9.48 tipped rate", amount: "113.76" },
  { label: "Prep cook · 6.0 hrs × $19.50 kitchen rate", amount: "117.00" },
  { label: "Declared tips (cash + card)", amount: "1,284.30" },
];

/* One employee, one pay period, three roles. Sample figures. */
export function PayrollDetail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-line-strong/60 bg-[#fbf9f4] p-5 sm:p-7",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
        <div>
          <p className="text-label text-muted">Pay stub detail</p>
          <p className="mt-1.5 font-display text-lg leading-none tracking-tight">J. Alvarez</p>
        </div>
        <p className="font-mono text-xs text-muted tabular">17 to 30 Aug · Chicago, IL</p>
      </div>

      <ul className="mt-2 text-sm">
        {lines.map((line) => (
          <li
            key={line.label}
            className="flex items-baseline justify-between gap-4 border-b border-line/80 py-2.5"
          >
            <span className="text-ink-2">{line.label}</span>
            <span className="font-mono tabular">{line.amount}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-sm bg-green-tint/70 px-4 py-3.5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-small font-medium text-green">Tip credit check</p>
          <p className="font-mono text-xs text-green tabular">40.5 tipped hrs</p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-3 font-mono text-xs tabular">
          <div>
            <p className="text-muted">Chicago min.</p>
            <p className="mt-0.5 text-ink">$16.60 / hr</p>
          </div>
          <div>
            <p className="text-muted">Tipped + tips</p>
            <p className="mt-0.5 text-ink">$41.19 / hr</p>
          </div>
          <div>
            <p className="text-muted">Top-up owed</p>
            <p className="mt-0.5 text-green">$0.00</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between border-t border-ink pt-3">
        <p className="text-small font-medium">Gross pay</p>
        <p className="font-mono text-base font-medium tabular">$1,785.24</p>
      </div>
    </div>
  );
}
