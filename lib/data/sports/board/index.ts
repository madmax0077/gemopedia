import type { Sport } from "@/lib/types";

import { catan } from "./catan";
import { monopoly } from "./monopoly";
import { risk } from "./risk";
import { ticketToRide } from "./ticket-to-ride";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, etc. */
export const BOARD_GAMES: Sport[] = [
  catan,
  monopoly,
  risk,
  ticketToRide,
];
