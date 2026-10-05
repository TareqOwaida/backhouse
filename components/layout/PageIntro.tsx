import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  label?: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
  size?: "default" | "large";
};

export function PageIntro({
  label,
  title,
  lead,
  aside,
  children,
  className,
  size = "default",
}: PageIntroProps) {
  return (
    <header className={cn("border-b border-line", className)}>
      <Container className="pt-14 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            {label && <p className="text-label text-muted">{label}</p>}
            <h1
              className={cn(
                size === "large" ? "text-display max-w-[14ch]" : "text-h1 max-w-[18ch]",
                label && "mt-4",
              )}
            >
              {title}
            </h1>
            {lead && <p className="mt-6 max-w-[36rem] text-lead text-ink-2">{lead}</p>}
            {children}
          </div>
          {aside && <div className="lg:col-span-4 lg:col-start-9 lg:self-end">{aside}</div>}
        </div>
      </Container>
    </header>
  );
}
