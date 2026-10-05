import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";
import type { ArticleBlock } from "@/types";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Backhouse collects, uses and protects information from website visitors and clients.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const blocks: ArticleBlock[] = [
  { type: "heading", text: "What we collect" },
  {
    type: "paragraph",
    text: "When you fill in the contact form, we collect the information you give us: your name, your restaurant's name, your email address, an optional phone number, and anything you write in the message. Our website also records standard server logs (IP address, browser type, pages visited) for security and to keep the site working.",
  },
  {
    type: "paragraph",
    text: "We do not use advertising trackers, and we do not sell or rent personal information to anyone.",
  },
  { type: "heading", text: "How we use it" },
  {
    type: "list",
    items: [
      "To reply to your inquiry and, if you become a client, to deliver our services.",
      "To keep the website secure and functioning.",
      "To meet legal and regulatory obligations that apply to bookkeeping and payroll providers.",
    ],
  },
  { type: "heading", text: "Client financial information" },
  {
    type: "paragraph",
    text: "If you become a client, we handle bank, point-of-sale, payroll and tax information on your behalf. Access is read-only wherever the provider supports it, every team member uses an individual login with multi-factor authentication, and we never share passwords between people or systems. We use that information solely to perform the work you have engaged us for.",
  },
  { type: "heading", text: "Who we share it with" },
  {
    type: "paragraph",
    text: "Only the service providers we need to do the work: accounting software, payroll platforms, secure document storage and email. Each is bound by its own privacy and security obligations. We share information with tax authorities when filing on your behalf, and with anyone else only when you ask us to or the law requires it.",
  },
  { type: "heading", text: "How long we keep it" },
  {
    type: "paragraph",
    text: "Inquiry details are kept for up to 24 months so we can follow up. Client records are kept for as long as you are a client and for seven years afterward, which is the retention period generally required for financial records. You can ask us to delete inquiry information at any time.",
  },
  { type: "heading", text: "Your choices" },
  {
    type: "paragraph",
    text: `You can ask what information we hold about you, ask us to correct it, or ask us to delete it, subject to the retention rules above. Email ${site.email} and we'll respond within 30 days.`,
  },
  { type: "heading", text: "Changes" },
  {
    type: "paragraph",
    text: "If this policy changes in a meaningful way, we'll update the date at the top of this page and, for clients, tell you directly.",
  },
  {
    type: "paragraph",
    text: `Questions about privacy can be sent to ${site.email} or to ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}.`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="2026-08-01"
      intro="We collect what we need to reply to you and to do the work, and nothing else. This page explains what that means in practice."
      blocks={blocks}
    />
  );
}
