import type { Sport } from "@/lib/types";

import { armWrestling } from "./arm-wrestling";
import { bodybuilding } from "./bodybuilding";
import { calisthenics } from "./calisthenics";
import { crossfit } from "./crossfit";
import { hyrox } from "./hyrox";
import { indianClubs } from "./indian-clubs";
import { kettlebellSport } from "./kettlebell-sport";
import { lumberjackCompetitions } from "./lumberjack-competitions";
import { powerlifting } from "./powerlifting";
import { steelMace } from "./steel-mace";
import { strongman } from "./strongman";
import { weightlifting } from "./weightlifting";

/**
 * Strength sports category.
 * Sourced from `lib/data/sports/strength/*.ts`.
 */
export const STRENGTH_SPORTS: Sport[] = [
  armWrestling,
  bodybuilding,
  calisthenics,
  crossfit,
  hyrox,
  indianClubs,
  kettlebellSport,
  lumberjackCompetitions,
  powerlifting,
  steelMace,
  strongman,
  weightlifting,
];

