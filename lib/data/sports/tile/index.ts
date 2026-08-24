import type { Sport } from "@/lib/types";

import { dominoes } from "./dominoes";
import { mahjong } from "./mahjong";
import { rummikub } from "./rummikub";
import { scrabble } from "./scrabble";

/** Tile games category — Mahjong, Rummikub, Dominoes, Carcassonne. */
export const TILE_GAMES: Sport[] = [
  dominoes,
  mahjong,
  rummikub,
  scrabble,
];
