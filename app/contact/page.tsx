import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { pricingTiers } from "@/lib/content/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a 20-minute call",
  description:
    "Tell us about your restaurant and where the books stand. A bookkeeper, not a salesperson, replies within one business day with times for a call.",
  alternates: { canonical: "/contact" },
};

const onTheCall = [
  "Where your books stand today and what catch-up would cost, if any",
  "Which POS, payroll and scheduling tools you use, and how we'd connect",
  "What your first month with us would look like, week by week",
  "A plan recommendation and a price, in writing, the same day",
];

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { plan } = await searchParams;
  const tier = pricingTiers.find((t) => t.slug === plan);

  return (
    <>
      <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h1 className="text-h1">
              Book a <span className="whitespace-nowrap">20-minute</span> call.
            </h1>
            <p className="mt-6 text-lead text-ink-2">
              Tell us a little about the restaurant. A bookkeeper replies within{" "}
              {site.responseTime} with a couple of times to talk.
            </p>
            {tier && (
              <p className="mt-6 rounded-sm border border-green/30 bg-green-tint/60 px-4 py-3 text-small text-green">
                You&rsquo;re asking about the <span className="font-medium">{tier.name}</span>{" "}
                plan. We&rsquo;ll confirm it fits before quoting.
              </p>
            )}
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2">
            <ContactForm plan={tier?.slug} />
          </div>

          <div className="lg:col-span-4 lg:col-start-1">
            <div className="border-t border-ink pt-6">
              <h2 className="text-label font-sans text-muted">On the call</h2>
              <ul className="mt-4 space-y-3 text-small text-ink-2">
                {onTheCall.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-line-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <h2 className="text-label font-sans text-muted">Prefer to reach out directly</h2>
              <address className="mt-4 grid gap-1.5 text-small not-italic text-ink-2">
                <a href={`mailto:${site.email}`} className="w-fit text-ink underline-offset-4 hover:underline">
                  {site.email}
                </a>
                <a href={site.phoneHref} className="w-fit text-ink tabular underline-offset-4 hover:underline">
                  {site.phone}
                </a>
                <span className="mt-2">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
                <span className="text-muted">{site.hours}</span>
              </address>
            </div>
          </div>
        </div>
      </Container>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
