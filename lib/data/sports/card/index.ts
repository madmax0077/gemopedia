import type { Sport } from "@/lib/types";

import { crazyEights } from "./crazy-eights";
import { cribbage } from "./cribbage";
import { euchre } from "./euchre";
import { ginRummy } from "./gin-rummy";
import { magicTheGathering } from "./magic-the-gathering";
import { solitaire } from "./solitaire";
import { spades } from "./spades";
import { uno } from "./uno";
import { whist } from "./whist";

/** Card games category — Poker, Bridge, Rummy, UNO, Magic: The Gathering, Whist, Spades, Euchre, Cribbage, Crazy Eights. */
export const CARD_GAMES: Sport[] = [
  crazyEights,
  cribbage,
  euchre,
  ginRummy,
  magicTheGathering,
  solitaire,
  spades,
  uno,
  whist,
];
