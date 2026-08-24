import React from "react";

/**
 * Shell for a STATIC illustrated diagram (not an animation).
 *
 * Diagrams are always-visible technical illustrations — a top-down field,
 * a fielding-positions map, a formation chart, a chess starting position.
 * Unlike `AnimationCanvas`, there's no play/pause — the SVG explains
 * itself.
 *
 * Every diagram component in `components/animation/diagrams/*` is a pure
 * SVG that fills its container. This shell adds a labelled frame, an
 * optional caption, and an optional legend.
 */
type LegendItem = { color: string; label: string };
type Props = {
  title?: string;
  description?: string;
  aspect?: `${number}/${number}`;
  legend?: LegendItem[];
  children: React.ReactNode;
  compact?: boolean;
};

export function DiagramCanvas({
  title,
  description,
  aspect = "16/9",
  legend,
  children,
  compact = false,
}: Props) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-ink-200/70 bg-white/85 shadow-sm dark:border-ink-700/70 dark:bg-ink-900/70 ${
        compact ? "p-2 sm:p-3" : "p-3 sm:p-4"
      }`}
    >
      {(title || description) && (
        <figcaption className={compact ? "px-1 pb-2" : "px-2 pb-3"}>
          {title && (
            <p className="text-sm font-semibold text-ink-900 dark:text-ink-50">{title}</p>
          )}
          {description && (
            <p className="mt-0.5 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
              {description}
            </p>
          )}
        </figcaption>
      )}

      <div
        className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-ink-50 to-ink-100 dark:from-ink-800/60 dark:to-ink-900"
        style={{ aspectRatio: aspect }}
      >
        {children}
      </div>

      {legend && legend.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 px-1 text-[11px] text-ink-600 dark:text-ink-300">
          {legend.map((l) => (
            <span key={l.label} className="inline-flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full border border-ink-300 dark:border-ink-600"
                style={{ background: l.color }}
              />
              {l.label}
            </span>
          ))}
        </div>
      )}
    </figure>
  );
}
