import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FlashReport } from "@/components/visuals/FlashReport";
import { PayrollDetail } from "@/components/visuals/PayrollDetail";
import { ComplianceCalendar } from "@/components/visuals/ComplianceCalendar";
import { services } from "@/lib/content/services";

const [bookkeeping, payroll, salesTax, advisory] = services;

const advisoryQuestions = [
  "Can we afford the second location, or do we just want it?",
  "What happens to margin if the $16 sandwich becomes $18?",
  "How much cash do we need to survive February?",
  "Is this lease renewal a good deal or a familiar one?",
];

function ServiceLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink underline-offset-4 hover:underline"
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
        strokeWidth={1.75}
      />
    </Link>
  );
}

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 border-b border-ink pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="services-heading" className="text-h1 max-w-[16ch]">
            Four things we do. Nothing else.
          </h2>
          <Button href="/services" variant="link" arrow className="mb-1 shrink-0">
            All services
          </Button>
        </div>

        {/* 1. Bookkeeping: visual left, copy right */}
        <div className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <FlashReport />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="text-label text-muted">{bookkeeping.shortName}</p>
            <h3 className="mt-3 text-h2">{bookkeeping.headline}</h3>
            <p className="mt-5 text-body text-ink-2">{bookkeeping.summary}</p>
            <p className="mt-4 text-body text-ink-2">
              The flash report lands every Monday. The full close lands by the 10th, with
              a note from your bookkeeper on what moved and why.
            </p>
            <ServiceLink href={`/services/${bookkeeping.slug}`}>
              About bookkeeping and the monthly close
            </ServiceLink>
          </div>
        </div>

        {/* 2. Payroll: copy left, detail right */}
        <div className="grid items-center gap-10 border-t border-line py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="text-label text-muted">{payroll.shortName}</p>
            <h3 className="mt-3 text-h2">{payroll.headline}</h3>
            <p className="mt-5 text-body text-ink-2">{payroll.summary}</p>
            <ServiceLink href={`/services/${payroll.slug}`}>
              About payroll and tips
            </ServiceLink>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <PayrollDetail />
          </div>
        </div>
      </Container>

      {/* 3. Sales tax: full-width dark band */}
      <div className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-6">
            <p className="text-label text-paper/60">{salesTax.shortName}</p>
            <h3 className="mt-3 text-h2 max-w-[18ch]">{salesTax.headline}</h3>
            <p className="mt-6 max-w-[34rem] text-lead text-paper/75">{salesTax.summary}</p>
            <ul className="mt-10 grid gap-x-8 gap-y-3 text-small text-paper/80 sm:grid-cols-2">
              {salesTax.includes.slice(0, 6).map((item) => (
                <li key={item} className="border-t border-paper/20 pt-3">
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href={`/services/${salesTax.slug}`}
              variant="link"
              tone="dark"
              arrow
              className="mt-10"
            >
              About sales tax and compliance
            </Button>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ComplianceCalendar />
          </div>
        </Container>
      </div>

      {/* 4. Advisory: compact two-column */}
      <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-label text-muted">{advisory.shortName}</p>
          <h3 className="mt-3 text-h2">{advisory.headline}</h3>
          <p className="mt-5 text-body text-ink-2">{advisory.summary}</p>
          <ServiceLink href={`/services/${advisory.slug}`}>About advisory</ServiceLink>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-label text-muted">Questions we answer in numbers</p>
          <ul className="mt-4 rule-strong">
            {advisoryQuestions.map((question) => (
              <li
                key={question}
                className="border-b border-line py-4 font-display text-xl leading-snug tracking-tight text-ink italic sm:text-[1.375rem]"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
