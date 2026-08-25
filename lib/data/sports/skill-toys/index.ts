import type { Sport } from "@/lib/types";

import { devilSticks } from "./devil-sticks";
import { diabolo } from "./diabolo";
import { juggling } from "./juggling";
import { kendama } from "./kendama";
import { poi } from "./poi";
import { yoyo } from "./yoyo";

/** Skill toys category — Yo-yo, Kendama, Diabolo, Juggling, Poi, Devil Sticks. */
export const SKILL_TOYS_GAMES: Sport[] = [
  devilSticks,
  diabolo,
  juggling,
  kendama,
  poi,
  yoyo,
];
