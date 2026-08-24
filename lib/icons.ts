/**
 * Tiny icon map used by category tiles.
 *
 * `lib/data/categories.ts` stores an `icon` string key per category; this
 * helper resolves it to a friendly glyph so the category cards render a
 * clear symbol without pulling in an icon library.
 *
 * Add a new category → add its key here.
 */
const ICONS: Record<string, string> = {
  ball: "⚽",
  racket: "🎾",
  fist: "🥊",
  run: "🏃",
  wave: "🌊",
  snowflake: "❄️",
  wheel: "🏎️",
  horse: "🐎",
  target: "🎯",
  dumbbell: "🏋️",
  sparkles: "✨",
  mountain: "🏔️",
  brain: "🧠",
  globe: "🌍",
  controller: "🎮",
  wind: "🪂",
  /* ── Tabletop & modern-games taxonomy ── */
  board: "♟️",
  card: "🃏",
  dice: "🎲",
  tiles: "🀄",
  wizard: "🧙",
  swords: "⚔️",
  party: "🎉",
  swing: "🛝",
  puzzle: "🧩",
  console: "🕹️",
  chip: "🎰",
  key: "🗝️",
};

export function categoryIcon(key: string | undefined): string {
  if (!key) return "🎽";
  return ICONS[key] ?? "🎽";
}
