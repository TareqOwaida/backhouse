import { cn } from "@/lib/utils";

type Row = {
  label: string;
  amount: string;
  pct: string;
  emphasis?: "total" | "prime";
  indent?: boolean;
};

const rows: Row[] = [
  { label: "Sales", amount: "212,480", pct: "100.0" },
  { label: "Food", amount: "45,190", pct: "21.3", indent: true },
  { label: "Beverage", amount: "17,930", pct: "8.4", indent: true },
  { label: "Cost of goods", amount: "63,120", pct: "29.7", emphasis: "total" },
  { label: "Kitchen", amount: "31,220", pct: "14.7", indent: true },
  { label: "Front of house", amount: "24,870", pct: "11.7", indent: true },
  { label: "Management", amount: "8,500", pct: "4.0", indent: true },
  { label: "Labor", amount: "64,590", pct: "30.4", emphasis: "total" },
  { label: "Prime cost", amount: "127,710", pct: "60.1", emphasis: "prime" },
  { label: "Occupancy", amount: "18,900", pct: "8.9" },
  { label: "Operating", amount: "21,340", pct: "10.0" },
  { label: "Net operating income", amount: "44,530", pct: "21.0", emphasis: "total" },
];

/* A rendered monthly statement. Static sample data; the visual stands in for
   the deliverable a client receives on the 10th. */
export function Statement({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {/* Previous month, peeking out behind */}
      <div className="absolute inset-0 translate-x-3 -translate-y-3 rounded-md border border-line bg-[#f0ebe0]" />
      <div className="relative rounded-md border border-line-strong/60 bg-[#fbf9f4] p-5 shadow-[0_24px_48px_-24px_rgba(22,20,15,0.25)] sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-ink pb-4">
          <div>
            <p className="text-label text-muted">Statement of operations</p>
            <p className="mt-1.5 font-display text-xl leading-none tracking-tight">
              Marrow &amp; Rye
            </p>
          </div>
          <div className="text-right">
            <p className="text-label text-muted">Period</p>
            <p className="mt-1.5 font-mono text-sm tabular">Aug 2026</p>
          </div>
        </div>

        <table className="mt-3 w-full text-[0.8125rem] sm:text-sm">
          <thead>
            <tr className="text-label text-muted">
              <th scope="col" className="py-2 text-left font-normal">
                Line
              </th>
              <th scope="col" className="py-2 text-right font-normal">
                USD
              </th>
              <th scope="col" className="w-20 py-2 pl-4 text-right font-normal">
                % Sales
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className={cn(
                  "border-t border-line/80",
                  row.emphasis === "total" && "font-medium",
                  row.emphasis === "prime" && "bg-green-tint/60 font-medium text-green",
                )}
              >
                <td className={cn("py-1.5", row.indent && "pl-4 text-ink-2", row.emphasis === "prime" && "pl-2")}>
                  {row.label}
                </td>
                <td className={cn("py-1.5 text-right font-mono tabular", row.indent && "text-ink-2")}>
                  {row.amount}
                </td>
                <td className={cn("py-1.5 pr-1 text-right font-mono tabular", row.indent && "text-ink-2", row.emphasis === "prime" && "pr-2")}>
                  {row.pct}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-5 flex items-end justify-between border-t border-ink pt-4">
          <p className="text-label text-muted">
            Closed 9 Sep
            <br />
            Prepared by D. Okafor
          </p>
          <span className="inline-block -rotate-6 rounded-xs border-2 border-green px-2.5 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.12em] text-green uppercase">
            Closed
          </span>
        </div>
      </div>
    </div>
  );
}
