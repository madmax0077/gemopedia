import type { Sport } from "@/lib/types";

import { belote } from "./belote";
import { briscola } from "./briscola";
import { canasta } from "./canasta";
import { coup } from "./coup";
import { crazyEights } from "./crazy-eights";
import { cribbage } from "./cribbage";
import { disneyLorcana } from "./disney-lorcana";
import { dixit } from "./dixit";
import { durak } from "./durak";
import { euchre } from "./euchre";
import { fiveCardDraw } from "./five-card-draw";
import { fiveHundred } from "./five-hundred";
import { fleshAndBlood } from "./flesh-and-blood";
import { freecell } from "./freecell";
import { frenchTarot } from "./french-tarot";
import { ginRummy } from "./gin-rummy";
import { goFish } from "./go-fish";
import { hanafuda } from "./hanafuda";
import { hearts } from "./hearts";
import { klondikeSolitaire } from "./klondike-solitaire";
import { loveLetter } from "./love-letter";
import { magicTheGathering } from "./magic-the-gathering";
import { oldMaid } from "./old-maid";
import { omahaPoker } from "./omaha-poker";
import { onePieceTcg } from "./one-piece-tcg";
import { pinochle } from "./pinochle";
import { pokemonTcg } from "./pokemon-tcg";
import { scopa } from "./scopa";
import { sevenCardStud } from "./seven-card-stud";
import { skat } from "./skat";
import { solitaire } from "./solitaire";
import { spades } from "./spades";
import { spiderSolitaire } from "./spider-solitaire";
import { tarot } from "./tarot";
import { texasHoldem } from "./texas-holdem";
import { uno } from "./uno";
import { warCardGame } from "./war-card-game";
import { whist } from "./whist";
import { yuGiOh } from "./yu-gi-oh";

/** Card games category — Poker (Texas Holdem, Omaha, 7-Card Stud, 5-Card Draw), Bridge, Rummy, UNO, MTG, Pokémon TCG, Yu-Gi-Oh, Disney Lorcana, Flesh and Blood, One Piece TCG, solitaire, and regional classics (Belote, Pinochle, Skat, Tarot, Hanafuda, Canasta, Durak, Briscola, Scopa, French Tarot, Australian 500) + storytelling (Dixit) + microgames + bluffing (Love Letter, Coup). */
export const CARD_GAMES: Sport[] = [
  belote,
  briscola,
  canasta,
  coup,
  crazyEights,
  cribbage,
  disneyLorcana,
  dixit,
  durak,
  euchre,
  fiveCardDraw,
  fiveHundred,
  fleshAndBlood,
  freecell,
  frenchTarot,
  ginRummy,
  goFish,
  hanafuda,
  hearts,
  klondikeSolitaire,
  loveLetter,
  magicTheGathering,
  oldMaid,
  omahaPoker,
  onePieceTcg,
  pinochle,
  pokemonTcg,
  scopa,
  sevenCardStud,
  skat,
  solitaire,
  spades,
  spiderSolitaire,
  tarot,
  texasHoldem,
  uno,
  warCardGame,
  whist,
  yuGiOh,
];
