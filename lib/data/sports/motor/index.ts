import type { Sport } from "@/lib/types";

import { autocross } from "./autocross";
import { dakarRally } from "./dakar-rally";
import { dirtTrackRacing } from "./dirt-track-racing";
import { dragRacing } from "./drag-racing";
import { enduro } from "./enduro";
import { formula1 } from "./formula-1";
import { formula2 } from "./formula-2";
import { formulaE } from "./formula-e";
import { iceRacing } from "./ice-racing";
import { indycar } from "./indycar";
import { karting } from "./karting";
import { leMansEndurance } from "./le-mans-endurance";
import { monsterTruckRacing } from "./monster-truck-racing";
import { motocross } from "./motocross";
import { motogp } from "./motogp";
import { nascar } from "./nascar";
import { rallyRacing } from "./rally-racing";
import { sidecarcross } from "./sidecarcross";
import { sidecarMotorcycleRacing } from "./sidecar-motorcycle-racing";
import { speedway } from "./speedway";
import { superbikeRacing } from "./superbike-racing";
import { worldRallyChampionship } from "./world-rally-championship";

/**
 * Motor sports category.
 * Sourced from `lib/data/sports/motor/*.ts`.
 */
export const MOTOR_SPORTS: Sport[] = [
  autocross,
  dakarRally,
  dirtTrackRacing,
  dragRacing,
  enduro,
  formula1,
  formula2,
  formulaE,
  iceRacing,
  indycar,
  karting,
  leMansEndurance,
  monsterTruckRacing,
  motocross,
  motogp,
  nascar,
  rallyRacing,
  sidecarcross,
  sidecarMotorcycleRacing,
  speedway,
  superbikeRacing,
  worldRallyChampionship,
];

