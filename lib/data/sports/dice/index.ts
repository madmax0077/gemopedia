import type { Sport } from "@/lib/types";

import { craps } from "./craps";
import { farkle } from "./farkle";
import { liarsDice } from "./liars-dice";
import { pigGame } from "./pig-game";
import { qwixx } from "./qwixx";
import { rorysStoryCubes } from "./rorys-story-cubes";
import { sagrada } from "./sagrada";
import { yahtzee } from "./yahtzee";
import { zombieDice } from "./zombie-dice";

/** Dice games category — Yahtzee, Craps, Liar's Dice, Farkle, Pig (canonical push-your-luck game), Qwixx (modern roll-and-write), Sagrada (dice drafting), Zombie Dice (press-your-luck filler), Rory's Story Cubes (storytelling). */
export const DICE_GAMES: Sport[] = [
  craps,
  farkle,
  liarsDice,
  pigGame,
  qwixx,
  rorysStoryCubes,
  sagrada,
  yahtzee,
  zombieDice,
];
