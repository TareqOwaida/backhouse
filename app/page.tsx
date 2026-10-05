import { Hero } from "@/components/sections/home/Hero";
import { Restaurants } from "@/components/sections/home/Restaurants";
import { Problem } from "@/components/sections/home/Problem";
import { Services } from "@/components/sections/home/Services";
import { Process } from "@/components/sections/home/Process";
import { Results } from "@/components/sections/home/Results";
import { CaseStudies } from "@/components/sections/home/CaseStudies";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { homeFaqs } from "@/lib/content/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Restaurants />
      <Problem />
      <Services />
      <Process />
      <Results />
      <CaseStudies />
      <Testimonials />
      <FaqSection items={homeFaqs} />
      <FinalCta />
    </>
  );
}
