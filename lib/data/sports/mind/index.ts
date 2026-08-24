import type { Sport } from "@/lib/types";

import { backgammon } from "./backgammon";
import { chess } from "./chess";
import { contractBridge } from "./contract-bridge";
import { draughts } from "./draughts";
import { goBoardGame } from "./go-board-game";
import { hearts } from "./hearts";
import { poker } from "./poker";
import { rummy } from "./rummy";
import { shogi } from "./shogi";
import { xiangqi } from "./xiangqi";

/**
 * Mind sports category — chess, go, shogi, xiangqi, bridge, backgammon
 * and other competitive board- and card-based games classified as sports.
 */
export const MIND_SPORTS: Sport[] = [
  backgammon,
  chess,
  contractBridge,
  draughts,
  goBoardGame,
  hearts,
  poker,
  rummy,
  shogi,
  xiangqi,
];
