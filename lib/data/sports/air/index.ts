import type { Sport } from "@/lib/types";

import { aerobatics } from "./aerobatics";
import { airRacing } from "./air-racing";
import { canopyPiloting } from "./canopy-piloting";
import { droneRacing } from "./drone-racing";
import { gliding } from "./gliding";
import { hangGliding } from "./hang-gliding";
import { hotAirBallooning } from "./hot-air-ballooning";
import { indoorSkydiving } from "./indoor-skydiving";
import { paragliding } from "./paragliding";
import { poweredParagliding } from "./powered-paragliding";
import { rcAircraftRacing } from "./rc-aircraft-racing";
import { skysurfing } from "./skysurfing";
import { sportParachuting } from "./sport-parachuting";
import { ultralightAviation } from "./ultralight-aviation";

/**
 * Air sports category.
 * Sourced from `lib/data/sports/air/*.ts`.
 */
export const AIR_SPORTS: Sport[] = [
  aerobatics,
  airRacing,
  canopyPiloting,
  droneRacing,
  gliding,
  hangGliding,
  hotAirBallooning,
  indoorSkydiving,
  paragliding,
  poweredParagliding,
  rcAircraftRacing,
  skysurfing,
  sportParachuting,
  ultralightAviation,
];

