"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { LogoMark } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/90 backdrop-blur supports-[backdrop-filter]:bg-night/75">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Phoenix Digital home">
          <LogoMark className="h-8 w-auto lg:h-9" />
          <span className="label text-[0.72rem] tracking-[0.24em] text-ink">Phoenix Digital</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    item.highlight ? "text-gold hover:text-ink" : "text-muted hover:text-ink"
                  } aria-[current=page]:text-ink`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.cta.href}
            className="hidden rounded-sm bg-ember px-4 py-2.5 text-sm font-semibold text-night transition-colors hover:bg-gold sm:inline-flex"
          >
            {site.cta.label}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-night lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap py-6">
          <ul className="divide-y divide-line">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`headline block py-4 text-2xl ${item.highlight ? "text-gold" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-center rounded-sm bg-ember px-6 py-4 font-semibold text-night"
          >
            {site.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
