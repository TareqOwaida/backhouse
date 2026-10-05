export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  description: string;
  includes: string[];
  outcomes: { figure: string; label: string }[];
  forWhom: string;
  faq: Faq[];
};

export type CaseStudy = {
  slug: string;
  restaurant: string;
  type: string;
  location: string;
  locations: number;
  headline: string;
  summary: string;
  metric: { figure: string; label: string };
  challenge: string[];
  solution: string[];
  outcome: string[];
  quote: Testimonial;
  image: ImageAsset;
  services: string[];
  timeframe: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  restaurant: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type PricingTier = {
  slug: string;
  name: string;
  price: number;
  priceNote?: string;
  fit: string;
  description: string;
  includes: string[];
  featured?: boolean;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  author: string;
  body: ArticleBlock[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type Milestone = {
  year: string;
  text: string;
};
