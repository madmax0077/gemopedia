import type { Sport } from "@/lib/types";

import { craps } from "./craps";
import { farkle } from "./farkle";
import { liarsDice } from "./liars-dice";
import { pigGame } from "./pig-game";
import { yahtzee } from "./yahtzee";

/** Dice games category — Yahtzee, Craps, Liar's Dice, Farkle, Pig (canonical push-your-luck game). */
export const DICE_GAMES: Sport[] = [
  craps,
  farkle,
  liarsDice,
  pigGame,
  yahtzee,
];
