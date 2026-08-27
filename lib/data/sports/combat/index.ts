import type { Sport } from "@/lib/types";

import { aikido } from "./aikido";
import { boxing } from "./boxing";
import { brazilianJiuJitsu } from "./brazilian-jiu-jitsu";
import { capoeira } from "./capoeira";
import { fencing } from "./fencing";
import { freestyleWrestling } from "./freestyle-wrestling";
import { hema } from "./hema";
import { judo } from "./judo";
import { kalaripayattu } from "./kalaripayattu";
import { karate } from "./karate";
import { kendo } from "./kendo";
import { kickboxing } from "./kickboxing";
import { kravMaga } from "./krav-maga";
import { kungFu } from "./kung-fu";
import { mixedMartialArts } from "./mixed-martial-arts";
import { muayThai } from "./muay-thai";
import { sambo } from "./sambo";
import { savate } from "./savate";
import { senegaleseWrestling } from "./senegalese-wrestling";
import { silambam } from "./silambam";
import { sumo } from "./sumo";
import { taekwondo } from "./taekwondo";
import { wushu } from "./wushu";

/**
 * Combat sports category — striking, grappling, weapons and mixed
 * disciplines. Sourced from `lib/data/sports/combat/*.ts`.
 */
export const COMBAT_SPORTS: Sport[] = [
  aikido,
  boxing,
  brazilianJiuJitsu,
  capoeira,
  fencing,
  freestyleWrestling,
  hema,
  judo,
  kalaripayattu,
  karate,
  kendo,
  kickboxing,
  kravMaga,
  kungFu,
  mixedMartialArts,
  muayThai,
  sambo,
  savate,
  senegaleseWrestling,
  silambam,
  sumo,
  taekwondo,
  wushu,
];
