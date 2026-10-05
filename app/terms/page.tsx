import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";
import type { ArticleBlock } from "@/types";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that apply to using the Backhouse website and engaging Backhouse for bookkeeping, payroll, tax and advisory services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const blocks: ArticleBlock[] = [
  { type: "heading", text: "Using this website" },
  {
    type: "paragraph",
    text: "The content on this site is general information about our services and about restaurant finance. It is not accounting, tax or legal advice for your specific situation, and you shouldn't act on it without talking to a professional who knows your circumstances. We try to keep everything accurate and current, but we make no guarantee that it is.",
  },
  { type: "heading", text: "Engaging Backhouse" },
  {
    type: "paragraph",
    text: "Our services are provided under a written engagement letter that sets out the scope of work, the monthly fee, the start date and each side's responsibilities. Where these terms and an engagement letter differ, the engagement letter applies.",
  },
  {
    type: "list",
    items: [
      "All plans are month to month. Either side may end the engagement with 30 days' written notice.",
      "Fees are billed monthly in advance. Catch-up and one-off work is quoted in writing and agreed before it starts.",
      "You keep ownership of your accounting file and all of your records. On termination we provide access to everything we hold.",
      "We rely on the accuracy and completeness of the information and access you provide. Deadlines we commit to assume we receive what we need in time.",
    ],
  },
  { type: "heading", text: "What we are responsible for" },
  {
    type: "paragraph",
    text: "We perform bookkeeping, payroll processing, sales tax compliance and advisory work with reasonable care and skill. Where a filing is late or incorrect because of our error, we correct it and cover any penalties that result. We are not responsible for penalties arising from information that was provided late, incompletely or inaccurately, or from decisions you make on the basis of our advice.",
  },
  {
    type: "paragraph",
    text: "Income tax returns are prepared by your CPA or by a partner firm under their own engagement, not under these terms.",
  },
  { type: "heading", text: "Limitation of liability" },
  {
    type: "paragraph",
    text: "To the extent permitted by law, our total liability to you for any claim arising from our services in a given year is limited to the fees you paid us in that year. We are not liable for indirect or consequential losses, including lost profits.",
  },
  { type: "heading", text: "Confidentiality" },
  {
    type: "paragraph",
    text: "We treat everything we learn about your business as confidential and use it only to perform the work. The same applies to information we share with you about how we work.",
  },
  { type: "heading", text: "Governing law" },
  {
    type: "paragraph",
    text: `These terms are governed by the laws of the State of Illinois. Any dispute that can't be resolved by talking it through will be handled in the courts of Cook County, Illinois.`,
  },
  {
    type: "paragraph",
    text: `Questions about these terms can be sent to ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="2026-08-01"
      intro="The short version: we do the work we agreed to, you keep your records, and either of us can walk away with 30 days' notice. The longer version is below."
      blocks={blocks}
    />
  );
}
