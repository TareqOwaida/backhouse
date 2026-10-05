import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "marrow-and-rye",
    restaurant: "Marrow & Rye",
    type: "Neighborhood bistro",
    location: "Chicago, IL",
    locations: 1,
    timeframe: "Six months",
    services: ["Bookkeeping", "Payroll", "Sales tax"],
    headline: "From four months behind to a prime cost the owner checks every Monday.",
    summary:
      "A 64-seat bistro with a strong dinner service and no idea what it was making. We caught the books up, rebuilt the chart of accounts around the menu, and put a one-page flash in the owner's inbox every Monday.",
    metric: { figure: "60.1%", label: "prime cost, down from 67.8%" },
    challenge: [
      "Marrow & Rye's books were four months behind when the owner called. The previous bookkeeper had coded every purchase to a single 'Cost of Goods' line, so food, beer, wine and liquor were indistinguishable. Labor was one number too.",
      "The owner knew the restaurant was busy and suspected it wasn't profitable, but couldn't say by how much or why. Vendor bills were being paid late because nobody knew what was outstanding.",
    ],
    solution: [
      "We quoted the catch-up up front and brought four months current in five weeks. The chart of accounts was rebuilt so that cost of goods split the way the restaurant buys, and labor split the way it schedules: kitchen, front of house, management.",
      "Payroll moved onto our service so tip declarations and hours flowed straight into the books. A weekly flash report went out every Monday showing sales, food cost, labor and prime cost against a four-week average.",
    ],
    outcome: [
      "The first clean month showed prime cost at 67.8%, which explained the missing profit. Over the next six months the owner adjusted purchasing on two high-cost proteins, tightened Sunday scheduling and raised four menu prices. Prime cost settled at 60.1%.",
      "The books have closed by the 10th every month since. The owner reads the Monday flash on her phone before the produce delivery.",
    ],
    quote: {
      quote:
        "I used to get a P&L as a PDF I didn't open. Now I get one page on Monday and I actually change the schedule because of it.",
      name: "Nadia Ferreira",
      role: "Owner",
      restaurant: "Marrow & Rye",
    },
    image: {
      src: "/images/case-marrow-and-rye.jpg",
      alt: "Empty bistro dining room in the morning, chairs still up on the tables, sunlight across the wood floor",
      width: 1152,
      height: 864,
    },
  },
  {
    slug: "cielo-taqueria",
    restaurant: "Cielo Taqueria",
    type: "Fast-casual group",
    location: "Denver, CO",
    locations: 3,
    timeframe: "Four months",
    services: ["Bookkeeping", "Payroll", "Advisory"],
    headline: "Per-location P&Ls showed one store was carrying the other two.",
    summary:
      "Three taquerias, one set of books. Consolidated numbers looked fine. Split by location, they didn't. Once the owners could see each store on its own, the fix was mostly a scheduling problem.",
    metric: { figure: "9.2 pts", label: "lower labor at the weakest location" },
    challenge: [
      "Cielo ran three locations through one bank account and one QuickBooks file with no class tracking. The consolidated P&L showed a healthy business. The owners felt like it wasn't, and couldn't prove it either way.",
      "Payroll was with a national provider that had been applying Denver's minimum wage incorrectly to tipped staff for two years, a liability nobody had spotted.",
    ],
    solution: [
      "We set up location tracking across every transaction, split shared costs on a documented allocation, and produced a P&L per store alongside the consolidated view. Payroll moved in-house to our team, and we calculated and corrected the tip credit exposure.",
      "Monthly advisory sessions started once the numbers were clean, focused on the weakest location.",
    ],
    outcome: [
      "The per-location view showed the original store running labor at 38% of sales against 29% at the other two, mostly from a schedule that hadn't changed since the second location opened. Rebuilt around actual daypart sales, labor dropped 9.2 points in four months, roughly $140,000 a year at that store's volume.",
      "The tip credit correction was completed before the state found it. The owners now get three P&Ls and one consolidated view on the 10th of every month.",
    ],
    quote: {
      quote:
        "They caught a tip-credit error our old payroll company had been making for two years. Then they showed us which store was the problem. Nobody had been able to do either.",
      name: "Luis Cárdenas",
      role: "Co-owner",
      restaurant: "Cielo Taqueria",
    },
    image: {
      src: "/images/case-cielo-taqueria.jpg",
      alt: "Taqueria kitchen pass with a stack of warm tortillas under a heat lamp, cooks working in the background",
      width: 1152,
      height: 864,
    },
  },
  {
    slug: "little-harbor-coffee",
    restaurant: "Little Harbor Coffee",
    type: "Café group with wholesale roasting",
    location: "Portland, ME",
    locations: 2,
    timeframe: "Three months",
    services: ["Bookkeeping", "Sales tax"],
    headline: "Untangling retail, wholesale and a sales tax problem nobody knew existed.",
    summary:
      "Two cafés and a roastery selling to forty wholesale accounts. Retail and wholesale had been treated as one revenue stream for tax purposes, which meant they'd been paying sales tax on beans that were exempt.",
    metric: { figure: "$18,400", label: "recovered in overpaid sales tax" },
    challenge: [
      "Little Harbor's books mixed café sales, wholesale coffee sales and online orders into one revenue line. Sales tax had been calculated on the total, including wholesale sales to other businesses that were exempt with a resale certificate.",
      "They also had online customers in three states and no idea whether they'd crossed any economic nexus thresholds.",
    ],
    solution: [
      "We separated revenue into café, wholesale and direct-to-consumer, collected resale certificates from wholesale accounts, and filed amended returns for the open periods. We ran a nexus review for the online sales and registered in the one state where it was required.",
      "Going forward, the compliance calendar covers Maine sales tax, the one out-of-state return, both cafés' licenses and the roastery's food processor permit.",
    ],
    outcome: [
      "Maine refunded $18,400 in overpaid tax within the quarter. Wholesale margin, visible for the first time on its own line, turned out to be six points lower than café margin, which changed how the owners priced their next wholesale contracts.",
      "Books close by the 10th. Sales tax hasn't been late since.",
    ],
    quote: {
      quote:
        "We'd been overpaying for three years and two accountants never mentioned it. Backhouse found it in the first month.",
      name: "Sam Whitcomb",
      role: "Owner",
      restaurant: "Little Harbor Coffee",
    },
    image: {
      src: "/images/case-little-harbor.jpg",
      alt: "Burlap sacks of green coffee beside a small roaster in a brick-walled roastery",
      width: 1152,
      height: 864,
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
