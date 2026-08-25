import type { Sport } from "@/lib/types";

import { devilSticks } from "./devil-sticks";
import { diabolo } from "./diabolo";
import { fingerboarding } from "./fingerboarding";
import { hackySack } from "./hacky-sack";
import { juggling } from "./juggling";
import { kendama } from "./kendama";
import { poi } from "./poi";
import { yoyo } from "./yoyo";

/** Skill toys category — Yo-yo, Kendama, Diabolo, Juggling, Poi, Devil Sticks, Hacky Sack, Fingerboarding. */
export const SKILL_TOYS_GAMES: Sport[] = [
  devilSticks,
  diabolo,
  fingerboarding,
  hackySack,
  juggling,
  kendama,
  poi,
  yoyo,
];
