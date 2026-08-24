import type { Sport } from "@/lib/types";

import { swimming } from "./swimming";
import { waterPolo } from "./water-polo";

/** Aquatic sports category — swimming, diving, water polo, sailing, surfing and more. */
export const AQUATIC_SPORTS: Sport[] = [
  swimming,
  waterPolo,
];
