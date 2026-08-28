import type { Sport } from "@/lib/types";

import { bao } from "./bao";
import { buzkashi } from "./buzkashi";
import { dambe } from "./dambe";
import { gaelicFootball } from "./gaelic-football";
import { gilliDanda } from "./gilli-danda";
import { glima } from "./glima";
import { gouren } from "./gouren";
import { highlandGames } from "./highland-games";
import { hornussen } from "./hornussen";
import { hurling } from "./hurling";
import { insuknawr } from "./insuknawr";
import { jianzi } from "./jianzi";
import { kabaddi } from "./kabaddi";
import { kancha } from "./kancha";
import { khoKho } from "./kho-kho";
import { khridoli } from "./khridoli";
import { kokBoru } from "./kok-boru";
import { lacrosse } from "./lacrosse";
import { lapta } from "./lapta";
import { luchaCanaria } from "./lucha-canaria";
import { mallakhamb } from "./mallakhamb";
import { mancala } from "./mancala";
import { mongolianWrestling } from "./mongolian-wrestling";
import { nguniStickFighting } from "./nguni-stick-fighting";
import { oware } from "./oware";
import { pehlwani } from "./pehlwani";
import { pelotaMixteca } from "./pelota-mixteca";
import { pesapallo } from "./pesapallo";
import { schwingen } from "./schwingen";
import { sepakTakraw } from "./sepak-takraw";
import { shinty } from "./shinty";
import { sqay } from "./sqay";
import { ssireum } from "./ssireum";
import { tuho } from "./tuho";
import { ulama } from "./ulama";
import { varzeshEBastani } from "./varzesh-e-bastani";
import { yagliGures } from "./yagli-gures";
import { yutNori } from "./yut-nori";

/**
 * Traditional & cultural sports category — regional and indigenous
 * disciplines that don't fit the modern-Olympic taxonomy. Includes
 * folk wrestling (glima, schwingen, yagli gures, mongolian wrestling,
 * pehlwani, gouren, lucha canaria), stick-and-ball games (shinty,
 * pesapallo, hornussen, lapta, pelota mixteca, ulama), martial arts
 * (khridoli, sqay, nguni stick-fighting, dambe), strength-culture
 * traditions (varzesh-e-bastani, highland games, insuknawr), and
 * horseback + weapon sports (kok-boru).
 */
export const TRADITIONAL_SPORTS: Sport[] = [
  bao,
  buzkashi,
  dambe,
  gaelicFootball,
  gilliDanda,
  glima,
  gouren,
  highlandGames,
  hornussen,
  hurling,
  insuknawr,
  jianzi,
  kabaddi,
  kancha,
  khoKho,
  khridoli,
  kokBoru,
  lacrosse,
  lapta,
  luchaCanaria,
  mallakhamb,
  mancala,
  mongolianWrestling,
  nguniStickFighting,
  oware,
  pehlwani,
  pelotaMixteca,
  pesapallo,
  schwingen,
  sepakTakraw,
  shinty,
  sqay,
  ssireum,
  tuho,
  ulama,
  varzeshEBastani,
  yagliGures,
  yutNori,
];
