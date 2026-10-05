import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { BreadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { FlashReport } from "@/components/visuals/FlashReport";
import { PayrollDetail } from "@/components/visuals/PayrollDetail";
import { ComplianceCalendar } from "@/components/visuals/ComplianceCalendar";
import { CashForecast } from "@/components/visuals/CashForecast";
import { getService, services } from "@/lib/content/services";
import { caseStudies } from "@/lib/content/case-studies";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} for restaurants`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "bookkeeping":
      return <FlashReport />;
    case "payroll":
      return <PayrollDetail />;
    case "sales-tax":
      return (
        <div className="rounded-md bg-ink p-6 sm:p-8">
          <ComplianceCalendar />
        </div>
      );
    default:
      return <CashForecast />;
  }
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = caseStudies.find((c) => c.services.includes(service.shortName));

  return (
    <>
      <PageIntro label={service.name} title={service.headline} lead={service.summary}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" arrow>
            {site.cta.primary.label}
          </Button>
          <Button href="/pricing" variant="secondary">
            {site.cta.secondary.label}
          </Button>
        </div>
      </PageIntro>

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-lead text-ink-2">{service.description}</p>

            <h2 className="mt-14 text-h3">What&rsquo;s included</h2>
            <ul className="mt-6 rule-strong">
              {service.includes.map((item) => (
                <li key={item} className="border-b border-line py-3.5 text-body text-ink-2">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-h3">Who it&rsquo;s for</h2>
            <p className="mt-4 text-body text-ink-2">{service.forWhom}</p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-24">
              <ServiceVisual slug={service.slug} />
              <ul className="mt-10 grid grid-cols-3 gap-4">
                {service.outcomes.map((o) => (
                  <li key={o.label} className="border-t border-ink pt-3">
                    <p className="text-figure text-3xl sm:text-4xl">{o.figure}</p>
                    <p className="mt-2 text-small text-ink-2">{o.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {related && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-paper-2 py-16 sm:py-20 lg:py-24">
          <Container>
            <h2 id="related-heading" className="text-label font-sans text-muted">
              Where this made a difference
            </h2>
            <CaseStudyCard study={related} featured className="mt-8" />
          </Container>
        </section>
      )}

      <FaqSection
        items={service.faq}
        title={`Questions about ${service.name.toLowerCase()}`}
        id="service-faq"
        className="border-t border-line"
      />

      <FinalCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} for restaurants`,
          serviceType: service.name,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: "US",
          audience: { "@type": "BusinessAudience", name: "Independent restaurants" },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
