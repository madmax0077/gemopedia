import type { Sport } from "@/lib/types";

import { highJump } from "./high-jump";
import { hurdles } from "./hurdles";
import { longJump } from "./long-jump";
import { marathonRunning } from "./marathon-running";
import { poleVault } from "./pole-vault";
import { sprinting } from "./sprinting";

/** Athletics — track & field events (sprints, distance, jumps, throws, combined). */
export const ATHLETICS_SPORTS: Sport[] = [
  highJump,
  hurdles,
  longJump,
  marathonRunning,
  poleVault,
  sprinting,
];
