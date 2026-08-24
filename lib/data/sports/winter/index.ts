import type { Sport } from "@/lib/types";

import { alpineSkiing } from "./alpine-skiing";
import { biathlon } from "./biathlon";
import { bobsleigh } from "./bobsleigh";
import { crossCountrySkiing } from "./cross-country-skiing";
import { curling } from "./curling";
import { figureSkating } from "./figure-skating";
import { freestyleSkiing } from "./freestyle-skiing";
import { luge } from "./luge";
import { skeleton } from "./skeleton";
import { skiJumping } from "./ski-jumping";
import { snowboarding } from "./snowboarding";
import { snowmobiling } from "./snowmobiling";
import { speedSkating } from "./speed-skating";

/** Winter sports category — skiing, skating, sledding, snowboarding, snowmobiling; ice hockey moved to ball. */
export const WINTER_SPORTS: Sport[] = [
  alpineSkiing,
  biathlon,
  bobsleigh,
  crossCountrySkiing,
  curling,
  figureSkating,
  freestyleSkiing,
  luge,
  skeleton,
  skiJumping,
  snowboarding,
  snowmobiling,
  speedSkating,
];
