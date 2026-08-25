import type { Sport } from "@/lib/types";

import { bullsAndCows } from "./bulls-and-cows";
import { crossword } from "./crossword";
import { jigsawPuzzle } from "./jigsaw-puzzle";
import { nonogram } from "./nonogram";
import { rubiksCube } from "./rubiks-cube";
import { sudoku } from "./sudoku";
import { tangram } from "./tangram";
import { towerOfHanoi } from "./tower-of-hanoi";

/** Puzzle games category — Rubik's Cube, Sudoku, Crossword, Jigsaw, Bulls & Cows, Tangram, Nonogram, Tower of Hanoi. */
export const PUZZLE_GAMES: Sport[] = [
  bullsAndCows,
  crossword,
  jigsawPuzzle,
  nonogram,
  rubiksCube,
  sudoku,
  tangram,
  towerOfHanoi,
];
