import type { Sport } from "@/lib/types";

import { railways1830 } from "./1830-railways";
import { abalone } from "./abalone";
import { acquire } from "./acquire";
import { aFeastForOdin } from "./a-feast-for-odin";
import { ageOfSteam } from "./age-of-steam";
import { agricola } from "./agricola";
import { anachrony } from "./anachrony";
import { arboretum } from "./arboretum";
import { arcs } from "./arcs";
import { arimaa } from "./arimaa";
import { arkhamHorror } from "./arkham-horror";
import { arkNova } from "./ark-nova";
import { atomicChess } from "./atomic-chess";
import { axisAndAllies } from "./axis-and-allies";
import { azul } from "./azul";
import { barrage } from "./barrage";
import { battleship } from "./battleship";
import { betrayalAtHouseOnTheHill } from "./betrayal-at-house-on-the-hill";
import { beyondTheSun } from "./beyond-the-sun";
import { blokus } from "./blokus";
import { bloodRage } from "./blood-rage";
import { brassBirmingham } from "./brass-birmingham";
import { brassLancashire } from "./brass-lancashire";
import { bughouseChess } from "./bughouse-chess";
import { burgleBros } from "./burgle-bros";
import { carcassonne } from "./carcassonne";
import { cascadia } from "./cascadia";
import { castlesOfBurgundy } from "./castles-of-burgundy";
import { catan } from "./catan";
import { caverna } from "./caverna";
import { chaturanga } from "./chaturanga";
import { checkersInternational } from "./checkers-international";
import { clank } from "./clank";
import { concordia } from "./concordia";
import { connectFour } from "./connect-four";
import { crazyhouseChess } from "./crazyhouse-chess";
import { cthulhuWars } from "./cthulhu-wars";
import { diplomacy } from "./diplomacy";
import { duneImperium } from "./dune-imperium";
import { earthBoardGame } from "./earth-board-game";
import { elGrande } from "./el-grande";
import { everdell } from "./everdell";
import { foodChainMagnate } from "./food-chain-magnate";
import { frosthaven } from "./frosthaven";
import { gaiaProject } from "./gaia-project";
import { gloomhaven } from "./gloomhaven";
import { gloomhavenJawsOfTheLion } from "./gloomhaven-jaws-of-the-lion";
import { gomokuStandard } from "./gomoku-standard";
import { greatWesternTrail } from "./great-western-trail";
import { hansaTeutonica } from "./hansa-teutonica";
import { heatPedalToTheMetal } from "./heat-pedal-to-the-metal";
import { hex } from "./hex";
import { hex2Player } from "./hex-2-player";
import { hive } from "./hive";
import { hnefatafl } from "./hnefatafl";
import { inis } from "./inis";
import { johnCompany } from "./john-company";
import { kalah } from "./kalah";
import { kemet } from "./kemet";
import { kingOfTheHillChess } from "./king-of-the-hill-chess";
import { kingOfTokyo } from "./king-of-tokyo";
import { leHavre } from "./le-havre";
import { lostRuinsOfArnak } from "./lost-ruins-of-arnak";
import { ludo } from "./ludo";
import { mageKnight } from "./mage-knight";
import { maracaibo } from "./maracaibo";
import { marvelUnited } from "./marvel-united";
import { memoir44 } from "./memoir-44";
import { monopoly } from "./monopoly";
import { nemesis } from "./nemesis";
import { nineMensMorris } from "./nine-mens-morris";
import { nucleum } from "./nucleum";
import { oath } from "./oath";
import { onitama } from "./onitama";
import { pachisi } from "./pachisi";
import { pandemic } from "./pandemic";
import { pandemicLegacySeason1 } from "./pandemic-legacy-season-1";
import { parksBoardGame } from "./parks-board-game";
import { patchwork } from "./patchwork";
import { paxPamir } from "./pax-pamir";
import { powerGrid } from "./power-grid";
import { projectL } from "./project-l";
import { puertoRico } from "./puerto-rico";
import { quacksOfQuedlinburg } from "./quacks-of-quedlinburg";
import { quoridor } from "./quoridor";
import { resArcana } from "./res-arcana";
import { reversi } from "./reversi";
import { reviveBoardGame } from "./revive-board-game";
import { risingSun } from "./rising-sun";
import { risk } from "./risk";
import { rollForTheGalaxy } from "./roll-for-the-galaxy";
import { root } from "./root";
import { royalGameOfUr } from "./royal-game-of-ur";
import { russianRailroads } from "./russian-railroads";
import { santorini } from "./santorini";
import { scythe } from "./scythe";
import { senet } from "./senet";
import { sevenWonders } from "./seven-wonders";
import { sevenWondersDuel } from "./seven-wonders-duel";
import { shatranj } from "./shatranj";
import { skyTeam } from "./sky-team";
import { sleepingGods } from "./sleeping-gods";
import { snakesAndLadders } from "./snakes-and-ladders";
import { sorry } from "./sorry";
import { spaceAlert } from "./space-alert";
import { spiritIsland } from "./spirit-island";
import { splendor } from "./splendor";
import { stratego } from "./stratego";
import { tak } from "./tak";
import { teotihuacanCityOfGods } from "./teotihuacan-city-of-gods";
import { terraformingMars } from "./terraforming-mars";
import { terraMystica } from "./terra-mystica";
import { theGameOfLife } from "./the-game-of-life";
import { theWhiteCastle } from "./the-white-castle";
import { threeCheckChess } from "./three-check-chess";
import { throughTheAges } from "./through-the-ages";
import { ticketToRide } from "./ticket-to-ride";
import { twilightImperium } from "./twilight-imperium";
import { twilightStruggle } from "./twilight-struggle";
import { tzolkinTheMayanCalendar } from "./tzolkin-the-mayan-calendar";
import { viticulture } from "./viticulture";
import { warOfTheRing } from "./war-of-the-ring";
import { welcomeTo } from "./welcome-to";
import { wingspan } from "./wingspan";
import { wyrmspan } from "./wyrmspan";
import { zombicide } from "./zombicide";

