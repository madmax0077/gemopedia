import type { Sport } from "@/lib/types";

import { ageOfSigmar } from "./age-of-sigmar";
import { warhammer40k } from "./warhammer-40000";

/** Wargames category — Warhammer 40k, Age of Sigmar, Bolt Action, Flames of War, X-Wing. */
export const WARGAMES_GAMES: Sport[] = [
  ageOfSigmar,
  warhammer40k,
];
