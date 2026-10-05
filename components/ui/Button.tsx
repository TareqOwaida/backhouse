import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "link";
type Size = "md" | "lg";
type Tone = "light" | "dark";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out-quart select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-ink text-paper hover:bg-green",
    secondary:
      "border border-line-strong text-ink hover:border-ink hover:bg-ink/[0.04]",
    link: "h-auto px-0 text-ink underline-offset-4 hover:underline",
  },
  dark: {
    primary: "bg-paper text-ink hover:bg-paper-2",
    secondary:
      "border border-paper/30 text-paper hover:border-paper hover:bg-paper/[0.06]",
    link: "h-auto px-0 text-paper underline-offset-4 hover:underline",
  },
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 shrink-0 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
      strokeWidth={1.75}
    />
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    tone = "light",
    arrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    variant !== "link" && sizes[size],
    variants[tone][variant],
    className,
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
