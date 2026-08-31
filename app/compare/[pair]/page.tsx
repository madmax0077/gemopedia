import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPARISON_PAIRS, getComparison, getSport } from "@/lib/data";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { countryFlag, countryName } from "@/lib/data/countries";
import { breadcrumbJsonLd } from "@/lib/seo";

interface RouteParams { params: { pair: string } }

// Fully static SSG — no ISR reads on Vercel.
export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return COMPARISON_PAIRS.map((p) => ({ pair: p.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const pair = getComparison(params.pair);
  if (!pair) return { title: "Comparison not found" };
  const a = getSport(pair.aSlug)!;
  const b = getSport(pair.bSlug)!;
  return {
    title: `${a.name} vs ${b.name} — side by side`,
    description: `${pair.rationale} A field-by-field comparison of ${a.name} and ${b.name}: players, field, scoring, duration, rules and popularity.`,
    alternates: { canonical: `/compare/${pair.slug}` },
  };
}

export default function ComparePage({ params }: RouteParams) {
  const pair = getComparison(params.pair);
  if (!pair) return notFound();
  const a = getSport(pair.aSlug)!;
  const b = getSport(pair.bSlug)!;
  const catA = CATEGORY_BY_SLUG[a.category];
  const catB = CATEGORY_BY_SLUG[b.category];

  const rows: { label: string; aValue: string; bValue: string }[] = [
    { label: "Category", aValue: catA.name, bValue: catB.name },
    { label: "Origin", aValue: `${countryFlag(a.countryOfOrigin)} ${countryName(a.countryOfOrigin) ?? "—"}`, bValue: `${countryFlag(b.countryOfOrigin)} ${countryName(b.countryOfOrigin) ?? "—"}` },
    { label: "Estimated origin", aValue: a.estimatedOrigin ?? "—", bValue: b.estimatedOrigin ?? "—" },
    { label: "Team or individual", aValue: labelType(a.sportType), bValue: labelType(b.sportType) },
    { label: "Players", aValue: playersLabel(a), bValue: playersLabel(b) },
    { label: "Playing area", aValue: a.field?.surfaceName ?? "—", bValue: b.field?.surfaceName ?? "—" },
    { label: "Field dimensions", aValue: a.field?.dimensions ?? "—", bValue: b.field?.dimensions ?? "—" },
    { label: "Match duration", aValue: a.duration?.approximateMinutes ? `~${a.duration.approximateMinutes} min` : a.duration?.structure ?? "—", bValue: b.duration?.approximateMinutes ? `~${b.duration.approximateMinutes} min` : b.duration?.structure ?? "—" },
    { label: "Match structure", aValue: a.duration?.structure ?? "—", bValue: b.duration?.structure ?? "—" },
    { label: "Scoring", aValue: a.scoring?.summary ?? "—", bValue: b.scoring?.summary ?? "—" },
    { label: "Objective", aValue: a.objective ?? "—", bValue: b.objective ?? "—" },
    { label: "Governing body", aValue: a.governingBodies?.[0]?.name ?? "—", bValue: b.governingBodies?.[0]?.name ?? "—" },
    { label: "Olympic sport", aValue: a.isOlympic ? "Yes" : "No", bValue: b.isOlympic ? "Yes" : "No" },
    { label: "Popularity", aValue: a.popularity ?? "—", bValue: b.popularity ?? "—" },
  ];

  const jsonLd = breadcrumbJsonLd([
    { label: "Gemopedia", href: "/" },
    { label: "Compare", href: "/compare" },
    { label: `${a.name} vs ${b.name}`, href: `/compare/${pair.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-narrow pb-24 pt-6 sm:pt-10">
        <nav className="text-xs font-medium text-ink-500 dark:text-ink-400">
          <Link href="/compare" className="hover:text-ink-900 dark:hover:text-white">Compare</Link>{" "}
          › <span className="text-ink-800 dark:text-ink-200">{pair.headline}</span>
        </nav>

        <header className="mt-4 grid gap-4 sm:grid-cols-2">
          <SideHero sport={a} />
          <SideHero sport={b} />
        </header>

        <p className="mt-4 max-w-2xl text-base text-ink-600 dark:text-ink-300">{pair.rationale}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200/70 dark:border-ink-700/70">
          <table className="w-full text-sm">
            <thead className="bg-ink-50 dark:bg-ink-900">
              <tr>
                <th className="w-40 px-3 py-2 text-left font-semibold text-ink-500">Attribute</th>
                <th className="px-3 py-2 text-left font-semibold text-ink-900 dark:text-ink-50">{a.name}</th>
                <th className="px-3 py-2 text-left font-semibold text-ink-900 dark:text-ink-50">{b.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-500">{r.label}</td>
                  <td className="px-3 py-2 text-ink-800 dark:text-ink-100">{r.aValue}</td>
                  <td className="px-3 py-2 text-ink-800 dark:text-ink-100">{r.bValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-ink-500">
          Want a comparison we haven't made?{" "}
          <a href="mailto:hello@gemopedia.dev" className="underline">
            Suggest one
          </a>{" "}
          — we curate every pair by hand.
        </p>
      </div>
    </>
  );
}

function SideHero({ sport }: { sport: ReturnType<typeof getSport> }) {
  if (!sport) return null;
  const cat = CATEGORY_BY_SLUG[sport.category];
  return (
    <Link
      href={`/sports/${sport.slug}`}
      className={`rounded-3xl border border-ink-200/70 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} p-5 text-white shadow-lg dark:border-ink-700/70`}
    >
      <p className="text-2xl">{countryFlag(sport.countryOfOrigin)}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">{cat.name}</p>
      <h2 className="mt-1 font-display text-2xl font-bold">{sport.name}</h2>
      <p className="mt-2 text-sm text-white/95 line-clamp-3">{sport.shortDescription}</p>
    </Link>
  );
}

function labelType(t: string): string {
  return t === "team" ? "Team" : t === "individual" ? "Individual" : "Mixed";
}

function playersLabel(s: ReturnType<typeof getSport>): string {
  if (!s?.players) return "—";
  if (s.players.perTeam) return `${s.players.perTeam} per team`;
  if (s.players.min && s.players.max) return `${s.players.min}–${s.players.max}`;
  return s.players.note ?? "—";
}
