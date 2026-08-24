import type { Sport } from "@/lib/types";

import { diving } from "./diving";
import { rowing } from "./rowing";
import { sailing } from "./sailing";
import { surfing } from "./surfing";
import { swimming } from "./swimming";
import { waterPolo } from "./water-polo";

/** Aquatic sports category — swimming, diving, water polo, sailing, surfing and more. */
export const AQUATIC_SPORTS: Sport[] = [
  diving,
  rowing,
  sailing,
  surfing,
  swimming,
  waterPolo,
];
