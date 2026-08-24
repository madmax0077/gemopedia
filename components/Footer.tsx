import Link from "next/link";
import { CATEGORIES } from "@/lib/data/categories";
import { COUNTRIES } from "@/lib/data/countries";
import { AtlasLogo } from "./AtlasLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-200/70 bg-gradient-to-b from-ink-50 to-ink-100/70 dark:border-white/10 dark:from-ink-950 dark:to-black">
      {/* Ambient corner glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-brand-500/20 to-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-y" />

      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <AtlasLogo className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-ink-50">
                Gemopedia
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              A visual encyclopedia of the world's sports and games — free, ad-free, and made to
              be understood.
            </p>
            <p className="mt-4 text-xs text-ink-500 dark:text-ink-400">
              We publish only sourced, editor-verified content. Every sport page links to the
              official rulebook.
            </p>
          </div>

          <FooterLinks
            heading="Explore"
            links={[
              { href: "/sports", label: "All sports" },
              { href: "/categories", label: "Categories" },
              { href: "/countries", label: "Countries" },
              { href: "/compare", label: "Compare" },
              { href: "/learn", label: "Learn" },
            ]}
          />

          <FooterLinks
            heading="Top categories"
            links={CATEGORIES.slice(0, 6).map((c) => ({
              href: `/categories/${c.slug}`,
              label: c.name,
            }))}
          />

          <FooterLinks
            heading="Popular countries"
            links={["IN", "GB", "US", "JP", "BR", "AU"].map((code) => ({
              href: `/countries/${code}`,
              label: COUNTRIES.find((c) => c.code === code)?.name ?? code,
            }))}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200/70 pt-6 text-xs text-ink-500 dark:border-white/10 dark:text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-ink-700 dark:text-ink-200">Gemopedia</span>
            <span className="mx-2 text-ink-300 dark:text-ink-700">·</span>
            a living atlas of every sport in the world.
          </p>
          <p>
            Data verified from official governing bodies. Report an error{" "}
            <a
              href="mailto:hello@gemopedia.dev"
              className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-brand-300"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
        {heading}
      </h4>
      <ul className="mt-3 space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              className="group inline-flex items-center gap-1 text-ink-700 transition hover:text-ink-950 dark:text-ink-200 dark:hover:text-white"
              href={l.href}
            >
              <span>{l.label}</span>
              <span className="translate-x-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
