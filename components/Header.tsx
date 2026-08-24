"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AtlasLogo } from "./AtlasLogo";

const NAV = [
  { href: "/sports", label: "Sports" },
  { href: "/categories", label: "Categories" },
  { href: "/countries", label: "Countries" },
  { href: "/compare", label: "Compare" },
  { href: "/learn", label: "Learn" },
];

export function Header() {
  const pathname = usePathname() ?? "/";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/50 bg-white/70 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-ink-950/70">
      <div className="container-page flex items-center justify-between gap-4 py-2.5 sm:py-3">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 via-sky-500 to-emerald-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />
            <AtlasLogo className="relative h-9 w-9 transition-transform duration-500 group-hover:rotate-6" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-ink-900 dark:text-ink-50">
              Gemopedia
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-ink-500 sm:block">
              Every game. Explained.
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  active
                    ? "text-ink-900 dark:text-white"
                    : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-ink-100/80 shadow-inner-glow dark:bg-white/10" />
                )}
                {n.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/sports"
          className="btn-shimmer group hidden items-center gap-1.5 rounded-full bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow sm:inline-flex dark:from-white dark:via-ink-50 dark:to-white dark:text-ink-900"
        >
          <span className="relative z-10">Explore</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>
      </div>

      {/* Mobile horizontal scroll nav */}
      <nav className="flex overflow-x-auto border-t border-ink-100/70 bg-white/50 px-3 py-1.5 md:hidden dark:border-white/5 dark:bg-ink-950/40">
        {NAV.map((n) => {
          const active = isActive(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`mx-0.5 shrink-0 rounded-full px-3 py-1 text-sm font-medium transition ${
                active
                  ? "bg-ink-100/90 text-ink-900 dark:bg-white/10 dark:text-white"
                  : "text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-white/5"
              }`}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
