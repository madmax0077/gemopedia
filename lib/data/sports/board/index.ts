import type { Sport } from "@/lib/types";

import { battleship } from "./battleship";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { connectFour } from "./connect-four";
import { ludo } from "./ludo";
import { monopoly } from "./monopoly";
import { nineMensMorris } from "./nine-mens-morris";
import { pandemic } from "./pandemic";
import { reversi } from "./reversi";
import { risk } from "./risk";
import { snakesAndLadders } from "./snakes-and-ladders";
import { ticketToRide } from "./ticket-to-ride";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, etc. */
export const BOARD_GAMES: Sport[] = [
  battleship,
  carcassonne,
  catan,
  connectFour,
  ludo,
  monopoly,
  nineMensMorris,
  pandemic,
  reversi,
  risk,
  snakesAndLadders,
  ticketToRide,
];
