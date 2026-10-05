import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping & monthly close",
    shortName: "Bookkeeping",
    headline: "A P&L you can actually run the restaurant from.",
    summary:
      "Daily sales imported from your POS, every account reconciled weekly, and books closed by the 10th with prime cost on the first page.",
    description:
      "Most restaurant books are built for the tax return, not for the person deciding whether to add a Tuesday lunch. We build yours around how the restaurant actually runs: sales by daypart, food and beverage cost split the way you buy, labor split the way you schedule. Then we close them on time, every month, and walk you through what moved.",
    includes: [
      "Daily POS sales import, reconciled to deposits and card settlements",
      "Bank, credit card and loan accounts reconciled weekly",
      "Vendor invoices coded to a restaurant chart of accounts (food, beer, wine, liquor, NA, paper, smallwares)",
      "Delivery platform payouts reconciled to orders, fees and marketing spend",
      "Monthly close by the 10th with a prime cost report",
      "Weekly one-page flash report every Monday",
      "A 15-minute walkthrough call each month, if you want it",
      "Year-end package prepared for your CPA",
    ],
    outcomes: [
      { figure: "10th", label: "books closed, every month" },
      { figure: "Mon", label: "flash report in your inbox" },
      { figure: "1", label: "named bookkeeper who knows your P&L" },
    ],
    forWhom:
      "Owner-operated restaurants, cafés and bars doing roughly $800k to $15M a year, with one to six locations.",
    faq: [
      {
        question: "Which accounting software do you use?",
        answer:
          "QuickBooks Online, in an account you own. If you leave, the books leave with you. We can also work inside Restaurant365 for groups already on it.",
      },
      {
        question: "What if our books are months behind?",
        answer:
          "We bring them current first. Catch-up is quoted per month behind before we start, and the quote is the price. Most single locations are current within four to five weeks.",
      },
      {
        question: "How does the monthly walkthrough work?",
        answer:
          "Once the close is done, your bookkeeper sends the P&L with three or four notes on what changed. If you want to talk it through, there's a 15-minute slot on the calendar. Most owners take it the first few months and then skip it unless something looks off.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll & tips",
    shortName: "Payroll",
    headline: "Payroll that understands tip credits, tip pools and a line cook who also bartends.",
    summary:
      "Hours pulled from your scheduling tool, tips allocated correctly, tip credit applied where it's legal, and filings done in every state you employ people.",
    description:
      "Generalist payroll providers treat tips as an afterthought and multi-role employees as an edge case. In a restaurant they're the whole job. We run payroll with tip declarations, tip pooling, tip credit minimum wage calculations, and split-role pay rates handled as standard, then reconcile it back to your books so labor cost on the P&L matches what actually left the account.",
    includes: [
      "Bi-weekly or weekly payroll processed from 7shifts, Homebase, Toast or a timesheet export",
      "Tip declarations, tip pools and tip-outs allocated and documented",
      "Tip credit and minimum wage top-up calculations by state and city",
      "Multiple pay rates per employee for split roles",
      "Federal, state and local withholding filed on time",
      "New hire reporting and W-2 / 1099 issuance",
      "Labor cost booked to your P&L by department, matching hours worked",
      "Support for your team's pay questions, so they don't all land on you",
    ],
    outcomes: [
      { figure: "0", label: "tip-credit calculations left to a spreadsheet" },
      { figure: "100%", label: "of tips reconciled back to the books" },
      { figure: "50", label: "states we file withholding in" },
    ],
    forWhom:
      "Restaurants with tipped staff, especially those with tip pools, multi-role employees or locations in more than one jurisdiction.",
    faq: [
      {
        question: "Do we have to change payroll providers?",
        answer:
          "No. We run payroll through Gusto for most clients because the integration is clean, but we can operate inside your existing provider if switching is a headache right now.",
      },
      {
        question: "Can you fix a tip-credit mistake that's already happened?",
        answer:
          "Usually. We'll calculate the exposure, help you make employees whole where needed and file corrected returns. It's better to find it now than in an audit.",
      },
      {
        question: "How do you handle employees in more than one state?",
        answer:
          "We register you for withholding where you need it, apply the right minimum wage and tip credit rules for each location, and file in each jurisdiction. Cities with their own minimum wage (Chicago, Denver, Seattle and others) are handled too.",
      },
    ],
  },
  {
    slug: "sales-tax",
    name: "Sales tax & compliance",
    shortName: "Sales tax",
    headline: "Sales tax filed on time, in every jurisdiction you sell in.",
    summary:
      "Monthly or quarterly filings, delivery platform tax reconciled correctly, and a compliance calendar so nothing lapses quietly.",
    description:
      "Sales tax is where restaurants get hurt without noticing. Third-party delivery apps remit tax differently depending on the state. Catering, wholesale and gift cards are each taxed differently from dine-in. Liquor often has its own return. We track all of it, file all of it, and keep the licenses, permits and annual reports that a restaurant can lose without anyone realizing.",
    includes: [
      "Sales and use tax returns filed monthly or quarterly, every jurisdiction",
      "Marketplace facilitator rules applied to DoorDash, Uber Eats and Grubhub sales",
      "Liquor, meals and hospitality taxes where they apply",
      "Catering, wholesale and gift card treatment handled correctly",
      "Compliance calendar: liquor license, health permit, annual report, business license renewals",
      "1099-NEC issuance for contractors and landlords",
      "Response to notices, with the state, so you don't have to call them",
      "Overpayment review when we take over your books",
    ],
    outcomes: [
      { figure: "0", label: "late filings on our watch" },
      { figure: "1", label: "calendar for every license and return" },
      { figure: "$18k", label: "recovered for one café group on takeover" },
    ],
    forWhom:
      "Any restaurant selling through delivery apps, doing catering or wholesale, or operating in more than one tax jurisdiction.",
    faq: [
      {
        question: "Do you do our income taxes?",
        answer:
          "We prepare the year-end package and work with your CPA, or introduce you to one of the restaurant CPAs we partner with. Sales tax, payroll tax and compliance filings are done in-house.",
      },
      {
        question: "We got a notice from the state. Can you handle it?",
        answer:
          "Yes. Send it over. We'll figure out what it's actually asking for, respond, and keep you posted. Most notices are resolved in a couple of exchanges.",
      },
    ],
  },
  {
    slug: "advisory",
    name: "Advisory",
    shortName: "Advisory",
    headline: "A monthly hour with someone who has read a hundred restaurant P&Ls this year.",
    summary:
      "Budgets, break-even for a second location, menu pricing math, lease reviews and a straight answer when you ask whether you can afford something.",
    description:
      "Once the books are clean and on time, the interesting questions start. Should the second location be a lease or a buy? What happens to margin if you take the $16 sandwich to $18? How much cash do you need in the account to survive a slow February? Our advisors have all sat in the controller's seat at a restaurant group. They answer in numbers, not generalities.",
    includes: [
      "Monthly working session with a named advisor",
      "Annual budget, built by month and by location",
      "13-week cash flow forecast, updated as you go",
      "Menu pricing and contribution margin analysis",
      "Break-even and pro forma for new locations or concepts",
      "Lease, loan and vendor contract review with the numbers attached",
      "Lender and investor reporting packages",
      "Quarterly tax planning with your CPA",
    ],
    outcomes: [
      { figure: "13", label: "week cash forecast, kept current" },
      { figure: "1", label: "hour a month with a restaurant controller" },
      { figure: "12", label: "month budget, by location" },
    ],
    forWhom:
      "Owners thinking about a second location, raising money, taking on a partner, or simply tired of making decisions on gut alone.",
    faq: [
      {
        question: "Is advisory only for groups?",
        answer:
          "No. Single-location owners use it most when they're deciding about expansion, a big lease renewal or a menu overhaul. It's included in the Group plan and available as an add-on to Kitchen.",
      },
      {
        question: "Can you talk to our bank or investors directly?",
        answer:
          "Yes, with your permission. We prepare the reporting package and join the call. Lenders tend to relax when they see a restaurant with monthly books closed on time.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
