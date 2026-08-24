import type { Sport } from "@/lib/types";

import { backgammon } from "./backgammon";
import { chess } from "./chess";
import { contractBridge } from "./contract-bridge";
import { goBoardGame } from "./go-board-game";
import { hearts } from "./hearts";
import { poker } from "./poker";
import { rummy } from "./rummy";

/**
 * Mind sports category — chess, go, shogi, xiangqi, bridge, backgammon
 * and other competitive board- and card-based games classified as sports.
 */
export const MIND_SPORTS: Sport[] = [
  backgammon,
  chess,
  contractBridge,
  goBoardGame,
  hearts,
  poker,
  rummy,
];
