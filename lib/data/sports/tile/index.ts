import type { Sport } from "@/lib/types";

import { mahjong } from "./mahjong";
import { scrabble } from "./scrabble";

/** Tile games category — Mahjong, Rummikub, Dominoes, Carcassonne. */
export const TILE_GAMES: Sport[] = [
  mahjong,
  scrabble,
];
