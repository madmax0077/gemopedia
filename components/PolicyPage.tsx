import type { ReactNode } from "react";

export function PolicyPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <article className="container-page pb-20 pt-6 sm:pt-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
          Gemopedia
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 dark:text-ink-50 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-300">{lede}</p>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">Last updated 20 October 2026</p>
      </header>
      <div className="mt-8 max-w-3xl space-y-8 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
        {children}
      </div>
    </article>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-ink-900 dark:text-ink-50">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}
