import type { Sport } from "@/lib/types";

import { dominoes } from "./dominoes";
import { hongKongMahjong } from "./hong-kong-mahjong";
import { kingdomino } from "./kingdomino";
import { mahjong } from "./mahjong";
import { mahjongRiichi } from "./mahjong-riichi";
import { mahjongSolitaire } from "./mahjong-solitaire";
import { mexicanTrainDominoes } from "./mexican-train-dominoes";
import { okey } from "./okey";
import { qwirkle } from "./qwirkle";
import { riichiMahjong } from "./riichi-mahjong";
import { rummikub } from "./rummikub";
import { scrabble } from "./scrabble";
import { sichuanMahjong } from "./sichuan-mahjong";
import { triominoes } from "./triominoes";
import { upwords } from "./upwords";

/**
 * tile entries
 * Auto-generated from lib/data/sports/tile/*.ts
 */
export const TILE_GAMES: Sport[] = [
  dominoes,
  hongKongMahjong,
  kingdomino,
  mahjong,
  mahjongRiichi,
  mahjongSolitaire,
  mexicanTrainDominoes,
  okey,
  qwirkle,
  riichiMahjong,
  rummikub,
  scrabble,
  sichuanMahjong,
  triominoes,
  upwords,
];


