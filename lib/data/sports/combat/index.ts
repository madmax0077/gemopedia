import type { Sport } from "@/lib/types";

import { boxing } from "./boxing";
import { capoeira } from "./capoeira";
import { freestyleWrestling } from "./freestyle-wrestling";
import { judo } from "./judo";
import { karate } from "./karate";
import { mixedMartialArts } from "./mixed-martial-arts";
import { muayThai } from "./muay-thai";
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
  freestyleWrestling,
  judo,
  karate,
  mixedMartialArts,
  muayThai,
  senegaleseWrestling,
  sumo,
  taekwondo,
];
