import type { Sport } from "@/lib/types";

import { battleship } from "./battleship";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { connectFour } from "./connect-four";
import { monopoly } from "./monopoly";
import { risk } from "./risk";
import { ticketToRide } from "./ticket-to-ride";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, etc. */
export const BOARD_GAMES: Sport[] = [
  battleship,
  carcassonne,
  catan,
  connectFour,
  monopoly,
  risk,
  ticketToRide,
];
