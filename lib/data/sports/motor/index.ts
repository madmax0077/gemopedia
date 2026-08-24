import type { Sport } from "@/lib/types";

import { formula1 } from "./formula-1";
import { motocross } from "./motocross";
import { motogp } from "./motogp";
import { nascar } from "./nascar";
import { rallyRacing } from "./rally-racing";

/** Motor sports category — F1, MotoGP, NASCAR, rally, karting, drag racing. */
export const MOTOR_SPORTS: Sport[] = [
  formula1,
  motocross,
  motogp,
  nascar,
  rallyRacing,
];
