import type { Milestone, TeamMember } from "@/types";

export const principles = [
  {
    title: "Numbers by the 10th, or we tell you why.",
    text: "A P&L that arrives in the third week of the following month is a historical document. Ours arrives while you can still change the schedule.",
  },
  {
    title: "Restaurants only.",
    text: "We don't do dentists, law firms or e-commerce. Every bookkeeper here has worked in a restaurant, and every account we touch belongs to one.",
  },
  {
    title: "Flat fees, quoted in writing.",
    text: "You should never hesitate to email your bookkeeper because it might cost something. Nothing here is billed by the hour.",
  },
  {
    title: "A person, not a portal.",
    text: "You get a named bookkeeper who knows your P&L and your vendors, and who replies within a business day. Software is how we work, not who you talk to.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dana Okafor",
    role: "Founder and principal",
    bio: "Controller for a six-restaurant group in Chicago for five years before starting Backhouse in 2020. Still closes a handful of client books personally every month to stay honest.",
  },
  {
    name: "Marcus Lindqvist",
    role: "Head of bookkeeping",
    bio: "Ran the back office for a brewery and two taprooms in Milwaukee. Built the chart of accounts every Backhouse client starts from.",
  },
  {
    name: "Priya Raman",
    role: "Payroll and compliance",
    bio: "Former payroll manager for a 400-employee hospitality group. Knows the tip credit rules in 22 states without looking them up, then looks them up anyway.",
  },
  {
    name: "Jonah Whitfield",
    role: "Advisory",
    bio: "Opened four restaurants as a general manager and partner, closed one. Leads the monthly advisory sessions for Group clients.",
  },
];

export const teamNote =
  "Plus eleven bookkeepers, every one of whom has worked a service in a restaurant. We think it matters.";

export const milestones: Milestone[] = [
  { year: "2020", text: "Founded in Chicago with three clients, all former colleagues, in the worst possible year to be in restaurants. Weekly numbers turned out to be exactly what they needed." },
  { year: "2021", text: "First multi-location group. Per-location P&Ls become standard for anyone with more than one store." },
  { year: "2022", text: "Payroll brought in-house after too many tip-credit errors from outside providers landed on our desk." },
  { year: "2023", text: "One hundred restaurants. The Monday flash report ships to every Kitchen and Group client." },
  { year: "2024", text: "Sales tax and compliance calendar added after a client nearly lost a liquor license to a missed renewal." },
  { year: "2026", text: "140 restaurants across 22 states. Still closing books by the 10th." },
];
