import type { Sport } from "@/lib/types";

import { crazyEights } from "./crazy-eights";
import { cribbage } from "./cribbage";
import { euchre } from "./euchre";
import { ginRummy } from "./gin-rummy";
import { hearts } from "./hearts";
import { magicTheGathering } from "./magic-the-gathering";
import { pokemonTcg } from "./pokemon-tcg";
import { solitaire } from "./solitaire";
import { spades } from "./spades";
import { texasHoldem } from "./texas-holdem";
import { uno } from "./uno";
import { whist } from "./whist";
import { yuGiOh } from "./yu-gi-oh";

/** Card games category — Poker, Bridge, Rummy, UNO, Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh, Whist, Spades, Euchre, Cribbage, Crazy Eights, Hearts, Texas Hold'em. */
export const CARD_GAMES: Sport[] = [
  crazyEights,
  cribbage,
  euchre,
  ginRummy,
  hearts,
  magicTheGathering,
  pokemonTcg,
  solitaire,
  spades,
  texasHoldem,
  uno,
  whist,
  yuGiOh,
];
