import type { Sport } from "@/lib/types";

import { americanFootball } from "./american-football";
import { associationFootball } from "./association-football";
import { australianFootball } from "./australian-rules-football";
import { bandy } from "./bandy";
import { baseball } from "./baseball";
import { basketball } from "./basketball";
import { beachVolleyball } from "./beach-volleyball";
import { cricket } from "./cricket";
import { fieldHockey } from "./field-hockey";
import { floorball } from "./floorball";
import { futsal } from "./futsal";
import { handball } from "./handball";
import { iceHockey } from "./ice-hockey";
import { korfball } from "./korfball";
import { netball } from "./netball";
import { rounders } from "./rounders";
import { rugbyLeague } from "./rugby-league";
import { rugbyUnion } from "./rugby-union";
import { sittingVolleyball } from "./sitting-volleyball";
import { softball } from "./softball";
import { tchoukball } from "./tchoukball";
import { ultimateFrisbee } from "./ultimate-frisbee";
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
  bandy,
  baseball,
  basketball,
  beachVolleyball,
  cricket,
  fieldHockey,
  floorball,
  futsal,
  handball,
  iceHockey,
  korfball,
  netball,
  rounders,
  rugbyLeague,
  rugbyUnion,
  sittingVolleyball,
  softball,
  tchoukball,
  ultimateFrisbee,
  volleyball,
];
