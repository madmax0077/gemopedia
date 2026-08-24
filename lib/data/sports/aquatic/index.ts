import type { Sport } from "@/lib/types";

import { artisticSwimming } from "./artistic-swimming";
import { bodyboarding } from "./bodyboarding";
import { canoeing } from "./canoeing";
import { canoeSprint } from "./canoe-sprint";
import { diving } from "./diving";
import { dragonBoatRacing } from "./dragon-boat-racing";
import { jetSkiRacing } from "./jet-ski-racing";
import { kayaking } from "./kayaking";
import { kitesurfing } from "./kitesurfing";
import { rowing } from "./rowing";
import { sailing } from "./sailing";
import { surfing } from "./surfing";
import { swimming } from "./swimming";
import { triathlon } from "./triathlon";
import { waterPolo } from "./water-polo";
import { waterSkiing } from "./water-skiing";
import { windsurfing } from "./windsurfing";

/** Aquatic sports category — swimming, diving, water polo, sailing, surfing, windsurf, kitesurf, bodyboard, artistic swimming, dragon boat, water skiing, jet ski racing and more. */
export const AQUATIC_SPORTS: Sport[] = [
  artisticSwimming,
  bodyboarding,
  canoeing,
  canoeSprint,
  diving,
  dragonBoatRacing,
  jetSkiRacing,
  kayaking,
  kitesurfing,
  rowing,
  sailing,
  surfing,
  swimming,
  triathlon,
  waterPolo,
  waterSkiing,
  windsurfing,
];
