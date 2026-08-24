import type { Sport } from "@/lib/types";

import { americanFootball } from "./american-football";
import { associationFootball } from "./association-football";
import { australianFootball } from "./australian-rules-football";
import { baseball } from "./baseball";
import { basketball } from "./basketball";
import { beachVolleyball } from "./beach-volleyball";
import { cricket } from "./cricket";
import { fieldHockey } from "./field-hockey";
import { handball } from "./handball";
import { iceHockey } from "./ice-hockey";
import { rugbyLeague } from "./rugby-league";
import { rugbyUnion } from "./rugby-union";
import { softball } from "./softball";
import { volleyball } from "./volleyball";

/**
 * Ball sports category — all games advancing a ball into a target zone.
 * Sourced from `lib/data/sports/ball/*.ts`. New games get an entry above
 * and are pushed into the array below.
 */
export const BALL_SPORTS: Sport[] = [
  americanFootball,
  associationFootball,
  australianFootball,
  baseball,
  basketball,
  beachVolleyball,
  cricket,
  fieldHockey,
  handball,
  iceHockey,
  rugbyLeague,
  rugbyUnion,
  softball,
  volleyball,
];
