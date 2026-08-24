import type { Sport } from "@/lib/types";

import { hangGliding } from "./hang-gliding";
import { paragliding } from "./paragliding";

/** Air sports category — skydiving, paragliding, ballooning, aerobatics. */
export const AIR_SPORTS: Sport[] = [
  hangGliding,
  paragliding,
];
