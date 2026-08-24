import type { Sport } from "@/lib/types";

import { boxing } from "./boxing";
import { capoeira } from "./capoeira";
import { judo } from "./judo";
import { karate } from "./karate";
import { senegaleseWrestling } from "./senegalese-wrestling";
import { sumo } from "./sumo";
import { taekwondo } from "./taekwondo";

/**
 * Combat sports category — striking, grappling, weapons and mixed
 * disciplines. Sourced from `lib/data/sports/combat/*.ts`.
 */
export const COMBAT_SPORTS: Sport[] = [
  boxing,
  capoeira,
  judo,
  karate,
  senegaleseWrestling,
  sumo,
  taekwondo,
];
