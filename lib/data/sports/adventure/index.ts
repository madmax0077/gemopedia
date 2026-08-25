import type { Sport } from "@/lib/types";

import { baseJumping } from "./base-jumping";
import { bmx } from "./bmx";
import { bmxFreestyle } from "./bmx-freestyle";
import { bouldering } from "./bouldering";
import { modernPentathlon } from "./modern-pentathlon";
import { mountainBiking } from "./mountain-biking";
import { roadCycling } from "./road-cycling";
import { rockClimbing } from "./rock-climbing";
import { skateboarding } from "./skateboarding";
import { skydiving } from "./skydiving";
import { trackCycling } from "./track-cycling";
import { wingsuitFlying } from "./wingsuit-flying";

/** Adventure & extreme sports category — climbing, parkour, base jumping, canyoning, BMX, wingsuit. */
export const ADVENTURE_SPORTS: Sport[] = [
  baseJumping,
  bmx,
  bmxFreestyle,
  bouldering,
  modernPentathlon,
  mountainBiking,
  roadCycling,
  rockClimbing,
  skateboarding,
  skydiving,
  trackCycling,
  wingsuitFlying,
];
