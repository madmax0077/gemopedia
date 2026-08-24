"use client";
import React from "react";
import { CricketLBW } from "./sport/CricketLBW";
import { FootballOffside } from "./sport/FootballOffside";
import { KabaddiRaid } from "./sport/KabaddiRaid";
import { SumoDohyo } from "./sport/SumoDohyo";

/**
 * Animation registry — connects the `component` string in a Sport's
 * `animations[]` field to the actual React component.
 *
 * Adding a new animation:
 *   1. Write a composed animation component under `sport/`.
 *   2. Import it here and add the key.
 *   3. Reference the key from the sport record's `animations` field.
 *
 * That's it — the universal SportPage picks it up.
 */
export const ANIMATION_REGISTRY: Record<string, React.ComponentType> = {
  CricketLBW,
  FootballOffside,
  KabaddiRaid,
  SumoDohyo,
};

export function AnimationByKey({ component }: { component: string }) {
  const Cmp = ANIMATION_REGISTRY[component];
  if (!Cmp) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-300 bg-ink-50 p-6 text-center text-sm text-ink-500 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-400">
        Animation <code className="font-mono">{component}</code> not registered yet.
      </div>
    );
  }
  return <Cmp />;
}