/**
 * board entries
 * Auto-generated from lib/data/sports/board/*.ts
 */
export const BOARD_GAMES: Sport[] = [
  railways1830,
  abalone,
  acquire,
  aFeastForOdin,
  ageOfSteam,
  agricola,
  anachrony,
  arboretum,
  arcs,
  arimaa,
  arkhamHorror,
  arkNova,
  atomicChess,
  axisAndAllies,
  azul,
  barrage,
  battleship,
  betrayalAtHouseOnTheHill,
  beyondTheSun,
  blokus,
  bloodRage,
  brassBirmingham,
  brassLancashire,
  bughouseChess,
  burgleBros,
  carcassonne,
  cascadia,
  castlesOfBurgundy,
  catan,
  caverna,
  chaturanga,
  checkersInternational,
  clank,
  concordia,
  connectFour,
  crazyhouseChess,
  cthulhuWars,
  diplomacy,
  duneImperium,
  earthBoardGame,
  elGrande,
  everdell,
  foodChainMagnate,
  frosthaven,
  gaiaProject,
  gloomhaven,
  gloomhavenJawsOfTheLion,
  gomokuStandard,
  greatWesternTrail,
  hansaTeutonica,
  heatPedalToTheMetal,
  hex,
  hex2Player,
  hive,
  hnefatafl,
  inis,
  johnCompany,
  kalah,
  kemet,
  kingOfTheHillChess,
  kingOfTokyo,
  leHavre,
  lostRuinsOfArnak,
  ludo,
  mageKnight,
  maracaibo,
  marvelUnited,
  memoir44,
  monopoly,
  nemesis,
  nineMensMorris,
  nucleum,
  oath,
  onitama,
  pachisi,
  pandemic,
  pandemicLegacySeason1,
  parksBoardGame,
  patchwork,
  paxPamir,
  powerGrid,
  projectL,
  puertoRico,
  quacksOfQuedlinburg,
  quoridor,
  resArcana,
  reversi,
  reviveBoardGame,
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
  sevenWondersDuel,
  shatranj,
  skyTeam,
  sleepingGods,
  snakesAndLadders,
  sorry,
  spaceAlert,
  spiritIsland,
  splendor,
  stratego,
  tak,
  teotihuacanCityOfGods,
  terraformingMars,
  terraMystica,
  theGameOfLife,
  theWhiteCastle,
  threeCheckChess,
  throughTheAges,
  ticketToRide,
  twilightImperium,
  twilightStruggle,
  tzolkinTheMayanCalendar,
  viticulture,
  warOfTheRing,
  welcomeTo,
  wingspan,
  wyrmspan,
  zombicide,
];


