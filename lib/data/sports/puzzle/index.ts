import type { Sport } from "@/lib/types";

import { rubiksCube } from "./rubiks-cube";
import { sudoku } from "./sudoku";

/** Puzzle games category — Rubik's Cube, Sudoku, Crossword, Jigsaw. */
export const PUZZLE_GAMES: Sport[] = [
  rubiksCube,
  sudoku,
];
