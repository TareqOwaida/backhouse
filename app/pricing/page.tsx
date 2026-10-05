import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { pricingExtras, pricingFaqs, pricingTiers } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flat monthly pricing for restaurant bookkeeping, payroll and sales tax. From $650 a month for a single location. No hourly billing, no contract.",
  alternates: { canonical: "/pricing" },
};

const everyPlan = [
  "Books closed by the 10th, every month",
  "A named bookkeeper who has worked in a restaurant",
  "QuickBooks Online file you own",
  "Replies within one business day",
  "Month to month, 30 days' notice",
  "No hourly billing, ever",
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Flat monthly pricing. Quoted in writing before we start."
        lead="Three plans, priced on locations and revenue. Every plan includes a monthly close by the 10th and a bookkeeper you can email as often as you like without watching a clock."
      />

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.slug}
              className={cn(
                "relative flex flex-col bg-paper p-7 sm:p-9",
                tier.featured && "bg-[#fbf9f4]",
              )}
            >
              {tier.featured && (
                <span className="absolute inset-x-0 top-0 h-1 bg-green" aria-hidden="true" />
              )}
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-h3">{tier.name}</h2>
                {tier.featured && <span className="text-label text-green">Most common</span>}
              </div>
              <p className="mt-2 text-small text-muted">{tier.fit}</p>
              <p className="mt-7 flex items-baseline gap-2">
                {tier.priceNote && (
                  <span className="text-small text-muted">{tier.priceNote}</span>
                )}
                <span className="text-figure text-[3rem] sm:text-[3.5rem]">
                  {currency.format(tier.price)}
                </span>
                <span className="text-small text-muted">/ month</span>
              </p>
              <p className="mt-6 text-body text-ink-2">{tier.description}</p>
              <ul className="mt-8 space-y-3 border-t border-line pt-7 text-small text-ink-2">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-green"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <Button
                  href={`/contact?plan=${tier.slug}`}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                  arrow={tier.featured}
                >
                  {tier.slug === "group" ? "Get a written quote" : "Book a 20-minute call"}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-h2 max-w-[12ch]">Every plan includes</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {everyPlan.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-body text-ink-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-12 border-t border-ink pt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-h2 max-w-[12ch]">Add-ons and one-offs</h2>
            <p className="mt-4 text-body text-ink-2">
              Quoted individually and agreed in writing before any work starts.
            </p>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {pricingExtras.map((extra) => (
              <div
                key={extra.name}
                className="grid gap-2 border-b border-line py-6 first:border-t first:border-line sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <dt className="text-h4">{extra.name}</dt>
                  <dd className="mt-2 max-w-[32rem] text-body text-ink-2">{extra.text}</dd>
                </div>
                <dd className="font-mono text-sm text-ink tabular sm:pt-1 sm:text-right">
                  {extra.price}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <FaqSection items={pricingFaqs} title="Pricing questions" className="border-t border-line bg-paper-2" />

      <FinalCta
        headline="Not sure which plan? Neither are most people on the first call."
        text="Tell us your locations, roughly what you do in sales, and where the books stand. We'll recommend a plan and put the price in writing the same day."
        reassurance="No setup fee if your books are current. Catch-up quoted before we start."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
    </>
  );
}
