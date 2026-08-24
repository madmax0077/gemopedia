import type { Sport } from "@/lib/types";

import { buzkashi } from "./buzkashi";
import { showJumping } from "./show-jumping";

/** Equestrian sports category — mounted and horse-and-rider sports. */
export const EQUESTRIAN_SPORTS: Sport[] = [
  buzkashi,
  showJumping,
];
