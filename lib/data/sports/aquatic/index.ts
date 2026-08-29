import type { Sport } from "@/lib/types";

import { artisticSwimming } from "./artistic-swimming";
import { bodyboarding } from "./bodyboarding";
import { canoeing } from "./canoeing";
import { canoeSprint } from "./canoe-sprint";
import { cliffDiving } from "./cliff-diving";
import { diving } from "./diving";
import { dragonBoatRacing } from "./dragon-boat-racing";
import { finSwimming } from "./fin-swimming";
import { freediving } from "./freediving";
import { jetSkiRacing } from "./jet-ski-racing";
import { kayaking } from "./kayaking";
import { kitesurfing } from "./kitesurfing";
import { kneeboarding } from "./kneeboarding";
import { lifeguardSport } from "./lifeguard-sport";
import { outriggerCanoeing } from "./outrigger-canoeing";
import { rowing } from "./rowing";
import { sailing } from "./sailing";
import { spearfishing } from "./spearfishing";
import { standUpPaddleboarding } from "./stand-up-paddleboarding";
import { surfing } from "./surfing";
import { swimming } from "./swimming";
import { swimrun } from "./swimrun";
import { triathlon } from "./triathlon";
import { underwaterHockey } from "./underwater-hockey";
import { underwaterRugby } from "./underwater-rugby";
import { wakeboarding } from "./wakeboarding";
import { wakesurfing } from "./wakesurfing";
import { waterPolo } from "./water-polo";
import { waterSkiing } from "./water-skiing";
import { whitewaterRafting } from "./whitewater-rafting";
import { windsurfing } from "./windsurfing";

/**
 * Aquatic sports category.
 * Sourced from `lib/data/sports/aquatic/*.ts`.
 */
export const AQUATIC_SPORTS: Sport[] = [
  artisticSwimming,
  bodyboarding,
  canoeing,
  canoeSprint,
  cliffDiving,
  diving,
  dragonBoatRacing,
  finSwimming,
  freediving,
  jetSkiRacing,
  kayaking,
  kitesurfing,
  kneeboarding,
  lifeguardSport,
  outriggerCanoeing,
  rowing,
  sailing,
  spearfishing,
  standUpPaddleboarding,
  surfing,
  swimming,
  swimrun,
  triathlon,
  underwaterHockey,
  underwaterRugby,
  wakeboarding,
  wakesurfing,
  waterPolo,
  waterSkiing,
  whitewaterRafting,
  windsurfing,
];

