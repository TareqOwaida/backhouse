import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "how-to-read-a-restaurant-pl",
    title: "How to read a restaurant P&L in ten minutes",
    description:
      "Most owners skim to the bottom line and stop. Here's the order to read it in, and the four numbers that matter more than net income.",
    date: "2026-09-02",
    readingTime: "7 min read",
    category: "Bookkeeping",
    author: "Dana Okafor",
    body: [
      {
        type: "paragraph",
        text: "A profit and loss statement is a summary of what came in and what went out over a period, usually a month. That's it. The reason most restaurant owners find it useless is not that it's complicated. It's that generalist accountants lay it out for a tax return instead of for the person deciding whether to open for Tuesday lunch.",
      },
      {
        type: "paragraph",
        text: "Read it in this order and you'll get what you need in ten minutes.",
      },
      { type: "heading", text: "1. Sales, and how they're split" },
      {
        type: "paragraph",
        text: "Start at the top. Total sales for the month, then the split: food, beer, wine, liquor, non-alcoholic, retail, catering, delivery. If your P&L shows one line that says 'Sales', ask for it to be split. You cannot manage a beverage program you can't see.",
      },
      {
        type: "paragraph",
        text: "Compare to the same month last year, not last month. Restaurants are seasonal and February is never going to look like December.",
      },
      { type: "heading", text: "2. Cost of goods sold, as a percentage" },
      {
        type: "paragraph",
        text: "Cost of goods is what you paid for what you sold: food, beverage, paper. The dollar figure is almost meaningless on its own. Divide it by sales and you get your COGS percentage, which is the number to watch. For most full-service restaurants it lands between 28% and 35%. Bars run lower, steakhouses higher.",
      },
      {
        type: "paragraph",
        text: "Two things to check: is COGS split the same way sales are (food cost against food sales, wine cost against wine sales), and does it account for inventory? If your bookkeeper is just recording purchases, a big Friday delivery will make a slow week look terrible.",
      },
      { type: "heading", text: "3. Labor, all of it" },
      {
        type: "paragraph",
        text: "Wages, salaries, payroll taxes, benefits, workers' comp. Add them together and divide by sales. Ideally you see it split between kitchen, front of house and management. A restaurant with labor at 32% and a manager who covers three shifts a week has a different problem from one at 32% because the kitchen is overstaffed on Mondays.",
      },
      { type: "heading", text: "4. Prime cost" },
      {
        type: "paragraph",
        text: "COGS plus labor, as a percentage of sales. This is the number. Prime cost is the portion of every dollar you spend on the two things you control most directly. Under 60% is healthy for most concepts. Over 65% and there is no amount of occupancy negotiation that will save you.",
      },
      {
        type: "quote",
        text: "If your P&L doesn't have a prime cost line on the first page, it wasn't built for a restaurant.",
      },
      { type: "heading", text: "5. Everything below the line" },
      {
        type: "paragraph",
        text: "Occupancy (rent, CAM, utilities, insurance), operating expenses (linen, repairs, software, marketing, credit card fees), and general and administrative (your bookkeeper, your lawyer, your bank fees). These matter, but they move slowly and most are fixed. Glance at them for anything unusual, then move on.",
      },
      { type: "heading", text: "What to ignore" },
      {
        type: "list",
        items: [
          "Net income on its own. It's the result, not the cause.",
          "Anything shown only in dollars without a percentage next to it.",
          "Month-over-month comparisons in a seasonal business.",
          "A P&L that arrives more than a few weeks after month end. By then it's history.",
        ],
      },
      {
        type: "paragraph",
        text: "Ten minutes, four percentages: COGS, labor, prime cost, and the trend in each against the same month last year. Everything else is detail you can look at when something moves.",
      },
    ],
  },
  {
    slug: "prime-cost-weekly",
    title: "Prime cost: the one number worth checking every week",
    description:
      "Monthly books tell you what happened. A weekly prime cost tells you what's happening, while there's still a schedule to change.",
    date: "2026-08-12",
    readingTime: "5 min read",
    category: "Operations",
    author: "Marcus Lindqvist",
    body: [
      {
        type: "paragraph",
        text: "Prime cost is your cost of goods plus your total labor, expressed as a percentage of sales. It's the single best indicator of whether a restaurant is being run well this week, because it covers the two costs an operator can actually move on short notice.",
      },
      {
        type: "paragraph",
        text: "Rent is fixed. Insurance is fixed. Your loan payment is fixed. Food and labor are decided every day, by the person writing the schedule and the person placing the order. Prime cost is the scorecard for those two people.",
      },
      { type: "heading", text: "Why weekly, not monthly" },
      {
        type: "paragraph",
        text: "A monthly close is the right cadence for a complete, reconciled set of books. It's the wrong cadence for catching a problem. If labor spikes in the first week of the month because a manager over-scheduled a slow stretch, you find out in the P&L six weeks later. Three more schedules have been written by then.",
      },
      {
        type: "paragraph",
        text: "A weekly flash report doesn't need to be perfectly reconciled. It needs to be directionally right and on your phone Monday morning. Sales from the POS, purchases from invoices received, labor from the scheduling system. Four numbers, one page.",
      },
      { type: "heading", text: "What a useful flash report contains" },
      {
        type: "list",
        items: [
          "Sales for the week, against the same week last year and against the four-week average",
          "Food and beverage purchases as a percentage of sales (a proxy for COGS between inventory counts)",
          "Labor dollars and hours as a percentage of sales, split kitchen and front of house",
          "Prime cost, with a target line",
          "Two or three sentences from whoever prepared it about what moved and why",
        ],
      },
      { type: "heading", text: "What to do with it" },
      {
        type: "paragraph",
        text: "Read it before you write next week's schedule. If labor was high, look at which days. If purchases were high, check whether it was a stock-up or a price increase. If both were fine and prime cost still moved, sales dropped, and that's a different conversation.",
      },
      {
        type: "quote",
        text: "The flash report isn't the accounting. It's the reason the accounting will look better next month.",
      },
    ],
  },
  {
    slug: "tip-credit-mistakes",
    title: "Tip credits, tip pools and the payroll mistakes we see most",
    description:
      "Restaurant payroll has rules most providers don't apply correctly. These are the five errors we find most often when taking over a new client.",
    date: "2026-07-21",
    readingTime: "8 min read",
    category: "Payroll",
    author: "Priya Raman",
    body: [
      {
        type: "paragraph",
        text: "When a new restaurant joins Backhouse, one of the first things we do is pull the last two years of payroll and check it. In roughly a third of cases we find an error that has been repeating every pay period. These are the ones that come up most.",
      },
      { type: "heading", text: "1. Tip credit applied without checking the top-up" },
      {
        type: "paragraph",
        text: "Where a tip credit is allowed, an employer can pay tipped staff below the standard minimum wage as long as tips bring them up to at least the full minimum. The check has to happen every pay period, per employee. If a server has a slow week and doesn't reach minimum with tips, the employer owes the difference. Many national payroll providers simply don't run this calculation.",
      },
      { type: "heading", text: "2. Using the state minimum in a city with its own" },
      {
        type: "paragraph",
        text: "Chicago, Denver, Seattle, New York City and a growing list of others set a higher local minimum wage than their state. Some also restrict or eliminate the tip credit locally. Payroll configured at the state level will be wrong every single pay period in those cities.",
      },
      { type: "heading", text: "3. Managers in the tip pool" },
      {
        type: "paragraph",
        text: "Federal law prohibits owners, managers and supervisors from taking a share of a tip pool, regardless of whether they also serve tables. The definition of manager hinges on duties, not title. A 'shift lead' who hires, fires or sets schedules is a manager for this purpose.",
      },
      { type: "heading", text: "4. Split-role employees paid at one rate" },
      {
        type: "paragraph",
        text: "A bartender who also preps in the kitchen three mornings a week should be paid the kitchen rate for kitchen hours, without a tip credit. Paying one blended tipped rate for all hours is a common shortcut and it doesn't hold up.",
      },
      { type: "heading", text: "5. Tips not reconciled to the books" },
      {
        type: "paragraph",
        text: "Credit card tips flow through the restaurant's bank account before they reach employees. If payroll and bookkeeping aren't talking to each other, tips end up inflating sales, deflating labor, or sitting in a liability account nobody clears. The P&L is wrong and nobody knows why.",
      },
      { type: "heading", text: "What to do if you find one" },
      {
        type: "list",
        ordered: true,
        items: [
          "Calculate the exposure honestly, per employee, per pay period, going back as far as the error runs.",
          "Make employees whole. Voluntary correction is treated very differently from an audit finding.",
          "File corrected returns where withholding was affected.",
          "Fix the configuration so it doesn't happen again next Friday.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is exotic. It's just that restaurants are a small share of most payroll providers' customers, and the rules that matter here don't matter to a dental office. That's the entire reason we run payroll ourselves.",
      },
    ],
  },
  {
    slug: "what-closed-books-means",
    title: "What 'closed books' actually means, and why the date matters",
    description:
      "Your accountant says the books are closed. Here's what should be true when they say that, and why the 10th is the right deadline for a restaurant.",
    date: "2026-06-30",
    readingTime: "4 min read",
    category: "Bookkeeping",
    author: "Dana Okafor",
    body: [
      {
        type: "paragraph",
        text: "'Closed' should mean something specific: every bank, card and loan account is reconciled to a statement, every sale from the POS matches a deposit, every invoice received in the month is recorded, payroll matches what was paid, sales tax is calculated and accrued, and nothing will change in that month unless you're told why.",
      },
      {
        type: "paragraph",
        text: "If any of those aren't true, the books aren't closed. They're drafted.",
      },
      { type: "heading", text: "Why the date is not a detail" },
      {
        type: "paragraph",
        text: "A restaurant's decisions have a short shelf life. Menu prices, schedules, vendor orders, hours: all of them can be changed this week and will affect next week's results. A P&L delivered 45 days after month end describes a restaurant that no longer exists.",
      },
      {
        type: "paragraph",
        text: "The 10th is early enough that the numbers are still actionable and late enough that every statement, invoice and payroll for the prior month has arrived. Earlier and you're estimating. Later and you're reporting history.",
      },
      { type: "heading", text: "Questions to ask your current accountant" },
      {
        type: "list",
        items: [
          "On what date were last month's books closed?",
          "Which accounts were reconciled, and to which statements?",
          "Does the P&L show prime cost?",
          "If I change something in a closed month, will you tell me?",
        ],
      },
      {
        type: "paragraph",
        text: "If the answers are vague, the books probably are too.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
