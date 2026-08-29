import type { Sport } from "@/lib/types";

import { dominoes } from "./dominoes";
import { hongKongMahjong } from "./hong-kong-mahjong";
import { kingdomino } from "./kingdomino";
import { mahjong } from "./mahjong";
import { mexicanTrainDominoes } from "./mexican-train-dominoes";
import { qwirkle } from "./qwirkle";
import { riichiMahjong } from "./riichi-mahjong";
import { rummikub } from "./rummikub";
import { scrabble } from "./scrabble";
import { triominoes } from "./triominoes";
import { upwords } from "./upwords";

/**
 * Tile games.
 * Sourced from `lib/data/sports/tile/*.ts`.
 */
export const TILE_GAMES: Sport[] = [
  dominoes,
  hongKongMahjong,
  kingdomino,
  mahjong,
  mexicanTrainDominoes,
  qwirkle,
  riichiMahjong,
  rummikub,
  scrabble,
  triominoes,
  upwords,
];

