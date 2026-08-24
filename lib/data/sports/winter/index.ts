import type { Sport } from "@/lib/types";

import { alpineSkiing } from "./alpine-skiing";
import { biathlon } from "./biathlon";
import { bobsleigh } from "./bobsleigh";
import { crossCountrySkiing } from "./cross-country-skiing";
import { curling } from "./curling";
import { figureSkating } from "./figure-skating";
import { skiJumping } from "./ski-jumping";
import { snowboarding } from "./snowboarding";
import { speedSkating } from "./speed-skating";

/** Winter sports category — snow and ice disciplines. */
export const WINTER_SPORTS: Sport[] = [
  alpineSkiing,
  biathlon,
  bobsleigh,
  crossCountrySkiing,
  curling,
  figureSkating,
  skiJumping,
  snowboarding,
  speedSkating,
];
