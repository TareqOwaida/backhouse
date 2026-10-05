import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { articles, formatDate } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-language notes on restaurant finance: how to read a P&L, why prime cost matters weekly, the payroll mistakes we see most, and what a closed month should mean.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const [latest, ...rest] = articles;

  return (
    <>
      <PageIntro
        title="Notes on running a restaurant by the numbers."
        lead="Short, practical and written by the people who close the books. No newsletter sign-up required to read them."
      />

      <Container className="py-16 sm:py-20 lg:py-24">
        <article className="grid gap-6 border-b border-ink pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <div className="lg:col-span-3">
            <p className="text-label text-muted">
              {latest.category} · <time dateTime={latest.date}>{formatDate(latest.date)}</time>
            </p>
            <p className="mt-2 text-small text-muted">{latest.readingTime}</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-4">
            <h2 className="text-h1 max-w-[20ch]">
              <Link
                href={`/resources/${latest.slug}`}
                className="transition-colors duration-200 hover:text-green"
              >
                {latest.title}
              </Link>
            </h2>
            <p className="mt-5 max-w-[36rem] text-lead text-ink-2">{latest.description}</p>
            <Link
              href={`/resources/${latest.slug}`}
              className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:underline"
            >
              Read the article
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        </article>

        <ul>
          {rest.map((article) => (
            <li key={article.slug}>
              <article className="grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
                <div className="lg:col-span-3">
                  <p className="text-label text-muted">
                    {article.category} ·{" "}
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </p>
                  <p className="mt-2 text-small text-muted">{article.readingTime}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-4">
                  <h2 className="text-h3">
                    <Link
                      href={`/resources/${article.slug}`}
                      className="transition-colors duration-200 hover:text-green"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-[34rem] text-body text-ink-2">{article.description}</p>
                </div>
                <div className="hidden lg:col-span-1 lg:col-start-12 lg:flex lg:items-start lg:justify-end">
                  <Link
                    href={`/resources/${article.slug}`}
                    aria-label={`Read: ${article.title}`}
                    className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <FinalCta
        headline="Reading about prime cost is one thing. Seeing yours every Monday is another."
        text="Twenty minutes on the phone and we'll tell you how quickly we could have a flash report in your inbox."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />
    </>
  );
}
