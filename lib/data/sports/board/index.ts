import type { Sport } from "@/lib/types";

import { abalone } from "./abalone";
import { acquire } from "./acquire";
import { arimaa } from "./arimaa";
import { arkhamHorror } from "./arkham-horror";
import { axisAndAllies } from "./axis-and-allies";
import { azul } from "./azul";
import { battleship } from "./battleship";
import { betrayalAtHouseOnTheHill } from "./betrayal-at-house-on-the-hill";
import { blokus } from "./blokus";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { chaturanga } from "./chaturanga";
import { checkersInternational } from "./checkers-international";
import { connectFour } from "./connect-four";
import { diplomacy } from "./diplomacy";
import { gloomhaven } from "./gloomhaven";
import { hex } from "./hex";
import { hive } from "./hive";
import { hnefatafl } from "./hnefatafl";
import { kalah } from "./kalah";
import { kingOfTokyo } from "./king-of-tokyo";
import { ludo } from "./ludo";
import { memoir44 } from "./memoir-44";
import { monopoly } from "./monopoly";
import { nineMensMorris } from "./nine-mens-morris";
import { onitama } from "./onitama";
import { pachisi } from "./pachisi";
import { pandemic } from "./pandemic";
import { powerGrid } from "./power-grid";
import { quoridor } from "./quoridor";
import { reversi } from "./reversi";
import { risk } from "./risk";
import { root } from "./root";
import { royalGameOfUr } from "./royal-game-of-ur";
import { santorini } from "./santorini";
import { senet } from "./senet";
import { sevenWonders } from "./seven-wonders";
import { scythe } from "./scythe";
import { shatranj } from "./shatranj";
import { snakesAndLadders } from "./snakes-and-ladders";
import { sorry } from "./sorry";
import { splendor } from "./splendor";
import { spiritIsland } from "./spirit-island";
import { stratego } from "./stratego";
import { tak } from "./tak";
import { terraformingMars } from "./terraforming-mars";
import { theGameOfLife } from "./the-game-of-life";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { wingspan } from "./wingspan";

/** Board games category — Monopoly, Catan, Backgammon, Go, Shogi, modern euro classics + party favorites + horror storytelling + abstract strategy (Hex, Hive, Onitama, Santorini, Quoridor, Abalone, Stratego, International Draughts, Tak, Arimaa) + ancient chess ancestors (Chaturanga, Shatranj, Royal Game of Ur, Senet, Pachisi, Hnefatafl, Kalah) + heavy classics (Acquire, Diplomacy, Power Grid, Axis & Allies, Memoir '44). */
export const BOARD_GAMES: Sport[] = [
  abalone,
  acquire,
  arimaa,
  arkhamHorror,
  axisAndAllies,
  azul,
  battleship,
  betrayalAtHouseOnTheHill,
  blokus,
  carcassonne,
  catan,
  chaturanga,
  checkersInternational,
  connectFour,
  diplomacy,
  gloomhaven,
  hex,
  hive,
  hnefatafl,
  kalah,
  kingOfTokyo,
  ludo,
  memoir44,
  monopoly,
  nineMensMorris,
  onitama,
  pachisi,
  pandemic,
  powerGrid,
  quoridor,
  reversi,
  risk,
  root,
  royalGameOfUr,
  santorini,
  scythe,
  senet,
  sevenWonders,
  shatranj,
  snakesAndLadders,
  sorry,
  splendor,
  spiritIsland,
  stratego,
  tak,
  terraformingMars,
  theGameOfLife,
  ticketToRide,
  twilightImperium,
  wingspan,
];
