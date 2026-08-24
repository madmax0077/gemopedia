import type { Sport } from "@/lib/types";

import { ginRummy } from "./gin-rummy";
import { magicTheGathering } from "./magic-the-gathering";
import { solitaire } from "./solitaire";
import { uno } from "./uno";

/** Card games category — Poker, Bridge, Rummy, UNO, Magic: The Gathering. */
export const CARD_GAMES: Sport[] = [
  ginRummy,
  magicTheGathering,
  solitaire,
  uno,
];
