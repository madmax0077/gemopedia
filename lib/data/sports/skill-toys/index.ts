import type { Sport } from "@/lib/types";

import { kendama } from "./kendama";
import { yoyo } from "./yoyo";

/** Skill toys category — Yo-yo, Kendama, Diabolo, juggling, speedcubing. */
export const SKILL_TOYS_GAMES: Sport[] = [
  kendama,
  yoyo,
];
