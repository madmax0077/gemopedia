import type { Sport } from "@/lib/types";

import { aerobatics } from "./aerobatics";
import { hangGliding } from "./hang-gliding";
import { hotAirBallooning } from "./hot-air-ballooning";
import { paragliding } from "./paragliding";

/** Air sports category — skydiving, paragliding, hang-gliding, hot-air ballooning, aerobatics. */
export const AIR_SPORTS: Sport[] = [
  aerobatics,
  hangGliding,
  hotAirBallooning,
  paragliding,
];
