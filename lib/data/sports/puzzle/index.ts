import type { Sport } from "@/lib/types";

import { boggle } from "./boggle";
import { bullsAndCows } from "./bulls-and-cows";
import { crossword } from "./crossword";
import { futoshiki } from "./futoshiki";
import { hangman } from "./hangman";
import { hitori } from "./hitori";
import { jigsawCompetitive } from "./jigsaw-competitive";
import { jigsawPuzzle } from "./jigsaw-puzzle";
import { kakuro } from "./kakuro";
import { kenken } from "./kenken";
import { mastermind } from "./mastermind";
import { nonogram } from "./nonogram";
import { picross } from "./picross";
import { rubiksCube } from "./rubiks-cube";
import { slitherlink } from "./slitherlink";
import { speedCubing } from "./speed-cubing";
import { sudoku } from "./sudoku";
import { tangram } from "./tangram";
import { ticTacToe } from "./tic-tac-toe";
import { towerOfHanoi } from "./tower-of-hanoi";
import { wordle } from "./wordle";

/**
 * puzzle entries
 * Auto-generated from lib/data/sports/puzzle/*.ts
 */
export const PUZZLE_GAMES: Sport[] = [
  boggle,
  bullsAndCows,
  crossword,
  futoshiki,
  hangman,
  hitori,
  jigsawCompetitive,
  jigsawPuzzle,
  kakuro,
  kenken,
  mastermind,
  nonogram,
  picross,
  rubiksCube,
  slitherlink,
  speedCubing,
  sudoku,
  tangram,
  ticTacToe,
  towerOfHanoi,
  wordle,
];


