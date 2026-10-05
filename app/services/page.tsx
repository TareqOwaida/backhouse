import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping with a monthly close by the 10th, payroll built for tipped staff, sales tax filed in every jurisdiction, and advisory from people who have run restaurant finances.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Four things we do for restaurants. Nothing else."
        lead="Every service here is built around how a restaurant actually runs: weekly inventory turns, daily labor decisions, tipped payroll, and sales tax rules that change with every delivery platform. Pick the ones you need. Most owners start with bookkeeping."
      />

      <Container className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
        <ol className="rule-strong">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="grid gap-6 border-b border-line py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
            >
              <div className="lg:col-span-1">
                <span className="text-label text-muted">0{index + 1}</span>
              </div>
              <div className="lg:col-span-5">
                <p className="text-label text-muted lg:hidden">{service.shortName}</p>
                <h2 className="mt-2 text-h2 lg:mt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors duration-200 hover:text-green"
                  >
                    {service.headline}
                  </Link>
                </h2>
                <p className="mt-4 text-body text-ink-2">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:underline"
                >
                  About {service.name.toLowerCase()}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-label text-muted">Included</p>
                <ul className="mt-3 grid gap-2 text-small text-ink-2">
                  {service.includes.slice(0, 5).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-line-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <h2 className="text-h3">Not sure which you need?</h2>
            <p className="mt-3 text-body text-ink-2">
              The plans on the pricing page bundle these in the combinations that fit most
              restaurants. Or book a call and we&rsquo;ll tell you what we&rsquo;d start with,
              given where your books are today.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/pricing" variant="secondary">
                See pricing
              </Button>
              <Button href="/contact" arrow>
                Book a 20-minute call
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <FinalCta />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </>
  );
}
