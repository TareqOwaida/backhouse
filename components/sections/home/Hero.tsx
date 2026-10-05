import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Statement } from "@/components/visuals/Statement";
import { integrations } from "@/lib/content/home";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-display max-w-[13ch]">
              Restaurant books, closed by the 10th of every month.
            </h1>
            <p className="mt-7 max-w-[34rem] text-lead text-ink-2">
              Backhouse is a finance team that works only with independent restaurants.
              Bookkeeping, payroll, sales tax and a monthly P&amp;L that shows your
              prime cost while you can still do something about it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.cta.primary.href} size="lg" arrow>
                {site.cta.primary.label}
              </Button>
              <Button href={site.cta.secondary.href} size="lg" variant="secondary">
                {site.cta.secondary.label}
              </Button>
            </div>
            <p className="mt-8 border-t border-line pt-5 text-small text-muted">
              Keeping the books for 140+ restaurants, cafés and bars in 22 states.
              Month to month, no hourly billing.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <Statement className="mx-auto max-w-[30rem] lg:ml-auto" />
          </div>
        </div>
      </Container>

      <div className="border-y border-line">
        <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 text-label text-muted">Works with</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-small text-ink-2">
            {integrations.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
