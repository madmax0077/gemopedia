import type { Sport } from "@/lib/types";

import { canoeing } from "./canoeing";
import { canoeSprint } from "./canoe-sprint";
import { diving } from "./diving";
import { kayaking } from "./kayaking";
import { rowing } from "./rowing";
import { sailing } from "./sailing";
import { surfing } from "./surfing";
import { swimming } from "./swimming";
import { triathlon } from "./triathlon";
import { waterPolo } from "./water-polo";

/** Aquatic sports category — swimming, diving, water polo, sailing, surfing and more. */
export const AQUATIC_SPORTS: Sport[] = [
  canoeing,
  canoeSprint,
  diving,
  kayaking,
  rowing,
  sailing,
  surfing,
  swimming,
  triathlon,
  waterPolo,
];
