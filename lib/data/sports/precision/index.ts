import type { Sport } from "@/lib/types";

import { airHockey } from "./air-hockey";
import { archery } from "./archery";
import { bocce } from "./bocce";
import { boccia } from "./boccia";
import { cornhole } from "./cornhole";
import { croquet } from "./croquet";
import { darts } from "./darts";
import { discGolf } from "./disc-golf";
import { eightBall } from "./eight-ball";
import { gateball } from "./gateball";
import { golf } from "./golf";
import { horseshoes } from "./horseshoes";
import { lawnBowls } from "./lawn-bowls";
import { nineBall } from "./nine-ball";
import { ninePinBowling } from "./nine-pin-bowling";
import { onePocket } from "./one-pocket";
import { paletBreton } from "./palet-breton";
import { petanque } from "./petanque";
import { pool } from "./pool";
import { poolBilliards } from "./pool-billiards";
import { russianPyramid } from "./russian-pyramid";
import { shootingSport } from "./shooting-sport";
import { shootingSports } from "./shooting-sports";
import { skeetShooting } from "./skeet-shooting";
import { skittles } from "./skittles";
import { snooker } from "./snooker";
import { sportingClays } from "./sporting-clays";
import { straightPool } from "./straight-pool";
import { tableHockey } from "./table-hockey";
import { tableShuffleboard } from "./table-shuffleboard";
import { tenPinBowling } from "./ten-pin-bowling";
import { trapShooting } from "./trap-shooting";

/**
 * Precision sports — target, accuracy, control-based disciplines.
 * Sourced from `lib/data/sports/precision/*.ts`.
 */
export const PRECISION_SPORTS: Sport[] = [
  airHockey,
  archery,
  bocce,
  boccia,
  cornhole,
  croquet,
  darts,
  discGolf,
  eightBall,
  gateball,
  golf,
  horseshoes,
  lawnBowls,
  nineBall,
  ninePinBowling,
  onePocket,
  paletBreton,
  petanque,
  pool,
  poolBilliards,
  russianPyramid,
  shootingSport,
  shootingSports,
  skeetShooting,
  skittles,
  snooker,
  sportingClays,
  straightPool,
  tableHockey,
  tableShuffleboard,
  tenPinBowling,
  trapShooting,
];

