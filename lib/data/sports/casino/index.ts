import type { Sport } from "@/lib/types";

import { baccarat } from "./baccarat";
import { blackjack } from "./blackjack";

/** Casino & gambling games category — Roulette, Blackjack, Baccarat, Craps. */
export const CASINO_GAMES: Sport[] = [
  baccarat,
  blackjack,
];
