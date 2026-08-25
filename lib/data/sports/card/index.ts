import type { Sport } from "@/lib/types";

import { belote } from "./belote";
import { canasta } from "./canasta";
import { crazyEights } from "./crazy-eights";
import { cribbage } from "./cribbage";
import { euchre } from "./euchre";
import { freecell } from "./freecell";
import { ginRummy } from "./gin-rummy";
import { hanafuda } from "./hanafuda";
import { hearts } from "./hearts";
import { klondikeSolitaire } from "./klondike-solitaire";
import { magicTheGathering } from "./magic-the-gathering";
import { omahaPoker } from "./omaha-poker";
import { pinochle } from "./pinochle";
import { pokemonTcg } from "./pokemon-tcg";
import { skat } from "./skat";
import { solitaire } from "./solitaire";
import { spades } from "./spades";
import { spiderSolitaire } from "./spider-solitaire";
import { tarot } from "./tarot";
import { texasHoldem } from "./texas-holdem";
import { uno } from "./uno";
import { whist } from "./whist";
import { yuGiOh } from "./yu-gi-oh";

/** Card games category — Poker, Bridge, Rummy, UNO, MTG, Pokémon TCG, Yu-Gi-Oh + solitaire variants + regional games (Belote, Pinochle, Skat, Tarot, Hanafuda, Canasta). */
export const CARD_GAMES: Sport[] = [
  belote,
  canasta,
  crazyEights,
  cribbage,
  euchre,
  freecell,
  ginRummy,
  hanafuda,
  hearts,
  klondikeSolitaire,
  magicTheGathering,
  omahaPoker,
  pinochle,
  pokemonTcg,
  skat,
  solitaire,
  spades,
  spiderSolitaire,
  tarot,
  texasHoldem,
  uno,
  whist,
  yuGiOh,
];
