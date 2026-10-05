import { Container } from "@/components/layout/Container";
import { testimonials } from "@/lib/content/home";

export function Testimonials() {
  const [featured, ...supporting] = testimonials;

  return (
    <section aria-labelledby="testimonials-heading" className="bg-paper-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <h2 id="testimonials-heading" className="sr-only">
          What owners say
        </h2>

        <figure className="max-w-[52rem]">
          <blockquote className="text-h1 text-ink">
            <p>&ldquo;{featured.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 text-small">
            <span className="h-px w-8 bg-ink" aria-hidden="true" />
            <span>
              <span className="font-medium text-ink">{featured.name}</span>
              <span className="text-ink-2">
                , {featured.role}, {featured.restaurant}
              </span>
            </span>
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {supporting.map((item, index) => (
            <figure
              key={item.name}
              className={
                index === 0 ? "lg:col-span-5 lg:col-start-2" : "lg:col-span-5 lg:col-start-8"
              }
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-5 text-small text-ink-2">
                <span className="font-medium text-ink">{item.name}</span>, {item.role},{" "}
                {item.restaurant}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
