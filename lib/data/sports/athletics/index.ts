import type { Sport } from "@/lib/types";

import { decathlon } from "./decathlon";
import { discusThrow } from "./discus-throw";
import { heptathlon } from "./heptathlon";
import { highJump } from "./high-jump";
import { hurdles } from "./hurdles";
import { javelinThrow } from "./javelin-throw";
import { longJump } from "./long-jump";
import { marathonRunning } from "./marathon-running";
import { poleVault } from "./pole-vault";
import { shotPut } from "./shot-put";
import { sprinting } from "./sprinting";
import { steeplechase } from "./steeplechase";

/** Athletics — track & field events (sprints, distance, jumps, throws, combined). */
export const ATHLETICS_SPORTS: Sport[] = [
  decathlon,
  discusThrow,
  heptathlon,
  highJump,
  hurdles,
  javelinThrow,
  longJump,
  marathonRunning,
  poleVault,
  shotPut,
  sprinting,
  steeplechase,
];
