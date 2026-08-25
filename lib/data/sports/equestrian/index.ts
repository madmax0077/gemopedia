import type { Sport } from "@/lib/types";

import { buzkashi } from "./buzkashi";
import { dressage } from "./dressage";
import { enduranceRiding } from "./endurance-riding";
import { eventing } from "./eventing";
import { horseRacing } from "./horse-racing";
import { polo } from "./polo";
import { showJumping } from "./show-jumping";

/** Equestrian sports category — mounted and horse-and-rider sports. */
export const EQUESTRIAN_SPORTS: Sport[] = [
  buzkashi,
  dressage,
  enduranceRiding,
  eventing,
  horseRacing,
  polo,
  showJumping,
];
