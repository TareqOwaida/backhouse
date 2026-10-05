"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so any navigation
  // (link, back button) closes it without an effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const setOpen = (next: boolean) => setOpenedAt(next ? pathname : null);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, handle Escape, move focus.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedAt(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(frame);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="-mr-2 flex size-11 items-center justify-center rounded-sm text-ink transition-colors hover:bg-ink/[0.05]"
      >
        {open ? (
          <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
        ) : (
          <Menu aria-hidden="true" className="size-6" strokeWidth={1.5} />
        )}
      </button>

      <div
        id={panelId}
        data-open={open}
        inert={!open}
        className="nav-panel fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto border-t border-line bg-paper"
      >
        <nav aria-label="Mobile" className="px-5 pt-3 sm:px-8">
          <ul className="rule-strong">
            {primaryNav.map((item, index) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpenedAt(null)}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-[1.75rem] leading-none tracking-[-0.01em] transition-colors",
                      active ? "text-green" : "text-ink hover:text-green",
                    )}
                  >
                    {item.label}
                    <span className="text-label text-muted">0{index + 1}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-6 px-5 pt-8 pb-8 sm:px-8">
          <Button
            href={site.cta.primary.href}
            size="lg"
            className="w-full"
            arrow
            onClick={() => setOpenedAt(null)}
          >
            {site.cta.primary.label}
          </Button>
          <div className="flex flex-col gap-1 text-small text-ink-2">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
