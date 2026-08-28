import type { Sport } from "@/lib/types";

import { aikido } from "./aikido";
import { boxing } from "./boxing";
import { brazilianJiuJitsu } from "./brazilian-jiu-jitsu";
import { capoeira } from "./capoeira";
import { fencing } from "./fencing";
import { freestyleWrestling } from "./freestyle-wrestling";
import { gatka } from "./gatka";
import { hapkido } from "./hapkido";
import { hema } from "./hema";
import { iaido } from "./iaido";
import { jodo } from "./jodo";
import { judo } from "./judo";
import { kalaripayattu } from "./kalaripayattu";
import { karate } from "./karate";
import { kendo } from "./kendo";
import { kickboxing } from "./kickboxing";
import { kravMaga } from "./krav-maga";
import { kungFu } from "./kung-fu";
import { kyokushin } from "./kyokushin";
import { kyudo } from "./kyudo";
import { mixedMartialArts } from "./mixed-martial-arts";
import { muayThai } from "./muay-thai";
import { naginatajutsu } from "./naginatajutsu";
import { pankration } from "./pankration";
import { sambo } from "./sambo";
import { savate } from "./savate";
import { senegaleseWrestling } from "./senegalese-wrestling";
import { silambam } from "./silambam";
import { sumo } from "./sumo";
import { systema } from "./systema";
import { taekwondo } from "./taekwondo";
import { thangTa } from "./thang-ta";
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
  gatka,
  hapkido,
  hema,
  iaido,
  jodo,
  judo,
  kalaripayattu,
  karate,
  kendo,
  kickboxing,
  kravMaga,
  kungFu,
  kyokushin,
  kyudo,
  mixedMartialArts,
  muayThai,
  naginatajutsu,
  pankration,
  sambo,
  savate,
  senegaleseWrestling,
  silambam,
  sumo,
  systema,
  taekwondo,
  thangTa,
  wushu,
];
