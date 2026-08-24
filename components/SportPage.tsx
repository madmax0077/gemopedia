import Link from "next/link";
import type { Sport } from "@/lib/types";
import { CATEGORY_BY_SLUG } from "@/lib/data/categories";
import { countryFlag, countryName } from "@/lib/data/countries";
import { getSport } from "@/lib/data";
import { AnimationByKey } from "./animation/registry";
import { DiagramByKey } from "./animation/DiagramRegistry";
import type { DiagramRef, DiagramSlot } from "@/lib/types";
import { categoryIcon } from "@/lib/icons";
import type { SportHeroImage } from "@/lib/wikiImage";

/**
 * The one and only sport page.
 *
 * Reads a `Sport` record and renders 20 possible sections, each of which
 * returns null when its data is empty. This is deliberately the ONLY page
 * component for sport content in the entire app — see ARCHITECTURE.md §4.
 *
 * Adding a new sport does not touch this file.
 */
export function SportPage({
  sport,
  heroImage,
}: {
  sport: Sport;
  heroImage?: SportHeroImage | null;
}) {
  const cat = CATEGORY_BY_SLUG[sport.category];
  const slotDiagrams = (slot: DiagramSlot) => diagramsForSlot(sport.diagrams, slot);
  const defaultDiagrams = slotDiagrams("diagrams");
  return (
    <article className="container-narrow pb-24 pt-6 sm:pt-10">
      {/* Breadcrumbs */}
      <nav className="text-xs font-medium text-ink-500 dark:text-ink-400" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-ink-900 dark:hover:text-white">Gemopedia</Link></li>
          <li aria-hidden className="text-ink-300 dark:text-ink-600">/</li>
          <li><Link href="/sports" className="hover:text-ink-900 dark:hover:text-white">Sports</Link></li>
          <li aria-hidden className="text-ink-300 dark:text-ink-600">/</li>
          <li><Link href={`/categories/${cat.slug}`} className="hover:text-ink-900 dark:hover:text-white">{cat.name}</Link></li>
          <li aria-hidden className="text-ink-300 dark:text-ink-600">/</li>
          <li className="font-semibold text-ink-800 dark:text-ink-200">{sport.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header
        id="hero"
        className={`relative isolate mt-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} p-8 text-white shadow-soft-lg sm:p-10`}
      >
        {/* Full-bleed hero photo (Wikipedia). Sits underneath the tint layers. */}
        {heroImage?.src && (
          <img
            src={heroImage.src}
            alt={`${sport.name} — action photo`}
            aria-hidden
            loading="eager"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
          />
        )}
        {/* Category tint on top of the photo so text stays readable */}
        {heroImage?.src && (
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.hue.from} ${cat.hue.to} opacity-70 mix-blend-multiply`}
          />
        )}
        {/* Vertical fade so the bottom of the hero is always dark enough for text */}
        {heroImage?.src && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        )}

        {/* Atmosphere layers (still add depth) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.30),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.35),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] bg-[size:28px_28px] mix-blend-overlay" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        {/* Floating category glyph */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-3xl backdrop-blur-md sm:h-20 sm:w-20 sm:text-4xl"
        >
          {categoryIcon(cat.icon)}
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
            <Link
              href={`/categories/${cat.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm transition hover:bg-white/25"
            >
              {cat.name}
            </Link>
            {sport.countryOfOrigin && (
              <Link
                href={`/countries/${sport.countryOfOrigin}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm transition hover:bg-white/25"
              >
                <span className="text-sm leading-none">{countryFlag(sport.countryOfOrigin)}</span>
                {countryName(sport.countryOfOrigin)}
              </Link>
            )}
            {sport.isOlympic && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Olympic
              </span>
            )}
            {sport.era && (
              <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm">
                {sport.era.replace(/-/g, " ")}
              </span>
            )}
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
            {sport.name}
          </h1>
          {sport.officialName && sport.officialName !== sport.name && (
            <p className="mt-2 text-sm text-white/80">
              Officially <span className="font-semibold">{sport.officialName}</span>
            </p>
          )}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
            {sport.shortDescription}
          </p>

          {/* Hero quick facts strip */}
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-white/90">
            {sport.players?.perTeam && (
              <HeroChip icon="👥" label={`${sport.players.perTeam} per team`} />
            )}
            {sport.field?.surfaceName && <HeroChip icon="📐" label={sport.field.surfaceName} />}
            {sport.duration?.approximateMinutes && (
              <HeroChip icon="⏱" label={`~${sport.duration.approximateMinutes} min`} />
            )}
            {sport.indoorOutdoor && (
              <HeroChip icon="🌤" label={sport.indoorOutdoor.replace(/-/g, " ")} />
            )}
          </div>
        </div>

        {/* Photo attribution — small, tucked into the hero corner */}
        {heroImage?.src && (
          <a
            href={heroImage.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/85 backdrop-blur hover:bg-black/60 hover:text-white"
            title={`Photo via Wikipedia — “${heroImage.title}”. Click for full licence details.`}
          >
            <span aria-hidden>📷</span>
            Photo · Wikipedia
          </a>
        )}
      </header>

      {/* Table of contents */}
      <Toc sport={sport} />

      {/* Long description */}
      <Section id="what-is-it" title={`What is ${sport.name}?`} skip={!sport.longDescription}>
        <p className="text-base leading-relaxed text-ink-700 dark:text-ink-200">{sport.longDescription}</p>
      </Section>

      {/* Quick facts */}
      <QuickFacts sport={sport} />

      {/* How it works */}
      <Section
        id="how-it-works"
        title="How it works"
        skip={!sport.objective && !sport.matchStructure && slotDiagrams("how-it-works").length === 0}
      >
        {sport.objective && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Objective</h3>
            <p className="mt-1 text-ink-700 dark:text-ink-200">{sport.objective}</p>
          </div>
        )}
        {sport.matchStructure && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Match structure</h3>
            <p className="mt-1 text-ink-700 dark:text-ink-200">{sport.matchStructure}</p>
          </div>
        )}
        <DiagramGrid diagrams={slotDiagrams("how-it-works")} />
      </Section>

      {/* Dedicated diagrams section (default slot) */}
      {defaultDiagrams.length > 0 && (
        <Section id="diagrams" title="Diagrams">
          <p className="text-sm text-ink-600 dark:text-ink-300">
            Every court, pitch, or arena drawn to scale — plus formations,
            positions, and the anatomy of scoring. Look here first if the
            words feel abstract.
          </p>
          <DiagramGrid diagrams={defaultDiagrams} className="mt-4" />
        </Section>
      )}

      {/* Animations */}
      {sport.animations && sport.animations.length > 0 && (
        <Section id="animations" title="See how it works">
          <div className="grid gap-6">
            {sport.animations.map((a) => (
              <div key={a.id}>
                <h3 className="text-lg font-semibold text-ink-900 dark:text-ink-50">{a.title}</h3>
                {a.description && (
                  <p className="mb-3 text-sm text-ink-600 dark:text-ink-300">{a.description}</p>
                )}
                <AnimationByKey component={a.component} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Rules */}
      <Section
        id="rules"
        title="Rules"
        skip={!sport.basicRules?.length && !sport.advancedRules?.length && slotDiagrams("rules").length === 0}
      >
        {sport.basicRules && sport.basicRules.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Basic rules</h3>
            <RuleList items={sport.basicRules} />
          </div>
        )}
        <DiagramGrid diagrams={slotDiagrams("rules")} className="mt-6" />
        {sport.advancedRules && sport.advancedRules.length > 0 && (
          <div className="mt-6" id="advanced-rules">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Advanced rules</h3>
            <RuleList items={sport.advancedRules} />
          </div>
        )}
      </Section>

      {/* Scoring */}
      <Section id="scoring" title="Scoring" skip={!sport.scoring && slotDiagrams("scoring").length === 0}>
        {sport.scoring?.summary && (
          <p className="text-ink-700 dark:text-ink-200">{sport.scoring.summary}</p>
        )}
        {sport.scoring?.breakdown && sport.scoring.breakdown.length > 0 && (
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink-200/70 dark:border-ink-700/70">
            <table className="w-full text-sm">
              <thead className="bg-ink-50 dark:bg-ink-900">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-ink-700 dark:text-ink-200">Action</th>
                  <th className="px-3 py-2 text-left font-semibold text-ink-700 dark:text-ink-200">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
                {sport.scoring.breakdown.map((row) => (
                  <tr key={row.action}>
                    <td className="px-3 py-2 text-ink-800 dark:text-ink-100">{row.action}</td>
                    <td className="px-3 py-2 font-medium text-ink-900 dark:text-ink-50">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {sport.scoring?.winCondition && (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100">
            <strong>Win condition · </strong>
            {sport.scoring.winCondition}
          </p>
        )}
        <DiagramGrid diagrams={slotDiagrams("scoring")} className="mt-6" />
      </Section>

      {/* Playing area */}
      <Section id="playing-area" title="Playing area" skip={!sport.field && slotDiagrams("playing-area").length === 0}>
        <div className="grid gap-6 sm:grid-cols-2">
          {sport.field?.surfaceName && (
            <Fact label="Called" value={sport.field.surfaceName} />
          )}
          {sport.field?.dimensions && (
            <Fact label="Dimensions" value={sport.field.dimensions} />
          )}
        </div>
        {sport.field?.description && (
          <p className="mt-4 text-ink-700 dark:text-ink-200">{sport.field.description}</p>
        )}
        <DiagramGrid diagrams={slotDiagrams("playing-area")} className="mt-6" />
      </Section>

      {/* Equipment */}
      <Section id="equipment" title="Equipment" skip={!sport.equipment?.length}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {(sport.equipment ?? []).map((e) => (
            <li key={e.name} className="surface-card p-3">
              <p className="font-semibold text-ink-900 dark:text-ink-50">{e.name}</p>
              {e.description && (
                <p className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">{e.description}</p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Positions */}
      <Section id="positions" title="Positions & roles" skip={!sport.positions?.length && slotDiagrams("positions").length === 0}>
        {sport.positions && sport.positions.length > 0 && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {sport.positions.map((p) => (
              <li key={p.name} className="surface-card p-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-ink-900 dark:text-ink-50">{p.name}</p>
                  {p.count && (
                    <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                      ×{p.count}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">{p.role}</p>
              </li>
            ))}
          </ul>
        )}
        <DiagramGrid diagrams={slotDiagrams("positions")} className="mt-6" />
      </Section>

      {/* Officiating */}
      <Section id="officiating" title="Officiating" skip={!sport.officiating}>
        {sport.officiating?.summary && (
          <p className="text-ink-700 dark:text-ink-200">{sport.officiating.summary}</p>
        )}
        {sport.officiating?.officials && sport.officiating.officials.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {sport.officiating.officials.map((o) => (
              <li key={o} className="rounded-full bg-ink-100 px-3 py-1 text-sm text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                {o}
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* Penalties & Fouls */}
      <Section
        id="penalties"
        title="Penalties & fouls"
        skip={!sport.penalties?.length && !sport.fouls?.length}
      >
        {sport.penalties && sport.penalties.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Penalties</h3>
            <RuleList items={sport.penalties} />
          </div>
        )}
        {sport.fouls && sport.fouls.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Fouls</h3>
            <RuleList items={sport.fouls} />
          </div>
        )}
      </Section>

      {/* Strategies */}
      <Section id="strategies" title="Strategies" skip={!sport.strategies?.length}>
        <RuleList items={sport.strategies ?? []} />
      </Section>

      {/* Terminology */}
      <Section id="terminology" title="Terminology" skip={!sport.terminology?.length}>
        <dl className="grid gap-3 sm:grid-cols-2">
          {(sport.terminology ?? []).map((t) => (
            <div key={t.term} className="surface-card p-3">
              <dt className="text-sm font-semibold text-ink-900 dark:text-ink-50">{t.term}</dt>
              <dd className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">{t.meaning}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Major competitions */}
      <Section id="competitions" title="Major competitions" skip={!sport.majorCompetitions?.length}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {(sport.majorCompetitions ?? []).map((c) => (
            <li key={c.name} className="surface-card p-3">
              <p className="font-semibold text-ink-900 dark:text-ink-50">{c.name}</p>
              <p className="text-xs uppercase tracking-wider text-ink-500">
                {[c.frequency, c.region, c.founded ? `since ${c.founded}` : null].filter(Boolean).join(" · ")}
              </p>
              {c.note && <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{c.note}</p>}
            </li>
          ))}
        </ul>
      </Section>

      {/* Countries played */}
      <Section id="countries" title="Where it is played" skip={!sport.countriesPlayed?.length}>
        <ul className="flex flex-wrap gap-2">
          {(sport.countriesPlayed ?? []).map((code) => (
            <li key={code}>
              <Link
                href={`/countries/${code}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-sm text-ink-800 hover:border-indigo-400 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
              >
                <span>{countryFlag(code)}</span>
                {countryName(code)}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Governing bodies */}
      <Section id="governing" title="Governing bodies" skip={!sport.governingBodies?.length}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {(sport.governingBodies ?? []).map((g) => (
            <li key={g.name} className="surface-card p-3">
              <p className="font-semibold text-ink-900 dark:text-ink-50">
                {g.name}
                {g.acronym && <span className="ml-2 rounded-full bg-ink-100 px-1.5 py-0.5 text-[10px] font-bold text-ink-700 dark:bg-ink-800 dark:text-ink-200">{g.acronym}</span>}
              </p>
              <p className="mt-1 text-xs text-ink-500">
                {[g.founded ? `Founded ${g.founded}` : null, g.headquarters].filter(Boolean).join(" · ")}
              </p>
              {g.website && (
                <a href={g.website} className="mt-1 inline-block text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-300" target="_blank" rel="noopener">
                  Official site ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Famous athletes / records */}
      <Section
        id="records"
        title="Famous names & records"
        skip={!sport.famousAthletes?.length && !sport.records?.length}
      >
        {sport.famousAthletes && sport.famousAthletes.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Famous athletes</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {sport.famousAthletes.map((n) => (
                <li key={n} className="rounded-full bg-ink-100 px-3 py-1 text-sm text-ink-800 dark:bg-ink-800 dark:text-ink-200">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
        {sport.records && sport.records.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Records</h3>
            <ul className="mt-2 space-y-2">
              {sport.records.map((r) => (
                <li key={r.title} className="surface-card p-3 text-sm">
                  <p className="font-semibold text-ink-900 dark:text-ink-50">{r.title}</p>
                  <p className="text-ink-600 dark:text-ink-300">{r.holder} — {r.value}{r.year ? ` (${r.year})` : ""}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Variants & related */}
      <Section
        id="related"
        title="Variants & related sports"
        skip={!sport.variants?.length && !sport.relatedSports?.length}
      >
        {sport.variants && sport.variants.length > 0 && (
          <div id="variants">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Variants & disciplines</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {sport.variants.map((v) => (
                <SlugChip key={v} slug={v} fallback={v.replace(/-/g, " ")} />
              ))}
            </ul>
          </div>
        )}
        {sport.relatedSports && sport.relatedSports.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Related sports</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {sport.relatedSports.map((v) => (
                <SlugChip key={v} slug={v} fallback={v.replace(/-/g, " ")} />
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Learning paths */}
      <Section id="learn" title="Learn this sport" skip={!sport.learningPaths?.length}>
        <div className="grid gap-6 md:grid-cols-2">
          {(sport.learningPaths ?? []).map((path) => (
            <div key={path.level} className="surface-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                {path.level}
              </p>
              <ol className="mt-2 space-y-2">
                {path.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-indigo-100 text-center text-xs font-bold leading-5 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                      {i + 1}
                    </span>
                    <div>
                      {s.anchor ? (
                        <Link href={`#${s.anchor}`} className="font-medium text-ink-900 hover:underline dark:text-ink-50">
                          {s.title}
                        </Link>
                      ) : (
                        <p className="font-medium text-ink-900 dark:text-ink-50">{s.title}</p>
                      )}
                      <p className="text-sm text-ink-600 dark:text-ink-300">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Frequently asked" skip={!sport.faq?.length}>
        <div className="divide-y divide-ink-200 rounded-2xl border border-ink-200/70 bg-white dark:divide-ink-800 dark:border-ink-700/70 dark:bg-ink-900/60">
          {(sport.faq ?? []).map((f) => (
            <details key={f.question} className="group px-4 py-3 open:bg-ink-50/50 dark:open:bg-ink-800/40">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-900 marker:hidden dark:text-ink-50">
                {f.question}
                <span className="float-right text-indigo-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section id="sources" title="Sources & provenance" skip={!sport.sources?.length && !sport.lastVerified}>
        {sport.sources && sport.sources.length > 0 && (
          <ul className="space-y-2">
            {sport.sources.map((s, i) => (
              <li key={i} className="text-sm text-ink-700 dark:text-ink-200">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener" className="underline hover:text-indigo-600 dark:hover:text-indigo-300">
                    {s.label}
                  </a>
                ) : (
                  s.label
                )}
                {s.publisher && <span className="ml-2 text-ink-500">— {s.publisher}</span>}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink-500">
          {sport.lastVerified && <span>Last verified {sport.lastVerified}.</span>}
          {sport.confidence && (
            <span
              className={`rounded-full px-2 py-0.5 font-semibold uppercase tracking-wider ${confidenceClass(sport.confidence)}`}
            >
              {sport.confidence}
            </span>
          )}
        </div>
      </Section>
    </article>
  );
}

/* -------------------------------------------------------------------------- */

function Section({
  id,
  title,
  children,
  skip = false,
}: {
  id: string;
  title: string;
  children?: React.ReactNode;
  skip?: boolean;
}) {
  if (skip) return null;
  return (
    <section id={id} className="mt-10 scroll-mt-24">
      <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50 sm:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function HeroChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 capitalize backdrop-blur-sm">
      <span className="text-sm leading-none">{icon}</span>
      {label}
    </span>
  );
}

function Toc({ sport }: { sport: Sport }) {
  const hasDefaultDiagrams = diagramsForSlot(sport.diagrams, "diagrams").length > 0;
  const items: { id: string; label: string; skip?: boolean }[] = [
    { id: "what-is-it", label: "Overview", skip: !sport.longDescription },
    { id: "quick-facts", label: "Quick facts" },
    { id: "how-it-works", label: "How it works", skip: !sport.objective && !sport.matchStructure },
    { id: "diagrams", label: "Diagrams", skip: !hasDefaultDiagrams },
    { id: "animations", label: "See it move", skip: !sport.animations?.length },
    { id: "rules", label: "Rules", skip: !sport.basicRules?.length && !sport.advancedRules?.length },
    { id: "scoring", label: "Scoring", skip: !sport.scoring },
    { id: "playing-area", label: "Playing area", skip: !sport.field },
    { id: "equipment", label: "Equipment", skip: !sport.equipment?.length },
    { id: "positions", label: "Positions", skip: !sport.positions?.length },
    { id: "terminology", label: "Terminology", skip: !sport.terminology?.length },
    { id: "competitions", label: "Competitions", skip: !sport.majorCompetitions?.length },
    { id: "learn", label: "Learn", skip: !sport.learningPaths?.length },
    { id: "faq", label: "FAQ", skip: !sport.faq?.length },
    { id: "sources", label: "Sources", skip: !sport.sources?.length },
  ];
  const visible = items.filter((i) => !i.skip);
  return (
    <nav
      className="glass sticky top-16 z-30 -mx-4 mt-6 flex flex-wrap items-center gap-1.5 rounded-none border-x-0 px-4 py-3 sm:mx-0 sm:rounded-2xl sm:border-x"
      aria-label="On this page"
    >
      <span className="mr-1 hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 sm:inline dark:text-ink-400">
        On this page
      </span>
      {visible.map((i) => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className="rounded-full border border-ink-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-ink-950 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:text-white"
        >
          {i.label}
        </a>
      ))}
    </nav>
  );
}

function QuickFacts({ sport }: { sport: Sport }) {
  const rows: { label: string; value: string | null }[] = [
    { label: "Category", value: CATEGORY_BY_SLUG[sport.category].name },
    { label: "Type", value: sport.sportType === "team" ? "Team sport" : sport.sportType === "individual" ? "Individual" : "Mixed" },
    { label: "Players", value: playersLabel(sport) },
    { label: "Duration", value: sport.duration?.approximateMinutes ? `~${sport.duration.approximateMinutes} min` : sport.duration?.structure ?? null },
    { label: "Where played", value: sport.indoorOutdoor ? sport.indoorOutdoor.replace(/-/g, " ") : null },
    { label: "Field / court", value: sport.field?.surfaceName ?? null },
    { label: "Country of origin", value: sport.countryOfOrigin ? `${countryFlag(sport.countryOfOrigin)}  ${countryName(sport.countryOfOrigin)}` : null },
    { label: "Estimated origin", value: sport.estimatedOrigin ?? null },
    { label: "Olympic", value: sport.isOlympic ? "Yes" : "No" },
    { label: "Popularity", value: sport.popularity ?? null },
  ].filter((r) => r.value);

  if (!rows.length) return null;
  return (
    <section id="quick-facts" className="mt-10 scroll-mt-24">
      <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-50 sm:text-3xl">Quick facts</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => (
          <Fact key={r.label} label={r.label} value={r.value!} />
        ))}
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white/85 px-4 py-3 dark:border-ink-700/70 dark:bg-ink-900/60">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink-900 dark:text-ink-50">{value}</p>
    </div>
  );
}

function playersLabel(sport: Sport): string | null {
  if (!sport.players) return null;
  if (sport.players.perTeam) return `${sport.players.perTeam} per team`;
  if (sport.players.min && sport.players.max) return `${sport.players.min}–${sport.players.max}`;
  if (sport.players.note) return sport.players.note;
  return null;
}

function RuleList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="mt-3 space-y-3">
      {items.map((r) => (
        <li key={r.title} className="surface-card p-4">
          <p className="font-semibold text-ink-900 dark:text-ink-50">{r.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-700 dark:text-ink-200">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

function SlugChip({ slug, fallback }: { slug: string; fallback: string }) {
  const found = getSport(slug);
  if (found) {
    return (
      <li>
        <Link
          href={`/sports/${found.slug}`}
          className="rounded-full border border-ink-200 bg-white px-3 py-1 text-sm text-ink-800 hover:border-indigo-400 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
        >
          {found.name} →
        </Link>
      </li>
    );
  }
  return (
    <li>
      <span className="cursor-not-allowed rounded-full border border-dashed border-ink-300 bg-ink-50 px-3 py-1 text-sm capitalize text-ink-500 dark:border-ink-700 dark:bg-ink-900/40 dark:text-ink-400">
        {fallback}
      </span>
    </li>
  );
}

/**
 * Filters a sport's `diagrams` array by slot. Missing `slot` defaults to
 * "diagrams" (the dedicated section) so a diagram author never has to
 * choose a slot explicitly for the general case.
 */
function diagramsForSlot(diagrams: DiagramRef[] | undefined, slot: DiagramSlot): DiagramRef[] {
  if (!diagrams || diagrams.length === 0) return [];
  return diagrams.filter((d) => (d.slot ?? "diagrams") === slot);
}

function DiagramGrid({ diagrams, className }: { diagrams: DiagramRef[]; className?: string }) {
  if (!diagrams || diagrams.length === 0) return null;
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className ?? ""}`}>
      {diagrams.map((d) => (
        <div key={d.id}>
          <DiagramByKey componentKey={d.component} />
          {d.description && !isRegistryDescriptor(d) && (
            <p className="mt-1 px-1 text-xs text-ink-500 dark:text-ink-400">{d.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * The `DiagramCanvas` shell already renders its own title + description,
 * so the outer caption should stay silent unless a sport explicitly
 * requests one. Reserved for future variants; today we defer entirely to
 * the shell.
 */
function isRegistryDescriptor(_d: DiagramRef): boolean {
  return true;
}

function confidenceClass(c: string): string {
  switch (c) {
    case "verified": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200";
    case "community": return "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200";
    case "historical": return "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200";
    case "estimated": return "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200";
    default: return "bg-ink-100 text-ink-800 dark:bg-ink-800 dark:text-ink-200";
  }
}
