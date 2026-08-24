import type { Sport } from "@/lib/types";

import { longJump } from "./long-jump";
import { marathonRunning } from "./marathon-running";

/** Athletics — track & field events (sprints, distance, jumps, throws, combined). */
export const ATHLETICS_SPORTS: Sport[] = [
  longJump,
  marathonRunning,
];
