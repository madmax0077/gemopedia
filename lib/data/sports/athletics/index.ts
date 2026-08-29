import type { Sport } from "@/lib/types";

import { aquathlon } from "./aquathlon";
import { athletics } from "./athletics";
import { crossCountryRunning } from "./cross-country-running";
import { decathlon } from "./decathlon";
import { discusThrow } from "./discus-throw";
import { halfMarathon } from "./half-marathon";
import { hammerThrow } from "./hammer-throw";
import { heptathlon } from "./heptathlon";
import { highJump } from "./high-jump";
import { hurdles } from "./hurdles";
import { javelinThrow } from "./javelin-throw";
import { longDistanceRunning } from "./long-distance-running";
import { longJump } from "./long-jump";
import { marathonRunning } from "./marathon-running";
import { middleDistanceRunning } from "./middle-distance-running";
import { mountainRunning } from "./mountain-running";
import { poleVault } from "./pole-vault";
import { raceWalking } from "./race-walking";
import { shotPut } from "./shot-put";
import { skyrunning } from "./skyrunning";
import { sprinting } from "./sprinting";
import { steeplechase } from "./steeplechase";
import { trailRunning } from "./trail-running";
import { tripleJump } from "./triple-jump";
import { ultraMarathon } from "./ultra-marathon";

/**
 * Track and field, running, jumping, and throwing events.
 * Sourced from `lib/data/sports/athletics/*.ts`.
 */
export const ATHLETICS_SPORTS: Sport[] = [
  aquathlon,
  athletics,
  crossCountryRunning,
  decathlon,
  discusThrow,
  halfMarathon,
  hammerThrow,
  heptathlon,
  highJump,
  hurdles,
  javelinThrow,
  longDistanceRunning,
  longJump,
  marathonRunning,
  middleDistanceRunning,
  mountainRunning,
  poleVault,
  raceWalking,
  shotPut,
  skyrunning,
  sprinting,
  steeplechase,
  trailRunning,
  tripleJump,
  ultraMarathon,
];

