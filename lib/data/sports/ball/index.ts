import type { Sport } from "@/lib/types";

import { americanFootball } from "./american-football";
import { associationFootball } from "./association-football";
import { australianFootball } from "./australian-rules-football";
import { bandy } from "./bandy";
import { baseball } from "./baseball";
import { basketball } from "./basketball";
import { beachHandball } from "./beach-handball";
import { beachSoccer } from "./beach-soccer";
import { beachVolleyball } from "./beach-volleyball";
import { camogie } from "./camogie";
import { canadianFootball } from "./canadian-football";
import { cestaPunta } from "./cesta-punta";
import { cricket } from "./cricket";
import { fieldHockey } from "./field-hockey";
import { flagFootball } from "./flag-football";
import { floorball } from "./floorball";
import { futsal } from "./futsal";
import { goalball } from "./goalball";
import { handball } from "./handball";
import { hooverball } from "./hooverball";
import { iceHockey } from "./ice-hockey";
import { indoorCricket } from "./indoor-cricket";
import { jorkyball } from "./jorkyball";
import { jugger } from "./jugger";
import { kanjam } from "./kanjam";
import { kinBall } from "./kin-ball";
import { korfball } from "./korfball";
import { netball } from "./netball";
import { prellball } from "./prellball";
import { rollerDerby } from "./roller-derby";
import { rounders } from "./rounders";
import { rugbyLeague } from "./rugby-league";
import { rugbyUnion } from "./rugby-union";
import { sittingVolleyball } from "./sitting-volleyball";
import { softball } from "./softball";
import { spikeball } from "./spikeball";
import { tagRugby } from "./tag-rugby";
import { tchoukball } from "./tchoukball";
import { teqball } from "./teqball";
import { torball } from "./torball";
import { ultimateFrisbee } from "./ultimate-frisbee";
import { volleyball } from "./volleyball";
import { wallyball } from "./wallyball";

/**
 * Ball sports — team + individual games featuring a ball.
 * Sourced from `lib/data/sports/ball/*.ts`.
 */
export const BALL_SPORTS: Sport[] = [
  americanFootball,
  associationFootball,
  australianFootball,
  bandy,
  baseball,
  basketball,
  beachHandball,
  beachSoccer,
  beachVolleyball,
  camogie,
  canadianFootball,
  cestaPunta,
  cricket,
  fieldHockey,
  flagFootball,
  floorball,
  futsal,
  goalball,
  handball,
  hooverball,
  iceHockey,
  indoorCricket,
  jorkyball,
  jugger,
  kanjam,
  kinBall,
  korfball,
  netball,
  prellball,
  rollerDerby,
  rounders,
  rugbyLeague,
  rugbyUnion,
  sittingVolleyball,
  softball,
  spikeball,
  tagRugby,
  tchoukball,
  teqball,
  torball,
  ultimateFrisbee,
  volleyball,
  wallyball,
];

