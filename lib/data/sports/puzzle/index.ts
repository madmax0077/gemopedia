import type { Sport } from "@/lib/types";

import { boggle } from "./boggle";
import { bullsAndCows } from "./bulls-and-cows";
import { crossword } from "./crossword";
import { hangman } from "./hangman";
import { jigsawPuzzle } from "./jigsaw-puzzle";
import { kenken } from "./kenken";
import { mastermind } from "./mastermind";
import { nonogram } from "./nonogram";
import { rubiksCube } from "./rubiks-cube";
import { sudoku } from "./sudoku";
import { tangram } from "./tangram";
import { towerOfHanoi } from "./tower-of-hanoi";
import { wordle } from "./wordle";

/** Puzzle games category — Rubik's Cube, Sudoku, Crossword, Jigsaw, Bulls & Cows, Tangram, Nonogram, Tower of Hanoi, Hangman, Mastermind, Wordle, KenKen, Boggle. */
export const PUZZLE_GAMES: Sport[] = [
  boggle,
  bullsAndCows,
  crossword,
  hangman,
  jigsawPuzzle,
  kenken,
  mastermind,
  nonogram,
  rubiksCube,
  sudoku,
  tangram,
  towerOfHanoi,
  wordle,
];
