import type { Sport } from "@/lib/types";

import { powerlifting } from "./powerlifting";
import { weightlifting } from "./weightlifting";

/** Strength sports category — weightlifting, powerlifting, strongman. */
export const STRENGTH_SPORTS: Sport[] = [
  powerlifting,
  weightlifting,
];
