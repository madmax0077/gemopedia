import type { Sport } from "@/lib/types";

import { arkhamHorror } from "./arkham-horror";
import { azul } from "./azul";
import { battleship } from "./battleship";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { connectFour } from "./connect-four";
import { gloomhaven } from "./gloomhaven";
import { ludo } from "./ludo";
import { monopoly } from "./monopoly";
import { nineMensMorris } from "./nine-mens-morris";
import { pandemic } from "./pandemic";
import { reversi } from "./reversi";
import { risk } from "./risk";
import { root } from "./root";
import { sevenWonders } from "./seven-wonders";
import { scythe } from "./scythe";
import { snakesAndLadders } from "./snakes-and-ladders";
import { spiritIsland } from "./spirit-island";
import { terraformingMars } from "./terraforming-mars";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { wingspan } from "./wingspan";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, etc. */
export const BOARD_GAMES: Sport[] = [
  arkhamHorror,
  azul,
  battleship,
  carcassonne,
  catan,
  connectFour,
  gloomhaven,
  ludo,
  monopoly,
  nineMensMorris,
  pandemic,
  reversi,
  risk,
  root,
  scythe,
  sevenWonders,
  snakesAndLadders,
  spiritIsland,
  terraformingMars,
  ticketToRide,
  twilightImperium,
  wingspan,
];
