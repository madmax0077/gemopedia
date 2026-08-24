import type { Sport } from "@/lib/types";

import { associationFootball } from "./association-football";
import { australianFootball } from "./australian-rules-football";
import { basketball } from "./basketball";
import { cricket } from "./cricket";
import { fieldHockey } from "./field-hockey";
import { iceHockey } from "./ice-hockey";
import { rugbyUnion } from "./rugby-union";

/**
 * Ball sports category — all games advancing a ball into a target zone.
 * Sourced from `lib/data/sports/ball/*.ts`. New games get an entry above
 * and are pushed into the array below.
 */
export const BALL_SPORTS: Sport[] = [
  associationFootball,
  australianFootball,
  basketball,
  cricket,
  fieldHockey,
  iceHockey,
  rugbyUnion,
];
