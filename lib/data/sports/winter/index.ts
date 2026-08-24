import type { Sport } from "@/lib/types";

import { alpineSkiing } from "./alpine-skiing";
import { curling } from "./curling";
import { figureSkating } from "./figure-skating";
import { snowboarding } from "./snowboarding";

/** Winter sports category — snow and ice disciplines. */
export const WINTER_SPORTS: Sport[] = [
  alpineSkiing,
  curling,
  figureSkating,
  snowboarding,
];
