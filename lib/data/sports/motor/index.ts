import type { Sport } from "@/lib/types";

import { dragRacing } from "./drag-racing";
import { formula1 } from "./formula-1";
import { indycar } from "./indycar";
import { karting } from "./karting";
import { leMansEndurance } from "./le-mans-endurance";
import { motocross } from "./motocross";
import { motogp } from "./motogp";
import { nascar } from "./nascar";
import { rallyRacing } from "./rally-racing";
import { speedway } from "./speedway";
import { superbikeRacing } from "./superbike-racing";

/** Motor sports category — F1, MotoGP, NASCAR, rally, karting, drag racing, IndyCar, Le Mans endurance, speedway, superbike. */
export const MOTOR_SPORTS: Sport[] = [
  dragRacing,
  formula1,
  indycar,
  karting,
  leMansEndurance,
  motocross,
  motogp,
  nascar,
  rallyRacing,
  speedway,
  superbikeRacing,
];
