import type { Sport } from "@/lib/types";

import { backgammon } from "./backgammon";
import { chess } from "./chess";
import { contractBridge } from "./contract-bridge";
import { draughts } from "./draughts";
import { goBoardGame } from "./go-board-game";
import { hearts } from "./hearts";
import { pente } from "./pente";
import { poker } from "./poker";
import { rummy } from "./rummy";
import { shogi } from "./shogi";
import { xiangqi } from "./xiangqi";

/**
 * Mind sports category — chess, go, shogi, xiangqi, bridge, backgammon,
 * poker, rummy, hearts, draughts, and other competitive board- and card-based
 * games classified as sports; plus abstract classics like Pente.
 */
export const MIND_SPORTS: Sport[] = [
  backgammon,
  chess,
  contractBridge,
  draughts,
  goBoardGame,
  hearts,
  pente,
  poker,
  rummy,
  shogi,
  xiangqi,
];
