import type { Sport } from "@/lib/types";

import { adventureRacing } from "./adventure-racing";
import { baseJumping } from "./base-jumping";
import { bikeTrials } from "./bike-trials";
import { bmx } from "./bmx";
import { bmxFreestyle } from "./bmx-freestyle";
import { bouldering } from "./bouldering";
import { bungeeJumping } from "./bungee-jumping";
import { canyoning } from "./canyoning";
import { caving } from "./caving";
import { coasteering } from "./coasteering";
import { cyclocross } from "./cyclocross";
import { downhillMountainBiking } from "./downhill-mountain-biking";
import { freerunning } from "./freerunning";
import { gravelCycling } from "./gravel-cycling";
import { handcycling } from "./handcycling";
import { leadClimbing } from "./lead-climbing";
import { modernPentathlon } from "./modern-pentathlon";
import { mountainBiking } from "./mountain-biking";
import { mountaineering } from "./mountaineering";
import { obstacleCourseRacing } from "./obstacle-course-racing";
import { orienteering } from "./orienteering";
import { packrafting } from "./packrafting";
import { parkour } from "./parkour";
import { roadCycling } from "./road-cycling";
import { rockClimbing } from "./rock-climbing";
import { skateboarding } from "./skateboarding";
import { skydiving } from "./skydiving";
import { slacklining } from "./slacklining";
import { spartanRace } from "./spartan-race";
import { speedClimbing } from "./speed-climbing";
import { toughMudder } from "./tough-mudder";
import { trackCycling } from "./track-cycling";
import { ultraDistanceCycling } from "./ultra-distance-cycling";
import { viaFerrata } from "./via-ferrata";
import { wingsuitFlying } from "./wingsuit-flying";

/**
 * Adventure and extreme sports.
 * Sourced from `lib/data/sports/adventure/*.ts`.
 */
export const ADVENTURE_SPORTS: Sport[] = [
  adventureRacing,
  baseJumping,
  bikeTrials,
  bmx,
  bmxFreestyle,
  bouldering,
  bungeeJumping,
  canyoning,
  caving,
  coasteering,
  cyclocross,
  downhillMountainBiking,
  freerunning,
  gravelCycling,
  handcycling,
  leadClimbing,
  modernPentathlon,
  mountainBiking,
  mountaineering,
  obstacleCourseRacing,
  orienteering,
  packrafting,
  parkour,
  roadCycling,
  rockClimbing,
  skateboarding,
  skydiving,
  slacklining,
  spartanRace,
  speedClimbing,
  toughMudder,
  trackCycling,
  ultraDistanceCycling,
  viaFerrata,
  wingsuitFlying,
];

