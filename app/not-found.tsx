import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-label text-muted">Error 404</p>
          <h1 className="mt-4 text-display max-w-[12ch]">This page isn&rsquo;t on the books.</h1>
          <p className="mt-7 max-w-[30rem] text-lead text-ink-2">
            Either the address is wrong or the page moved. Everything we publish is
            reachable from the links here.
          </p>
          <Button href="/" className="mt-9" arrow>
            Back to the homepage
          </Button>
        </div>
        <nav aria-label="Main sections" className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <ul className="rule-strong">
            {primaryNav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3.5 font-display text-xl tracking-tight transition-colors hover:text-green"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
