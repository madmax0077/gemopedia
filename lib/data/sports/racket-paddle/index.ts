import type { Sport } from "@/lib/types";

import { badminton } from "./badminton";
import { beachTennis } from "./beach-tennis";
import { crossminton } from "./crossminton";
import { frontenis } from "./frontenis";
import { jaiAlai } from "./jai-alai";
import { matkot } from "./matkot";
import { paddleTennis } from "./paddle-tennis";
import { padel } from "./padel";
import { pickleball } from "./pickleball";
import { platformTennis } from "./platform-tennis";
import { racketlon } from "./racketlon";
import { racquetball } from "./racquetball";
import { realTennis } from "./real-tennis";
import { softTennis } from "./soft-tennis";
import { squash } from "./squash";
import { tableTennis } from "./table-tennis";
import { tennis } from "./tennis";

/**
 * Racket and paddle sports category.
 * Sourced from `lib/data/sports/racket-paddle/*.ts`.
 */
export const RACKET_PADDLE_SPORTS: Sport[] = [
  badminton,
  beachTennis,
  crossminton,
  frontenis,
  jaiAlai,
  matkot,
  paddleTennis,
  padel,
  pickleball,
  platformTennis,
  racketlon,
  racquetball,
  realTennis,
  softTennis,
  squash,
  tableTennis,
  tennis,
];

