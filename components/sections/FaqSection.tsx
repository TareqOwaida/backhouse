import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FaqSchema } from "@/components/seo/JsonLd";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  items: Faq[];
  title?: string;
  id?: string;
  className?: string;
  withSchema?: boolean;
};

export function FaqSection({
  items,
  title = "Questions owners ask before they switch",
  id = "faq",
  className,
  withSchema = true,
}: FaqSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("py-20 sm:py-24 lg:py-28", className)}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <h2 id={`${id}-heading`} className="text-h2 max-w-[14ch]">
              {title}
            </h2>
            <p className="mt-5 text-body text-ink-2">
              Something we haven&rsquo;t covered?{" "}
              <Link href="/contact" className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink">
                Ask us directly
              </Link>
              . A bookkeeper answers, not a bot.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={items} />
        </div>
      </Container>
      {withSchema && <FaqSchema items={items} />}
    </section>
  );
}
