import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "How independent restaurants brought their books current, found the location losing money, and recovered overpaid sales tax. Real outcomes, in numbers.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <PageIntro
        title="What changed once the numbers were on time."
        lead="Three restaurants, three different problems. What they have in common is that the fix started with a clean, on-time P&L."
      />

      <Container className="py-16 sm:py-20 lg:py-24">
        <CaseStudyCard study={featured} featured priority />
        <div className="mt-20 grid gap-12 border-t border-line pt-14 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          {rest.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>

      <FinalCta
        headline="Your restaurant has a number like this somewhere."
        text="Most of the time it's hiding in a P&L nobody has split properly. Twenty minutes and we'll tell you where we'd look first."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
        ]}
      />
    </>
  );
}
