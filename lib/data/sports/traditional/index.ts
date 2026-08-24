import type { Sport } from "@/lib/types";

import { gaelicFootball } from "./gaelic-football";
import { hurling } from "./hurling";
import { kabaddi } from "./kabaddi";
import { khoKho } from "./kho-kho";
import { lacrosse } from "./lacrosse";
import { sepakTakraw } from "./sepak-takraw";

/**
 * Traditional & cultural sports category — regional and indigenous
 * disciplines that don't fit the modern-Olympic taxonomy.
 */
export const TRADITIONAL_SPORTS: Sport[] = [
  gaelicFootball,
  hurling,
  kabaddi,
  khoKho,
  lacrosse,
  sepakTakraw,
];
