import type { Sport } from "@/lib/types";

import { bunco } from "./bunco";
import { craps } from "./craps";
import { diceForge } from "./dice-forge";
import { elderSign } from "./elder-sign";
import { farkle } from "./farkle";
import { liarsDice } from "./liars-dice";
import { martianDice } from "./martian-dice";
import { pigGame } from "./pig-game";
import { qwixx } from "./qwixx";
import { rollThroughTheAges } from "./roll-through-the-ages";
import { rorysStoryCubes } from "./rorys-story-cubes";
import { sagrada } from "./sagrada";
import { shipCaptainCrew } from "./ship-captain-crew";
import { shutTheBox } from "./shut-the-box";
import { tenzi } from "./tenzi";
import { yahtzee } from "./yahtzee";
import { zombieDice } from "./zombie-dice";

/**
 * Dice games category.
 * Sourced from `lib/data/sports/dice/*.ts`.
 */
export const DICE_GAMES: Sport[] = [
  bunco,
  craps,
  diceForge,
  elderSign,
  farkle,
  liarsDice,
  martianDice,
  pigGame,
  qwixx,
  rollThroughTheAges,
  rorysStoryCubes,
  sagrada,
  shipCaptainCrew,
  shutTheBox,
  tenzi,
  yahtzee,
  zombieDice,
];

