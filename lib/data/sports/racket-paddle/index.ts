import type { Sport } from "@/lib/types";

import { badminton } from "./badminton";
import { pickleball } from "./pickleball";
import { squash } from "./squash";
import { tableTennis } from "./table-tennis";
import { tennis } from "./tennis";

/** Racket / paddle sports category — hit an object over a net or against a wall. */
export const RACKET_PADDLE_SPORTS: Sport[] = [
  badminton,
  pickleball,
  squash,
  tableTennis,
  tennis,
];
