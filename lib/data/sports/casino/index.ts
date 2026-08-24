import type { Sport } from "@/lib/types";

import { baccarat } from "./baccarat";
import { bingo } from "./bingo";
import { blackjack } from "./blackjack";
import { craps } from "./craps";
import { roulette } from "./roulette";
import { teenPatti } from "./teen-patti";

/** Casino & gambling games category — Roulette, Blackjack, Baccarat, Craps. */
export const CASINO_GAMES: Sport[] = [
  baccarat,
  bingo,
  blackjack,
  craps,
  roulette,
  teenPatti,
];
