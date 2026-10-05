import { Container } from "@/components/layout/Container";
import { restaurantNames } from "@/lib/content/home";

/* Client names set as type. Swap for logo files when available. */
export function Restaurants() {
  return (
    <section aria-labelledby="restaurants-heading" className="py-14 sm:py-16">
      <Container>
        <h2 id="restaurants-heading" className="text-label font-sans text-muted">
          Kept in order for
        </h2>
        <ul className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-4 sm:gap-x-12">
          {restaurantNames.map((name, index) => (
            <li
              key={name}
              className="font-display text-[1.375rem] leading-none tracking-tight text-ink-2 sm:text-2xl"
              style={{
                fontStyle: index % 3 === 1 ? "italic" : "normal",
                fontVariationSettings: `"opsz" 36, "SOFT" ${index % 2 ? 100 : 30}, "WONK" ${index % 3 === 1 ? 1 : 0}`,
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
