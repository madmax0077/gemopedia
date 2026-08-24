import type { Sport } from "@/lib/types";

import { badminton } from "./badminton";
import { padel } from "./padel";
import { pickleball } from "./pickleball";
import { racquetball } from "./racquetball";
import { squash } from "./squash";
import { tableTennis } from "./table-tennis";
import { tennis } from "./tennis";

/** Racket / paddle sports category — hit an object over a net or against a wall. */
export const RACKET_PADDLE_SPORTS: Sport[] = [
  badminton,
  padel,
  pickleball,
  racquetball,
  squash,
  tableTennis,
  tennis,
];
