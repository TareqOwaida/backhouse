import type { Faq, PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    slug: "ledger",
    name: "Ledger",
    price: 650,
    fit: "One location, under $1.5M a year",
    description:
      "Clean monthly books and a P&L with prime cost on it, closed by the 10th. For owners who run payroll themselves and want the numbers right.",
    includes: [
      "Monthly bookkeeping and reconciliation",
      "Restaurant chart of accounts",
      "Books closed by the 10th",
      "Monthly P&L with prime cost report",
      "Sales tax filed, one jurisdiction",
      "Year-end package for your CPA",
      "Email support, one business day",
    ],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    price: 1150,
    fit: "One location, up to $4M a year",
    description:
      "Everything in Ledger, plus payroll, a weekly flash report and bill pay. The plan most single-location restaurants end up on.",
    includes: [
      "Everything in Ledger",
      "Weekly flash report every Monday",
      "Payroll with tips and tip credit handled",
      "Accounts payable and bill pay",
      "Delivery platform reconciliation",
      "Sales tax, all jurisdictions",
      "Compliance calendar",
      "Quarterly review call",
    ],
    featured: true,
  },
  {
    slug: "group",
    name: "Group",
    price: 2400,
    priceNote: "from",
    fit: "Two to six locations",
    description:
      "Per-location and consolidated books, monthly advisory, budgets and forecasts. Priced on your locations and volume, quoted in writing.",
    includes: [
      "Everything in Kitchen",
      "P&L per location plus consolidated",
      "Shared cost allocation, documented",
      "Monthly advisory session",
      "Annual budget by location",
      "13-week cash flow forecast",
      "Lender and investor reporting",
      "Dedicated advisor and bookkeeper",
    ],
  },
];

export const pricingExtras = [
  {
    name: "Catch-up bookkeeping",
    price: "Quoted per month behind",
    text: "If your books aren't current, we bring them current before monthly service starts. You get one written quote before we begin, and that's the price.",
  },
  {
    name: "Advisory add-on",
    price: "$450 / month",
    text: "Monthly advisory session, budget and cash forecast for Ledger or Kitchen plans.",
  },
  {
    name: "New restaurant setup",
    price: "$1,200 one-time",
    text: "Entity, EIN, sales tax and payroll registrations, chart of accounts and POS mapping before you open.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "Is there a contract?",
    answer:
      "No. Every plan is month to month with 30 days' notice. If you leave, your QuickBooks file and every document go with you.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "Not if your books are current. If they're behind, catch-up is quoted separately and up front. Restaurants opening for the first time can use the setup package.",
  },
  {
    question: "What counts as one location?",
    answer:
      "One physical restaurant with its own POS and lease. A food truck or catering arm attached to a restaurant counts as part of that location. A ghost kitchen with its own P&L counts as a location.",
  },
  {
    question: "What happens if our revenue grows past the plan?",
    answer:
      "We'll tell you before the change, not after. Plans are reviewed once a year against trailing twelve-month sales, and we move you at your next renewal, not mid-year.",
  },
  {
    question: "Do you charge for questions?",
    answer:
      "No. There's no hourly billing on any plan. Email your bookkeeper as often as you need to.",
  },
  {
    question: "Can we start mid-year?",
    answer:
      "Yes. Most clients do. We take over from the last closed month, catch up if needed, and coordinate the handoff with your previous bookkeeper or accountant.",
  },
];
