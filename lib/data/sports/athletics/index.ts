import type { Sport } from "@/lib/types";

import { aquathlon } from "./aquathlon";
import { crossCountryRunning } from "./cross-country-running";
import { decathlon } from "./decathlon";
import { discusThrow } from "./discus-throw";
import { hammerThrow } from "./hammer-throw";
import { heptathlon } from "./heptathlon";
import { highJump } from "./high-jump";
import { hurdles } from "./hurdles";
import { javelinThrow } from "./javelin-throw";
import { longJump } from "./long-jump";
import { marathonRunning } from "./marathon-running";
import { mountainRunning } from "./mountain-running";
import { poleVault } from "./pole-vault";
import { raceWalking } from "./race-walking";
import { shotPut } from "./shot-put";
import { skyrunning } from "./skyrunning";
import { sprinting } from "./sprinting";
import { steeplechase } from "./steeplechase";
import { tripleJump } from "./triple-jump";
import { ultraMarathon } from "./ultra-marathon";

/**
 * Athletics category.
 * Sourced from `lib/data/sports/athletics/*.ts`.
 */
export const ATHLETICS_SPORTS: Sport[] = [
  aquathlon,
  crossCountryRunning,
  decathlon,
  discusThrow,
  hammerThrow,
  heptathlon,
  highJump,
  hurdles,
  javelinThrow,
  longJump,
  marathonRunning,
  mountainRunning,
  poleVault,
  raceWalking,
  shotPut,
  skyrunning,
  sprinting,
  steeplechase,
  tripleJump,
  ultraMarathon,
];

