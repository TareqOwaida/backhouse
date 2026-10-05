import { Container } from "@/components/layout/Container";
import { results } from "@/lib/content/home";

export function Results() {
  return (
    <section aria-label="Results" className="py-16 sm:py-20">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {results.map((item) => (
            <li key={item.label} className="border-t border-ink pt-5">
              <p className="text-figure text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem]">
                {item.figure}
              </p>
              <p className="mt-4 max-w-[16rem] text-small text-ink-2">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
