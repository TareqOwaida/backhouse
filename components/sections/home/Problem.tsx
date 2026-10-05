import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/lib/content/home";

export function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="bg-paper-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="problem-heading" className="text-h1 max-w-[14ch]">
              Most owners find out in June what March cost them.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lead text-ink-2">
              By then the menu has changed, the schedule has changed and the money is
              gone. Generalist accountants treat a restaurant like any other small
              business. It isn&rsquo;t. Inventory turns weekly, labor moves daily, and
              tips make payroll a different animal.
            </p>
            <ol className="mt-12 rule-strong">
              {problems.map((problem, index) => (
                <Reveal
                  as="li"
                  key={problem.title}
                  delay={index * 80}
                  className="grid gap-3 border-b border-line py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="text-label pt-1 text-muted">0{index + 1}</span>
                  <div>
                    <h3 className="text-h4">{problem.title}</h3>
                    <p className="mt-2 max-w-[36rem] text-body text-ink-2">{problem.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
