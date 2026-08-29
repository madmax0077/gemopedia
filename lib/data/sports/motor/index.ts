import type { Sport } from "@/lib/types";

import { autocross } from "./autocross";
import { dakarRally } from "./dakar-rally";
import { dirtTrackRacing } from "./dirt-track-racing";
import { dragRacing } from "./drag-racing";
import { drifting } from "./drifting";
import { enduranceRacing } from "./endurance-racing";
import { enduro } from "./enduro";
import { formula1 } from "./formula-1";
import { formula2 } from "./formula-2";
import { formula3 } from "./formula-3";
import { formulaE } from "./formula-e";
import { gtRacing } from "./gt-racing";
import { hillclimb } from "./hillclimb";
import { iceRacing } from "./ice-racing";
import { indycar } from "./indycar";
import { karting } from "./karting";
import { leMansEndurance } from "./le-mans-endurance";
import { monsterTruckRacing } from "./monster-truck-racing";
import { motocross } from "./motocross";
import { motogp } from "./motogp";
import { motorcycleTrials } from "./motorcycle-trials";
import { nascar } from "./nascar";
import { powerboatRacing } from "./powerboat-racing";
import { rallycross } from "./rallycross";
import { rallyRacing } from "./rally-racing";
import { rallyRaid } from "./rally-raid";
import { sidecarcross } from "./sidecarcross";
import { sidecarMotorcycleRacing } from "./sidecar-motorcycle-racing";
import { speedway } from "./speedway";
import { superbikeRacing } from "./superbike-racing";
import { supercross } from "./supercross";
import { touringCarRacing } from "./touring-car-racing";
import { worldRallyChampionship } from "./world-rally-championship";

/**
 * Motor sports.
 * Sourced from `lib/data/sports/motor/*.ts`.
 */
export const MOTOR_SPORTS: Sport[] = [
  autocross,
  dakarRally,
  dirtTrackRacing,
  dragRacing,
  drifting,
  enduranceRacing,
  enduro,
  formula1,
  formula2,
  formula3,
  formulaE,
  gtRacing,
  hillclimb,
  iceRacing,
  indycar,
  karting,
  leMansEndurance,
  monsterTruckRacing,
  motocross,
  motogp,
  motorcycleTrials,
  nascar,
  powerboatRacing,
  rallycross,
  rallyRacing,
  rallyRaid,
  sidecarcross,
  sidecarMotorcycleRacing,
  speedway,
  superbikeRacing,
  supercross,
  touringCarRacing,
  worldRallyChampionship,
];

