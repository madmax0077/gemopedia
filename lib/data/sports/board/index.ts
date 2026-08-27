import type { Sport } from "@/lib/types";

import { aFeastForOdin } from "./a-feast-for-odin";
import { abalone } from "./abalone";
import { acquire } from "./acquire";
import { agricola } from "./agricola";
import { arimaa } from "./arimaa";
import { arkhamHorror } from "./arkham-horror";
import { arkNova } from "./ark-nova";
import { axisAndAllies } from "./axis-and-allies";
import { azul } from "./azul";
import { battleship } from "./battleship";
import { betrayalAtHouseOnTheHill } from "./betrayal-at-house-on-the-hill";
import { blokus } from "./blokus";
import { brassBirmingham } from "./brass-birmingham";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { caverna } from "./caverna";
import { chaturanga } from "./chaturanga";
import { checkersInternational } from "./checkers-international";
import { concordia } from "./concordia";
import { connectFour } from "./connect-four";
import { diplomacy } from "./diplomacy";
import { everdell } from "./everdell";
import { frosthaven } from "./frosthaven";
import { gaiaProject } from "./gaia-project";
import { gloomhaven } from "./gloomhaven";
import { gloomhavenJawsOfTheLion } from "./gloomhaven-jaws-of-the-lion";
import { greatWesternTrail } from "./great-western-trail";
import { hex } from "./hex";
import { hive } from "./hive";
import { hnefatafl } from "./hnefatafl";
import { kalah } from "./kalah";
import { kingOfTokyo } from "./king-of-tokyo";
import { leHavre } from "./le-havre";
import { lostRuinsOfArnak } from "./lost-ruins-of-arnak";
import { ludo } from "./ludo";
import { maracaibo } from "./maracaibo";
import { memoir44 } from "./memoir-44";
import { monopoly } from "./monopoly";
import { nineMensMorris } from "./nine-mens-morris";
import { onitama } from "./onitama";
import { pachisi } from "./pachisi";
import { pandemic } from "./pandemic";
import { pandemicLegacySeason1 } from "./pandemic-legacy-season-1";
import { powerGrid } from "./power-grid";
import { puertoRico } from "./puerto-rico";
import { quoridor } from "./quoridor";
import { reversi } from "./reversi";
import { risk } from "./risk";
import { root } from "./root";
import { royalGameOfUr } from "./royal-game-of-ur";
import { santorini } from "./santorini";
import { senet } from "./senet";
import { sevenWonders } from "./seven-wonders";
import { scythe } from "./scythe";
import { shatranj } from "./shatranj";
import { snakesAndLadders } from "./snakes-and-ladders";
import { sorry } from "./sorry";
import { splendor } from "./splendor";
import { spiritIsland } from "./spirit-island";
import { stratego } from "./stratego";
import { tak } from "./tak";
import { teotihuacanCityOfGods } from "./teotihuacan-city-of-gods";
import { terraformingMars } from "./terraforming-mars";
import { theGameOfLife } from "./the-game-of-life";
import { throughTheAges } from "./through-the-ages";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { tzolkinTheMayanCalendar } from "./tzolkin-the-mayan-calendar";
import { wingspan } from "./wingspan";

/** Board games category — Monopoly, Catan, modern euros, party favorites, horror storytelling, abstract strategy (Hex, Hive, Onitama, Santorini, Quoridor, Abalone, Stratego, International Draughts, Tak, Arimaa), ancient chess ancestors (Chaturanga, Shatranj, Royal Game of Ur, Senet, Pachisi, Hnefatafl, Kalah), heavy classics (Acquire, Diplomacy, Power Grid, Axis & Allies, Memoir '44), top-BGG heavy euros (Brass: Birmingham, Ark Nova, Everdell, Agricola, Puerto Rico, Concordia, Caverna, A Feast for Odin, Le Havre, Great Western Trail, Gaia Project, Tzolk'in, Through the Ages, Teotihuacan, Lost Ruins of Arnak, Maracaibo), and campaign/legacy dungeon-crawlers (Frosthaven, Pandemic Legacy: Season 1, Gloomhaven: Jaws of the Lion). */
export const BOARD_GAMES: Sport[] = [
  aFeastForOdin,
  abalone,
  acquire,
  agricola,
  arimaa,
  arkhamHorror,
  arkNova,
  axisAndAllies,
  azul,
  battleship,
  betrayalAtHouseOnTheHill,
  blokus,
  brassBirmingham,
  carcassonne,
  catan,
  caverna,
  chaturanga,
  checkersInternational,
  concordia,
  connectFour,
  diplomacy,
  everdell,
  frosthaven,
  gaiaProject,
  gloomhaven,
  gloomhavenJawsOfTheLion,
  greatWesternTrail,
  hex,
  hive,
  hnefatafl,
  kalah,
  kingOfTokyo,
  leHavre,
  lostRuinsOfArnak,
  ludo,
  maracaibo,
  memoir44,
  monopoly,
  nineMensMorris,
  onitama,
  pachisi,
  pandemic,
  pandemicLegacySeason1,
  powerGrid,
  puertoRico,
  quoridor,
  reversi,
  risk,
  root,
  royalGameOfUr,
  santorini,
  scythe,
  senet,
  sevenWonders,
  shatranj,
  snakesAndLadders,
  sorry,
  splendor,
  spiritIsland,
  stratego,
  tak,
  teotihuacanCityOfGods,
  terraformingMars,
  theGameOfLife,
  throughTheAges,
  ticketToRide,
  twilightImperium,
  tzolkinTheMayanCalendar,
  wingspan,
];
