import type { Sport } from "@/lib/types";

import { bullsAndCows } from "./bulls-and-cows";
import { rubiksCube } from "./rubiks-cube";
import { sudoku } from "./sudoku";

/** Puzzle games category — Rubik's Cube, Sudoku, Crossword, Jigsaw, Bulls & Cows. */
export const PUZZLE_GAMES: Sport[] = [
  bullsAndCows,
  rubiksCube,
  sudoku,
];
