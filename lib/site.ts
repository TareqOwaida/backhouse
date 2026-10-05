export const site = {
  name: "Backhouse",
  legalName: "Backhouse Financial LLC",
  tagline: "Bookkeeping, payroll and tax for independent restaurants",
  description:
    "Backhouse is a finance team that works only with independent restaurants. Books closed by the 10th, a flash report every Monday, payroll that understands tips, and sales tax filed on time.",
  url: "https://backhouse.co",
  email: "hello@backhouse.co",
  phone: "(312) 555-0148",
  phoneHref: "tel:+13125550148",
  address: {
    street: "1245 W Fulton Market, Suite 3B",
    city: "Chicago",
    region: "IL",
    postalCode: "60607",
    country: "US",
  },
  hours: "Monday to Friday, 8am to 6pm Central",
  responseTime: "one business day",
  founded: 2020,
  social: {
    linkedin: "https://www.linkedin.com/company/backhouse",
    instagram: "https://www.instagram.com/backhouse.co",
  },
  cta: {
    primary: { label: "Book a 20-minute call", href: "/contact" },
    secondary: { label: "See pricing", href: "/pricing" },
  },
} as const;

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
] as const;

export const footerNav = {
  services: [
    { label: "Bookkeeping & monthly close", href: "/services/bookkeeping" },
    { label: "Payroll & tips", href: "/services/payroll" },
    { label: "Sales tax & compliance", href: "/services/sales-tax" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
