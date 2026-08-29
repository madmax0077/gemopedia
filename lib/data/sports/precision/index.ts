import type { Sport } from "@/lib/types";

import { airHockey } from "./air-hockey";
import { archery } from "./archery";
import { bocce } from "./bocce";
import { cornhole } from "./cornhole";
import { darts } from "./darts";
import { discGolf } from "./disc-golf";
import { gateball } from "./gateball";
import { golf } from "./golf";
import { horseshoes } from "./horseshoes";
import { lawnBowls } from "./lawn-bowls";
import { ninePinBowling } from "./nine-pin-bowling";
import { onePocket } from "./one-pocket";
import { paletBreton } from "./palet-breton";
import { petanque } from "./petanque";
import { pool } from "./pool";
import { russianPyramid } from "./russian-pyramid";
import { shootingSports } from "./shooting-sports";
import { skittles } from "./skittles";
import { snooker } from "./snooker";
import { straightPool } from "./straight-pool";
import { tableHockey } from "./table-hockey";
import { tableShuffleboard } from "./table-shuffleboard";
import { tenPinBowling } from "./ten-pin-bowling";

/**
 * Precision sports category.
 * Sourced from `lib/data/sports/precision/*.ts`.
 */
export const PRECISION_SPORTS: Sport[] = [
  airHockey,
  archery,
  bocce,
  cornhole,
  darts,
  discGolf,
  gateball,
  golf,
  horseshoes,
  lawnBowls,
  ninePinBowling,
  onePocket,
  paletBreton,
  petanque,
  pool,
  russianPyramid,
  shootingSports,
  skittles,
  snooker,
  straightPool,
  tableHockey,
  tableShuffleboard,
  tenPinBowling,
];

