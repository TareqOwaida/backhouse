import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { milestones, principles, team, teamNote } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Backhouse was started in 2020 by a restaurant-group controller who was tired of watching owners make decisions on 90-day-old numbers. Restaurants only, books closed by the 10th.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        size="large"
        title="Finance people who have worked a Friday night."
        lead="Backhouse exists because restaurant owners were getting their numbers late, in a format built for a tax return, from accountants who had never been on the floor at 8pm on a Saturday. We fix all three."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-paper-3">
            <Image
              src="/images/about-back-office.jpg"
              alt="A restaurant back office after service: a steel table with a spike of vendor invoices, a calculator, a closed laptop and a desk lamp, with the dark kitchen through the doorway"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-h2 max-w-[12ch]">How it started</h2>
            </div>
            <div className="space-y-6 text-lead text-ink-2 lg:col-span-7 lg:col-start-6">
              <p>
                Dana Okafor spent five years as controller for a six-restaurant group in
                Chicago. Every month she watched the same thing happen: the P&amp;L
                arrived six weeks after the month closed, the owners read the bottom
                line, and the decisions that could have changed it had already been made.
              </p>
              <p>
                In 2020 she left to start Backhouse with three clients, all former
                colleagues, in what turned out to be the worst possible year to be in
                restaurants. It also turned out to be the year owners most needed weekly
                numbers they could trust. All three are still clients.
              </p>
              <p>
                The rule from the start was simple: books closed by the 10th, a flash
                report every Monday, and nobody on the team who hasn&rsquo;t worked in a
                restaurant. Six years and 140 restaurants later, those are still the rules.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-heading" className="bg-paper-2 py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 id="principles-heading" className="text-h2 max-w-[16ch]">
            Four things we won&rsquo;t compromise on
          </h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 70} className="border-t border-ink pt-5">
                <span className="text-label text-muted">0{index + 1}</span>
                <h3 className="mt-4 text-h3">{principle.title}</h3>
                <p className="mt-3 max-w-[30rem] text-body text-ink-2">{principle.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="team-heading" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="team-heading" className="text-h2 max-w-[12ch]">
                Who you&rsquo;ll work with
              </h2>
              <p className="mt-5 max-w-[24rem] text-body text-ink-2">{teamNote}</p>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6">
              {team.map((member) => (
                <li
                  key={member.name}
                  className="grid gap-2 border-b border-line py-6 first:border-t first:border-ink sm:grid-cols-[14rem_1fr] sm:gap-8"
                >
                  <div>
                    <h3 className="text-h4">{member.name}</h3>
                    <p className="mt-1 text-small text-muted">{member.role}</p>
                  </div>
                  <p className="text-body text-ink-2">{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="milestones-heading" className="border-t border-line py-16 sm:py-20 lg:py-24">
        <Container>
          <h2 id="milestones-heading" className="text-h2">
            Since 2020
          </h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-line pt-5">
                <span className="text-figure text-2xl">{milestone.year}</span>
                <p className="text-body text-ink-2">{milestone.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FinalCta
        headline="Talk to someone who has closed a restaurant's books before."
        text="Twenty minutes. We'll look at your setup and tell you what we'd do first."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
    </>
  );
}
