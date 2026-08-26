import type { Sport } from "@/lib/types";

import { arkhamHorror } from "./arkham-horror";
import { azul } from "./azul";
import { battleship } from "./battleship";
import { betrayalAtHouseOnTheHill } from "./betrayal-at-house-on-the-hill";
import { blokus } from "./blokus";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { connectFour } from "./connect-four";
import { gloomhaven } from "./gloomhaven";
import { kingOfTokyo } from "./king-of-tokyo";
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
import { splendor } from "./splendor";
import { spiritIsland } from "./spirit-island";
import { terraformingMars } from "./terraforming-mars";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { wingspan } from "./wingspan";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, modern euro classics + party favorites + horror storytelling. */
export const BOARD_GAMES: Sport[] = [
  arkhamHorror,
  azul,
  battleship,
  betrayalAtHouseOnTheHill,
  blokus,
  carcassonne,
  catan,
  connectFour,
  gloomhaven,
  kingOfTokyo,
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
  splendor,
  spiritIsland,
  terraformingMars,
  ticketToRide,
  twilightImperium,
  wingspan,
];
