import type { Sport } from "@/lib/types";

import { railways1830 } from "./1830-railways";
import { aFeastForOdin } from "./a-feast-for-odin";
import { abalone } from "./abalone";
import { acquire } from "./acquire";
import { ageOfSteam } from "./age-of-steam";
import { agricola } from "./agricola";
import { arimaa } from "./arimaa";
import { arkhamHorror } from "./arkham-horror";
import { arkNova } from "./ark-nova";
import { axisAndAllies } from "./axis-and-allies";
import { azul } from "./azul";
import { battleship } from "./battleship";
import { betrayalAtHouseOnTheHill } from "./betrayal-at-house-on-the-hill";
import { blokus } from "./blokus";
import { bloodRage } from "./blood-rage";
import { brassBirmingham } from "./brass-birmingham";
import { brassLancashire } from "./brass-lancashire";
import { carcassonne } from "./carcassonne";
import { catan } from "./catan";
import { caverna } from "./caverna";
import { chaturanga } from "./chaturanga";
import { checkersInternational } from "./checkers-international";
import { concordia } from "./concordia";
import { connectFour } from "./connect-four";
import { cthulhuWars } from "./cthulhu-wars";
import { diplomacy } from "./diplomacy";
import { duneImperium } from "./dune-imperium";
import { everdell } from "./everdell";
import { foodChainMagnate } from "./food-chain-magnate";
import { frosthaven } from "./frosthaven";
import { gaiaProject } from "./gaia-project";
import { gloomhaven } from "./gloomhaven";
import { gloomhavenJawsOfTheLion } from "./gloomhaven-jaws-of-the-lion";
import { greatWesternTrail } from "./great-western-trail";
import { hansaTeutonica } from "./hansa-teutonica";
import { hex } from "./hex";
import { hive } from "./hive";
import { hnefatafl } from "./hnefatafl";
import { kalah } from "./kalah";
import { kemet } from "./kemet";
import { kingOfTokyo } from "./king-of-tokyo";
import { leHavre } from "./le-havre";
import { lostRuinsOfArnak } from "./lost-ruins-of-arnak";
import { ludo } from "./ludo";
import { mageKnight } from "./mage-knight";
import { maracaibo } from "./maracaibo";
import { memoir44 } from "./memoir-44";
import { monopoly } from "./monopoly";
import { nemesis } from "./nemesis";
import { nineMensMorris } from "./nine-mens-morris";
import { onitama } from "./onitama";
import { pachisi } from "./pachisi";
import { pandemic } from "./pandemic";
import { pandemicLegacySeason1 } from "./pandemic-legacy-season-1";
import { paxPamir } from "./pax-pamir";
import { powerGrid } from "./power-grid";
import { puertoRico } from "./puerto-rico";
import { quoridor } from "./quoridor";
import { reversi } from "./reversi";
import { risingSun } from "./rising-sun";
import { risk } from "./risk";
import { rollForTheGalaxy } from "./roll-for-the-galaxy";
import { root } from "./root";
import { royalGameOfUr } from "./royal-game-of-ur";
import { russianRailroads } from "./russian-railroads";
import { santorini } from "./santorini";
import { senet } from "./senet";
import { sevenWonders } from "./seven-wonders";
import { scythe } from "./scythe";
import { shatranj } from "./shatranj";
import { snakesAndLadders } from "./snakes-and-ladders";
import { sorry } from "./sorry";
import { spaceAlert } from "./space-alert";
import { splendor } from "./splendor";
import { spiritIsland } from "./spirit-island";
import { stratego } from "./stratego";
import { tak } from "./tak";
import { teotihuacanCityOfGods } from "./teotihuacan-city-of-gods";
import { terraformingMars } from "./terraforming-mars";
import { terraMystica } from "./terra-mystica";
import { theGameOfLife } from "./the-game-of-life";
import { throughTheAges } from "./through-the-ages";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { twilightStruggle } from "./twilight-struggle";
import { tzolkinTheMayanCalendar } from "./tzolkin-the-mayan-calendar";
import { warOfTheRing } from "./war-of-the-ring";
import { wingspan } from "./wingspan";
import { zombicide } from "./zombicide";

/** Board games category — Monopoly, Catan, modern euros, party favorites, horror storytelling, abstract strategy (Hex, Hive, Onitama, Santorini, Quoridor, Abalone, Stratego, International Draughts, Tak, Arimaa), ancient chess ancestors (Chaturanga, Shatranj, Royal Game of Ur, Senet, Pachisi, Hnefatafl, Kalah), heavy classics (Acquire, Diplomacy, Power Grid, Axis & Allies, Memoir '44), top-BGG heavy euros (Brass: Birmingham, Brass: Lancashire, Ark Nova, Everdell, Agricola, Puerto Rico, Concordia, Caverna, A Feast for Odin, Le Havre, Great Western Trail, Gaia Project, Tzolk'in, Through the Ages, Teotihuacan, Lost Ruins of Arnak, Maracaibo, Food Chain Magnate, Hansa Teutonica, Pax Pamir, Mage Knight, Dune: Imperium, Russian Railroads, Roll for the Galaxy), railroad classics (1830, Age of Steam), and campaign/legacy dungeon-crawlers (Frosthaven, Pandemic Legacy: Season 1, Gloomhaven: Jaws of the Lion). */
export const BOARD_GAMES: Sport[] = [
  railways1830,
  aFeastForOdin,
  abalone,
  acquire,
  ageOfSteam,
  agricola,
  arimaa,
  arkhamHorror,
  arkNova,
  axisAndAllies,
  azul,
  battleship,
  betrayalAtHouseOnTheHill,
  blokus,
  bloodRage,
  brassBirmingham,
  brassLancashire,
  carcassonne,
  catan,
  caverna,
  chaturanga,
  checkersInternational,
  concordia,
  connectFour,
  cthulhuWars,
  diplomacy,
  duneImperium,
  everdell,
  foodChainMagnate,
  frosthaven,
  gaiaProject,
  gloomhaven,
  gloomhavenJawsOfTheLion,
  greatWesternTrail,
  hansaTeutonica,
  hex,
  hive,
  hnefatafl,
  kalah,
  kemet,
  kingOfTokyo,
  leHavre,
  lostRuinsOfArnak,
  ludo,
  mageKnight,
  maracaibo,
  memoir44,
  monopoly,
  nemesis,
  nineMensMorris,
  onitama,
  pachisi,
  pandemic,
  pandemicLegacySeason1,
  paxPamir,
  powerGrid,
  puertoRico,
  quoridor,
  reversi,
  risingSun,
  risk,
  rollForTheGalaxy,
  root,
  royalGameOfUr,
  russianRailroads,
  santorini,
  scythe,
  senet,
  sevenWonders,
  shatranj,
  snakesAndLadders,
  sorry,
  spaceAlert,
  splendor,
  spiritIsland,
  stratego,
  tak,
  teotihuacanCityOfGods,
  terraformingMars,
  terraMystica,
  theGameOfLife,
  throughTheAges,
  ticketToRide,
  twilightImperium,
  twilightStruggle,
  tzolkinTheMayanCalendar,
  warOfTheRing,
  wingspan,
  zombicide,
];
