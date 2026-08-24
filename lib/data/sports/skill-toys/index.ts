import type { Sport } from "@/lib/types";

import { diabolo } from "./diabolo";
import { juggling } from "./juggling";
import { kendama } from "./kendama";
import { yoyo } from "./yoyo";

/** Skill toys category — Yo-yo, Kendama, Diabolo, Juggling, Speedcubing. */
export const SKILL_TOYS_GAMES: Sport[] = [
  diabolo,
  juggling,
  kendama,
  yoyo,
];
