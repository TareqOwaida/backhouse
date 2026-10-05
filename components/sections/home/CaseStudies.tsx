import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <section aria-labelledby="case-studies-heading" className="border-t border-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="case-studies-heading" className="text-h1 max-w-[14ch]">
            What changed, in numbers.
          </h2>
          <Button href="/case-studies" variant="link" arrow className="mb-1 shrink-0">
            All case studies
          </Button>
        </div>

        <CaseStudyCard study={featured} featured className="mt-14" />

        <div className="mt-20 grid gap-12 border-t border-line pt-14 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          {rest.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
