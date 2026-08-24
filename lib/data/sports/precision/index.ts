import type { Sport } from "@/lib/types";

import { archery } from "./archery";
import { bocce } from "./bocce";
import { cornhole } from "./cornhole";
import { darts } from "./darts";
import { discGolf } from "./disc-golf";
import { golf } from "./golf";
import { petanque } from "./petanque";
import { pool } from "./pool";
import { shootingSports } from "./shooting-sports";
import { snooker } from "./snooker";
import { tenPinBowling } from "./ten-pin-bowling";

/** Precision sports — target accuracy under stillness (archery, golf, darts, shooting, cue sports, bowling). */
export const PRECISION_SPORTS: Sport[] = [
  archery,
  bocce,
  cornhole,
  darts,
  discGolf,
  golf,
  petanque,
  pool,
  shootingSports,
  snooker,
  tenPinBowling,
];
