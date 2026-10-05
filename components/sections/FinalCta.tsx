import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

type FinalCtaProps = {
  headline?: string;
  text?: string;
  reassurance?: string;
};

export function FinalCta({
  headline = "Stop finding out in June what March cost you.",
  text = "A 20-minute call. We'll look at your current books and tell you straight whether we can help, and what it would cost.",
  reassurance = "Month to month. Flat fee from $650. No setup fee if your books are current.",
}: FinalCtaProps) {
  return (
    <section aria-labelledby="cta-heading" className="bg-ink text-paper">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 id="cta-heading" className="text-display max-w-[14ch]">
              {headline}
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="text-lead text-paper/75">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <Button href={site.cta.primary.href} size="lg" tone="dark" arrow>
                {site.cta.primary.label}
              </Button>
              <Button href={site.cta.secondary.href} size="lg" variant="secondary" tone="dark">
                {site.cta.secondary.label}
              </Button>
            </div>
            <p className="mt-6 text-small text-paper/55">{reassurance}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
