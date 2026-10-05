import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { caseStudies, getCaseStudy } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.restaurant}: ${study.headline}`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      images: [{ url: study.image.src, width: study.image.width, height: study.image.height, alt: study.image.alt }],
    },
  };
}

function Section({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
      <h2 className="text-label font-sans text-muted lg:col-span-3">{title}</h2>
      <div className="space-y-5 text-body text-ink-2 lg:col-span-8 lg:col-start-4">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="text-[1.0625rem] leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      <article>
        <header className="border-b border-line">
          <Container className="pt-10 pb-14 sm:pt-12 lg:pt-14 lg:pb-16">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-small text-ink-2 transition-colors hover:text-ink"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform duration-200 ease-out-quart group-hover:-translate-x-0.5"
                strokeWidth={1.75}
              />
              All case studies
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <p className="text-label text-muted">
                  {study.restaurant} · {study.type} · {study.location}
                </p>
                <h1 className="mt-4 text-h1 max-w-[20ch]">{study.headline}</h1>
                <p className="mt-6 max-w-[38rem] text-lead text-ink-2">{study.summary}</p>
              </div>
              <dl className="grid grid-cols-2 gap-6 text-small lg:col-span-3 lg:col-start-10 lg:grid-cols-1 lg:self-end">
                <div className="border-t border-ink pt-3">
                  <dt className="text-label text-muted">Result</dt>
                  <dd className="mt-2 text-figure text-3xl">{study.metric.figure}</dd>
                  <dd className="mt-1 text-ink-2">{study.metric.label}</dd>
                </div>
                <div className="border-t border-line pt-3">
                  <dt className="text-label text-muted">Timeframe</dt>
                  <dd className="mt-2 text-ink">{study.timeframe}</dd>
                </div>
                <div className="border-t border-line pt-3">
                  <dt className="text-label text-muted">Locations</dt>
                  <dd className="mt-2 text-ink tabular">{study.locations}</dd>
                </div>
                <div className="border-t border-line pt-3">
                  <dt className="text-label text-muted">Services</dt>
                  <dd className="mt-2 text-ink">{study.services.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </Container>
        </header>

        <Container className="pt-12 sm:pt-16">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-md bg-paper-3 sm:aspect-[2/1]">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </figure>
        </Container>

        <Container className="mt-12 sm:mt-16">
          <Section title="The situation" paragraphs={study.challenge} />
          <Section title="What we did" paragraphs={study.solution} />
          <Section title="What changed" paragraphs={study.outcome} />

          <figure className="border-t border-ink py-12 lg:py-16">
            <blockquote className="max-w-[44rem] text-h2">
              <p>&ldquo;{study.quote.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 text-small text-ink-2">
              <span className="font-medium text-ink">{study.quote.name}</span>, {study.quote.role},{" "}
              {study.quote.restaurant}
            </figcaption>
          </figure>
        </Container>
      </article>

      <section aria-labelledby="more-heading" className="border-t border-line bg-paper-2 py-16 sm:py-20">
        <Container>
          <h2 id="more-heading" className="text-h3">
            More case studies
          </h2>
          <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-8 lg:gap-12">
            {others.map((other) => (
              <CaseStudyCard key={other.slug} study={other} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
          { name: study.restaurant, href: `/case-studies/${study.slug}` },
        ]}
      />
    </>
  );
}
