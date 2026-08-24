import type { Sport } from "@/lib/types";

import { solitaire } from "./solitaire";
import { uno } from "./uno";

/** Card games category — Poker, Bridge, Rummy, UNO, Magic: The Gathering. */
export const CARD_GAMES: Sport[] = [
  solitaire,
  uno,
];
