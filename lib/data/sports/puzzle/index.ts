import type { Sport } from "@/lib/types";

import { boggle } from "./boggle";
import { bullsAndCows } from "./bulls-and-cows";
import { crossword } from "./crossword";
import { futoshiki } from "./futoshiki";
import { hangman } from "./hangman";
import { hitori } from "./hitori";
import { jigsawPuzzle } from "./jigsaw-puzzle";
import { kakuro } from "./kakuro";
import { kenken } from "./kenken";
import { mastermind } from "./mastermind";
import { nonogram } from "./nonogram";
import { rubiksCube } from "./rubiks-cube";
import { slitherlink } from "./slitherlink";
import { sudoku } from "./sudoku";
import { tangram } from "./tangram";
import { towerOfHanoi } from "./tower-of-hanoi";
import { wordle } from "./wordle";

/**
 * Puzzle games category.
 * Sourced from `lib/data/sports/puzzle/*.ts`.
 */
export const PUZZLE_GAMES: Sport[] = [
  boggle,
  bullsAndCows,
  crossword,
  futoshiki,
  hangman,
  hitori,
  jigsawPuzzle,
  kakuro,
  kenken,
  mastermind,
  nonogram,
  rubiksCube,
  slitherlink,
  sudoku,
  tangram,
  towerOfHanoi,
  wordle,
];

