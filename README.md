# Backhouse

Marketing site for Backhouse, a bookkeeping, payroll, sales tax and advisory firm for independent restaurants.

Built with Next.js 16 (App Router, Turbopack), React 19, TypeScript and Tailwind CSS v4. Icons from Lucide. No other runtime dependencies.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

Copy `.env.example` to `.env.local` and set `CONTACT_WEBHOOK_URL` to receive contact-form submissions. Without it, the form displays an error and points visitors to the email address.

## Where things live

| Path | What it is |
| --- | --- |
| `lib/site.ts` | Company name, contact details, URLs, navigation, CTA labels |
| `lib/content/*.ts` | All page copy and data: services, pricing, case studies, testimonials, FAQs, team, articles |
| `lib/contact.ts` | Contact form fields, validation and delivery |
| `app/` | Routes. Dynamic routes read from `lib/content` and are statically generated |
| `components/layout/` | Header, mobile nav, footer, page intro, container |
| `components/sections/` | Homepage sections plus the shared FAQ and closing CTA |
| `components/visuals/` | The statement, flash report, pay stub, compliance calendar and cash forecast graphics |
| `components/ui/` | Button, form fields, accordion, logo, scroll reveal |
| `app/globals.css` | Design tokens (colour, type, radius, easing) and the typographic scale |
| `public/images/` | Photography. Current files are placeholders to replace with real shots |

## Content that needs to be real before launch

- Client names in `lib/content/home.ts` (`restaurantNames`) and the case studies, quotes and figures throughout `lib/content/` are sample content written to show the layout. Replace with verified names, numbers and permissions.
- The four photographs in `public/images/` are AI-generated placeholders. Replace with commissioned photography at the same aspect ratios (4:3 for case studies, 16:9 for the about page) and update `alt` text.
- Pricing in `lib/content/pricing.ts`.
- Address, phone, email and social links in `lib/site.ts`.
- Legal copy in `app/privacy/page.tsx` and `app/terms/page.tsx` should be reviewed by counsel.

## Routes

`/`, `/services`, `/services/[slug]`, `/pricing`, `/case-studies`, `/case-studies/[slug]`, `/about`, `/resources`, `/resources/[slug]`, `/contact`, `/privacy`, `/terms`, plus `sitemap.xml`, `robots.txt`, `icon.svg` and a generated `opengraph-image`.
