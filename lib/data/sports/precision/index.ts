import type { Sport } from "@/lib/types";

import { archery } from "./archery";
import { darts } from "./darts";
import { golf } from "./golf";
import { pool } from "./pool";
import { snooker } from "./snooker";
import { tenPinBowling } from "./ten-pin-bowling";

/** Precision sports — target accuracy under stillness (archery, golf, darts, shooting, cue sports, bowling). */
export const PRECISION_SPORTS: Sport[] = [
  archery,
  darts,
  golf,
  pool,
  snooker,
  tenPinBowling,
];
