import type { Sport } from "@/lib/types";

import { bmx } from "./bmx";
import { mountainBiking } from "./mountain-biking";
import { roadCycling } from "./road-cycling";
import { rockClimbing } from "./rock-climbing";
import { skateboarding } from "./skateboarding";
import { skydiving } from "./skydiving";

/** Adventure & extreme sports category — climbing, parkour, base jumping, canyoning. */
export const ADVENTURE_SPORTS: Sport[] = [
  bmx,
  mountainBiking,
  roadCycling,
  rockClimbing,
  skateboarding,
  skydiving,
];
