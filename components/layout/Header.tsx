import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NavLinks } from "@/components/layout/NavLinks";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Backhouse home" className="shrink-0 rounded-xs">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-small text-ink-2 tabular transition-colors hover:text-ink xl:inline"
          >
            {site.phone}
          </a>
          <Button href={site.cta.primary.href} className="max-sm:hidden">
            Book a call
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
