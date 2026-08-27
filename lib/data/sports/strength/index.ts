import type { Sport } from "@/lib/types";

import { armWrestling } from "./arm-wrestling";
import { bodybuilding } from "./bodybuilding";
import { calisthenics } from "./calisthenics";
import { powerlifting } from "./powerlifting";
import { weightlifting } from "./weightlifting";

/** Strength sports category — weightlifting, powerlifting, strongman, bodybuilding, arm wrestling, calisthenics/street workout. */
export const STRENGTH_SPORTS: Sport[] = [
  armWrestling,
  bodybuilding,
  calisthenics,
  powerlifting,
  weightlifting,
];
