import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, site } from "@/lib/site";
import type { NavLink } from "@/types";

function LinkColumn({ title, links }: { title: string; links: readonly NavLink[] }) {
  return (
    <div>
      <h2 className="text-label font-sans text-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.9375rem] text-ink-2 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-paper">
      <Container className="pt-14 pb-10 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Backhouse home" className="inline-block rounded-xs">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-body text-ink-2">
              Bookkeeping, payroll, sales tax and advisory for independent restaurants.
              Books closed by the 10th, every month, by people who have worked a service.
            </p>
            <address className="mt-8 grid gap-1 text-small not-italic text-ink-2">
              <a href={`mailto:${site.email}`} className="w-fit transition-colors hover:text-ink">
                {site.email}
              </a>
              <a href={site.phoneHref} className="w-fit tabular transition-colors hover:text-ink">
                {site.phone}
              </a>
              <span className="mt-2">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </span>
              <span className="mt-2 text-muted">{site.hours}</span>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6 lg:pt-1">
            <LinkColumn title="Services" links={footerNav.services} />
            <LinkColumn title="Company" links={footerNav.company} />
            <div className="space-y-10">
              <LinkColumn title="Legal" links={footerNav.legal} />
              <div>
                <h2 className="text-label font-sans text-muted">Follow</h2>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a
                      href={site.social.linkedin}
                      rel="noreferrer"
                      target="_blank"
                      className="text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.social.instagram}
                      rel="noreferrer"
                      target="_blank"
                      className="text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-label">Closing books since {site.founded}</p>
        </div>
      </Container>
    </footer>
  );
}
