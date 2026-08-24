import type { Sport } from "@/lib/types";

import { badminton } from "./badminton";
import { tableTennis } from "./table-tennis";
import { tennis } from "./tennis";

/** Racket & paddle sports category — hitting a projectile over/against a net or wall. */
export const RACKET_PADDLE_SPORTS: Sport[] = [
  badminton,
  tableTennis,
  tennis,
];
