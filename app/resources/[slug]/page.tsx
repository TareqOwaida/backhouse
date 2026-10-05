import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { articles, formatDate, getArticle } from "@/lib/content/articles";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article>
        <Container width="narrow" className="pt-10 sm:pt-12 lg:pt-14">
          <Link
            href="/resources"
            className="group inline-flex items-center gap-2 text-small text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-200 ease-out-quart group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
            All resources
          </Link>

          <header className="mt-10 border-b border-ink pb-10">
            <p className="text-label text-muted">
              {article.category} · <time dateTime={article.date}>{formatDate(article.date)}</time>{" "}
              · {article.readingTime}
            </p>
            <h1 className="mt-5 text-h1">{article.title}</h1>
            <p className="mt-6 text-lead text-ink-2">{article.description}</p>
            <p className="mt-8 text-small text-ink-2">
              By <span className="font-medium text-ink">{article.author}</span>, {site.name}
            </p>
          </header>

          <ArticleBody blocks={article.body} className="py-12 sm:py-14" />
        </Container>
      </article>

      <section aria-labelledby="more-heading" className="border-t border-line bg-paper-2 py-16 sm:py-20">
        <Container>
          <h2 id="more-heading" className="text-h3">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {more.map((item) => (
              <li key={item.slug} className="border-t border-ink pt-5">
                <p className="text-label text-muted">
                  {item.category} · {item.readingTime}
                </p>
                <h3 className="mt-3 text-h4">
                  <Link
                    href={`/resources/${item.slug}`}
                    className="transition-colors duration-200 hover:text-green"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-small text-ink-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          datePublished: article.date,
          author: { "@type": "Person", name: article.author },
          publisher: { "@id": absoluteUrl("/#organization") },
          mainEntityOfPage: absoluteUrl(`/resources/${article.slug}`),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: article.title, href: `/resources/${article.slug}` },
        ]}
      />
    </>
  );
}
