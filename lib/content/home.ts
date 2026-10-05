import type { Faq, Testimonial } from "@/types";

/* Sample client names. Replace with real wordmarks or logos. */
export const restaurantNames = [
  "Marrow & Rye",
  "Cielo Taqueria",
  "Little Harbor Coffee",
  "Benedetta",
  "The Pilot House",
  "Sunday Noodle",
  "Ferro",
  "Halsted Tap",
];

export const integrations = [
  "Toast",
  "Square",
  "Clover",
  "Lightspeed",
  "SpotOn",
  "Gusto",
  "7shifts",
  "Homebase",
  "MarginEdge",
  "QuickBooks Online",
];

export const problems = [
  {
    title: "Books that lag 60 to 90 days",
    text: "By the time the numbers arrive, the menu has changed, the schedule has changed and the money has gone.",
  },
  {
    title: "A P&L with no prime cost line",
    text: "Generalist accountants close the books for the tax return. A restaurant needs food, beverage and labor cost as percentages of sales, every month, on one page.",
  },
  {
    title: "Payroll that treats tips as a footnote",
    text: "Tip credits, tip pools and split roles are the whole job in a restaurant. Handled wrong, they're a liability that compounds quietly for years.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Call",
    when: "20 minutes",
    text: "We look at your current books, POS and payroll setup and tell you honestly whether we're a fit and what catch-up would cost.",
  },
  {
    step: "02",
    title: "Connect",
    when: "Week 1",
    text: "Read-only access to your POS, bank, payroll and vendor portals. We build a chart of accounts around your menu and your locations.",
  },
  {
    step: "03",
    title: "Catch up",
    when: "Weeks 2 to 5",
    text: "If you're behind, we bring the books current before monthly service starts. Quoted per month behind, in writing, before we begin.",
  },
  {
    step: "04",
    title: "Close",
    when: "Every month after",
    text: "Flash report each Monday. Books closed by the 10th. A short call to walk through what moved, if you want one.",
  },
];

/* Sample figures. Replace with verified numbers before launch. */
export const results = [
  { figure: "10th", label: "Day of the month your books are closed" },
  { figure: "140+", label: "Restaurants, cafés and bars we keep books for" },
  { figure: "22", label: "States we file payroll and sales tax in" },
  { figure: "1 day", label: "Maximum time to hear back from your bookkeeper" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I used to get a P&L as a PDF I didn't open. Now I get one page on Monday and I actually change the schedule because of it.",
    name: "Nadia Ferreira",
    role: "Owner",
    restaurant: "Marrow & Rye",
  },
  {
    quote:
      "They caught a tip-credit error our old payroll company had been making for two years.",
    name: "Luis Cárdenas",
    role: "Co-owner",
    restaurant: "Cielo Taqueria",
  },
  {
    quote:
      "The catch-up quote was the catch-up price. After ten years of accountants, that alone was new.",
    name: "Tom Achterberg",
    role: "Owner",
    restaurant: "The Pilot House",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What does it cost?",
    answer:
      "A flat monthly fee starting at $650 for a single location, based on locations and revenue. No hourly billing. If your books are behind, catch-up is quoted separately and in writing before we start.",
  },
  {
    question: "Our books are months behind. Is that a problem?",
    answer:
      "It's the most common way people arrive. We bring the books current first, then start monthly service. Most single locations are caught up within four to five weeks.",
  },
  {
    question: "Which POS and payroll systems do you work with?",
    answer:
      "Toast, Square, Clover, Lightspeed and SpotOn for POS. Gusto for payroll, or your existing provider. 7shifts and Homebase for scheduling. MarginEdge and xtraCHEF for invoices. Books live in QuickBooks Online, in an account you own.",
  },
  {
    question: "Do you file our income taxes?",
    answer:
      "Sales tax, payroll tax and compliance filings are done in-house. For income tax we prepare the year-end package and work with your CPA, or introduce you to one of the restaurant CPAs we partner with.",
  },
  {
    question: "How do we switch from our current accountant?",
    answer:
      "Tell us who to contact and we'll handle the handoff: files, logins, open items. It typically takes two weeks and you don't lose a month of books in the gap.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. Month to month, 30 days' notice. Your QuickBooks file and every document are yours if you leave.",
  },
  {
    question: "Who do we actually talk to?",
    answer:
      "A named bookkeeper who works on your account every week, and an advisor on Group plans. Email or text, reply within one business day. No ticket queue.",
  },
];
