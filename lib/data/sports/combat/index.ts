import type { Sport } from "@/lib/types";

import { boxing } from "./boxing";
import { brazilianJiuJitsu } from "./brazilian-jiu-jitsu";
import { capoeira } from "./capoeira";
import { fencing } from "./fencing";
import { freestyleWrestling } from "./freestyle-wrestling";
import { judo } from "./judo";
import { karate } from "./karate";
import { kendo } from "./kendo";
import { kickboxing } from "./kickboxing";
import { mixedMartialArts } from "./mixed-martial-arts";
import { muayThai } from "./muay-thai";
import { senegaleseWrestling } from "./senegalese-wrestling";
import { sumo } from "./sumo";
import { taekwondo } from "./taekwondo";
import { wushu } from "./wushu";

/**
 * Combat sports category — striking, grappling, weapons and mixed
 * disciplines. Sourced from `lib/data/sports/combat/*.ts`.
 */
export const COMBAT_SPORTS: Sport[] = [
  boxing,
  brazilianJiuJitsu,
  capoeira,
  fencing,
  freestyleWrestling,
  judo,
  karate,
  kendo,
  kickboxing,
  mixedMartialArts,
  muayThai,
  senegaleseWrestling,
  sumo,
  taekwondo,
  wushu,
];
