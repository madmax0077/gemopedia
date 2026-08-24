import type { Sport } from "@/lib/types";

import { badminton } from "./badminton";
import { jaiAlai } from "./jai-alai";
import { padel } from "./padel";
import { pickleball } from "./pickleball";
import { racquetball } from "./racquetball";
import { realTennis } from "./real-tennis";
import { squash } from "./squash";
import { tableTennis } from "./table-tennis";
import { tennis } from "./tennis";

/** Racket / paddle sports category — tennis, table tennis, badminton, squash, padel, pickleball, racquetball, jai alai, real tennis. */
export const RACKET_PADDLE_SPORTS: Sport[] = [
  badminton,
  jaiAlai,
  padel,
  pickleball,
  racquetball,
  realTennis,
  squash,
  tableTennis,
  tennis,
];
