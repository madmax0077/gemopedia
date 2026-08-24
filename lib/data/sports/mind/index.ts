import type { Sport } from "@/lib/types";

import { backgammon } from "./backgammon";
import { chess } from "./chess";
import { contractBridge } from "./contract-bridge";
import { goBoardGame } from "./go-board-game";
import { poker } from "./poker";

/**
 * Mind sports category — chess, go, shogi, xiangqi, bridge, backgammon
 * and other competitive board- and card-based games classified as sports.
 */
export const MIND_SPORTS: Sport[] = [
  backgammon,
  chess,
  contractBridge,
  goBoardGame,
  poker,
];
