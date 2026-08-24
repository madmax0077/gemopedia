import type { Sport } from "@/lib/types";

import { armWrestling } from "./arm-wrestling";
import { bodybuilding } from "./bodybuilding";
import { powerlifting } from "./powerlifting";
import { weightlifting } from "./weightlifting";

/** Strength sports category — weightlifting, powerlifting, strongman, bodybuilding, arm wrestling. */
export const STRENGTH_SPORTS: Sport[] = [
  armWrestling,
  bodybuilding,
  powerlifting,
  weightlifting,
];
