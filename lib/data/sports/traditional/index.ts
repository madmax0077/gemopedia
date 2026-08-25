import type { Sport } from "@/lib/types";

import { bao } from "./bao";
import { gaelicFootball } from "./gaelic-football";
import { gilliDanda } from "./gilli-danda";
import { hurling } from "./hurling";
import { jianzi } from "./jianzi";
import { kabaddi } from "./kabaddi";
import { kancha } from "./kancha";
import { khoKho } from "./kho-kho";
import { lacrosse } from "./lacrosse";
import { mallakhamb } from "./mallakhamb";
import { mancala } from "./mancala";
import { oware } from "./oware";
import { sepakTakraw } from "./sepak-takraw";
import { ssireum } from "./ssireum";
import { tuho } from "./tuho";
import { yutNori } from "./yut-nori";

/**
 * Traditional & cultural sports category — regional and indigenous
 * disciplines that don't fit the modern-Olympic taxonomy.
 */
export const TRADITIONAL_SPORTS: Sport[] = [
  bao,
  gaelicFootball,
  gilliDanda,
  hurling,
  jianzi,
  kabaddi,
  kancha,
  khoKho,
  lacrosse,
  mallakhamb,
  mancala,
  oware,
  sepakTakraw,
  ssireum,
  tuho,
  yutNori,
];
