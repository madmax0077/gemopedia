import type { Sport } from "@/lib/types";

import { craps } from "./craps";
import { yahtzee } from "./yahtzee";

/** Dice games category — Yahtzee, Craps, Liar's Dice, Farkle. */
export const DICE_GAMES: Sport[] = [
  craps,
  yahtzee,
];
