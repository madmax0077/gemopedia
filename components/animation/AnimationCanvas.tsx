"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * Shared "playback" shell used by every composed animation on Gemopedia.
 *
 * Composed animations are pure SVGs that read a single `progress` value
 * (0 → 1) driven by this shell. That means:
 *   - authoring a new animation is "given progress, where is everything?"
 *   - no per-animation timers, RAF loops or state machines needed
 *   - the shell handles Play / Pause / Restart / Speed uniformly
 *
 * Usage:
 *   <AnimationCanvas duration={4}>
 *     {(p) => <YourSvg progress={p} />}
 *   </AnimationCanvas>
 */
type Props = {
  duration?: number; // seconds
  autoPlay?: boolean;
  aspect?: `${number}/${number}`;
  children: (progress: number) => React.ReactNode;
  caption?: string;
};

export function AnimationCanvas({
  duration = 4,
  autoPlay = true,
  aspect = "16/9",
  children,
  caption,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [speed, setSpeed] = useState(1);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let cancelled = false;
    startRef.current = null;

    function step(now: number) {
      if (cancelled) return;
      if (startRef.current === null) startRef.current = now - progress * duration * 1000;
      const p = Math.min(1, (now - startRef.current) / (duration * 1000 / speed));
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPlaying(false);
      }
    }
    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, duration, speed]);

  return (
    <div className="rounded-3xl border border-ink-200/70 bg-white/85 p-3 shadow-sm dark:border-ink-700/70 dark:bg-ink-900/70 sm:p-4">
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink-100 to-ink-200 dark:from-ink-800 dark:to-ink-900"
        style={{ aspectRatio: aspect }}
      >
        {children(progress)}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          onClick={() => {
            if (progress >= 1) setProgress(0);
            setPlaying((p) => !p);
          }}
          className="rounded-full bg-ink-900 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
        >
          {playing ? "❚❚ Pause" : progress >= 1 ? "↺ Replay" : "▶ Play"}
        </button>

        <input
          aria-label="Scrub"
          type="range"
          min={0}
          max={1000}
          value={Math.round(progress * 1000)}
          onChange={(e) => {
            setPlaying(false);
            setProgress(Number(e.currentTarget.value) / 1000);
            startRef.current = null;
          }}
          className="h-1 flex-1 min-w-[120px] accent-indigo-500"
        />

        <div className="flex items-center gap-1 text-[11px] font-medium text-ink-500 dark:text-ink-400">
          {[0.5, 1, 1.5].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`rounded-full px-2 py-0.5 ${
                speed === s
                  ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                  : "bg-ink-100 dark:bg-ink-800"
              }`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {caption && (
        <p className="mt-2 text-xs leading-relaxed text-ink-600 dark:text-ink-300">{caption}</p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Primitive helpers used by composed animations                              */
/* -------------------------------------------------------------------------- */

/** Ease a value in-out — used to smooth linear progress into natural motion. */
export function ease(p: number): number {
  return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
