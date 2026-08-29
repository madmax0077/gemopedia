import type { Sport } from "@/lib/types";

import { dominoes } from "./dominoes";
import { kingdomino } from "./kingdomino";
import { mahjong } from "./mahjong";
import { mexicanTrainDominoes } from "./mexican-train-dominoes";
import { qwirkle } from "./qwirkle";
import { rummikub } from "./rummikub";
import { scrabble } from "./scrabble";
import { triominoes } from "./triominoes";
import { upwords } from "./upwords";

/**
 * Tile games category.
 * Sourced from `lib/data/sports/tile/*.ts`.
 */
export const TILE_GAMES: Sport[] = [
  dominoes,
  kingdomino,
  mahjong,
  mexicanTrainDominoes,
  qwirkle,
  rummikub,
  scrabble,
  triominoes,
  upwords,
];

