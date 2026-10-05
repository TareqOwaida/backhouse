import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content/home";

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-paper-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-[40rem]">
          <h2 id="process-heading" className="text-h1">
            How it starts
          </h2>
          <p className="mt-5 text-lead text-ink-2">
            Most restaurants are fully onboarded within a month. If your books are
            behind, add the catch-up time we quote on the first call.
          </p>
        </div>

        <ol className="mt-14 grid gap-0 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.step}
              delay={index * 90}
              className="relative grid grid-cols-[3rem_1fr] gap-4 border-t border-ink py-6 lg:block lg:py-0 lg:pt-6"
            >
              <span className="text-label pt-1.5 text-muted lg:pt-0">{step.step}</span>
              <div className="lg:mt-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3">{step.title}</h3>
                  <span className="text-label shrink-0 text-muted">{step.when}</span>
                </div>
                <p className="mt-3 max-w-[30rem] text-body text-ink-2">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
