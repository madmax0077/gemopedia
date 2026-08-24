import type { Sport } from "@/lib/types";

import { hurling } from "./hurling";
import { kabaddi } from "./kabaddi";
import { sepakTakraw } from "./sepak-takraw";

/**
 * Traditional & cultural sports category — regional and indigenous
 * disciplines that don't fit the modern-Olympic taxonomy.
 */
export const TRADITIONAL_SPORTS: Sport[] = [
  hurling,
  kabaddi,
  sepakTakraw,
];
