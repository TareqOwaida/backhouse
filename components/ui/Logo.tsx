import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type LogoProps = {
  className?: string;
  tone?: Tone;
};

/* Mark: a ledger page with three ruled lines. */
export function LogoMark({ className, tone = "light" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-6", className)}
      fill="none"
    >
      <rect x="1" y="1" width="22" height="22" rx="2" className="fill-current" />
      <path
        d="M6 7.5h12M6 12h8M6 16.5h12"
        className={tone === "light" ? "stroke-paper" : "stroke-ink"}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Logo({ className, tone = "light" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "light" ? "text-ink" : "text-paper",
        className,
      )}
    >
      <LogoMark tone={tone} />
      <span
        className="font-display text-[1.375rem] leading-none tracking-[-0.02em]"
        style={{ fontVariationSettings: '"opsz" 24, "SOFT" 30, "WONK" 0' }}
      >
        Backhouse
      </span>
    </span>
  );
}
