import type { Sport } from "@/lib/types";

import { alanWake2 } from "./alan-wake-2";
import { amongUs } from "./among-us";
import { angryBirds } from "./angry-birds";
import { animalCrossing } from "./animal-crossing";
import { armoredCore6 } from "./armored-core-6";
import { assassinsCreed } from "./assassins-creed";
import { balatro } from "./balatro";
import { baldursGate3 } from "./baldurs-gate-3";
import { battlefield2042 } from "./battlefield-2042";
import { beatSaber } from "./beat-saber";
import { bioshock } from "./bioshock";
import { blackMythWukong } from "./black-myth-wukong";
import { blackMythZhongKui } from "./black-myth-zhong-kui";
import { bloodborne } from "./bloodborne";
import { bloodborneFromsoftware } from "./bloodborne-fromsoftware";
import { callOfDuty } from "./call-of-duty";
import { candyCrush } from "./candy-crush";
import { candyCrushSaga } from "./candy-crush-saga";
import { celeste } from "./celeste";
import { celesteIndie } from "./celeste-indie";
import { civilization } from "./civilization";
import { civilizationGame } from "./civilization-game";
import { crusaderKingsIii } from "./crusader-kings-iii";
import { cuphead } from "./cuphead";
import { cyberpunk2077 } from "./cyberpunk-2077";
import { danceDanceRevolution } from "./dance-dance-revolution";
import { darkSouls } from "./dark-souls";
import { daveTheDiver } from "./dave-the-diver";
import { deadOrAlive6 } from "./dead-or-alive-6";
import { deathStranding } from "./death-stranding";
import { deepRockGalactic } from "./deep-rock-galactic";
import { destiny2 } from "./destiny-2";
import { diablo } from "./diablo";
import { diabloGame } from "./diablo-game";
import { discoElysium } from "./disco-elysium";
import { donkeyKong } from "./donkey-kong";
import { doom } from "./doom";
import { doomGame } from "./doom-game";
import { dragonQuestXi } from "./dragon-quest-xi";
import { eaFc } from "./ea-fc";
import { eaSportsUfc } from "./ea-sports-ufc";
import { eldenRing } from "./elden-ring";
import { escapeFromTarkov } from "./escape-from-tarkov";
import { expedition33 } from "./expedition-33";
import { factorio } from "./factorio";
import { fallGuys } from "./fall-guys";
import { finalFantasy } from "./final-fantasy";
import { finalFantasy16 } from "./final-fantasy-16";
import { finalFantasyViiRebirth } from "./final-fantasy-vii-rebirth";
import { fortnite } from "./fortnite";
import { galaga } from "./galaga";
import { ghostOfTsushima } from "./ghost-of-tsushima";
import { godOfWar } from "./god-of-war";
import { grandTheftAuto } from "./grand-theft-auto";
import { grandTheftAutoV } from "./grand-theft-auto-v";
import { guiltyGear } from "./guilty-gear";
import { guitarHero } from "./guitar-hero";
import { hades } from "./hades";
import { hades2 } from "./hades-2";
import { hadesSupergiant } from "./hades-supergiant";
import { halfLife } from "./half-life";
import { halo } from "./halo";
import { helldivers2 } from "./helldivers-2";
import { hogwartsLegacy } from "./hogwarts-legacy";
import { hollowKnight } from "./hollow-knight";
import { hollowKnightMetroidvania } from "./hollow-knight-metroidvania";
import { hollowKnightSilksong } from "./hollow-knight-silksong";
import { itTakesTwo } from "./it-takes-two";
import { kerbalSpaceProgram } from "./kerbal-space-program";
import { kingdomComeDeliverance } from "./kingdom-come-deliverance";
import { kingOfFighters } from "./king-of-fighters";
import { kirby } from "./kirby";
import { lethalCompany } from "./lethal-company";
import { maddenNfl } from "./madden-nfl";
import { marioKart } from "./mario-kart";
import { marvelStrikeForce } from "./marvel-strike-force";
import { metalGearSolid } from "./metal-gear-solid";
import { metroid } from "./metroid";
import { minecraft } from "./minecraft";
import { monsterHunter } from "./monster-hunter";
import { monsterHunterWilds } from "./monster-hunter-wilds";
import { monsterHunterWorld } from "./monster-hunter-world";
import { mortalKombat } from "./mortal-kombat";
import { mortalKombat1 } from "./mortal-kombat-1";
import { nba2k } from "./nba-2k";
import { nierAutomata } from "./nier-automata";
import { noMansSky } from "./no-mans-sky";
import { octopathTraveler2 } from "./octopath-traveler-2";
import { pacMan } from "./pac-man";
import { palworld } from "./palworld";
import { pathOfExile } from "./path-of-exile";
import { persona3Reload } from "./persona-3-reload";
import { persona5 } from "./persona-5";
import { pinball } from "./pinball";
import { pizzaTower } from "./pizza-tower";
import { pokemonGo } from "./pokemon-go";
import { pokemonLegendsArceus } from "./pokemon-legends-arceus";
import { pokemonScarletViolet } from "./pokemon-scarlet-violet";
import { pokemonVideoGames } from "./pokemon-video-games";
import { pokkenTournament } from "./pokken-tournament";
import { portal } from "./portal";
import { portalGame } from "./portal-game";
import { redDeadRedemption2 } from "./red-dead-redemption-2";
import { residentEvil } from "./resident-evil";
import { returnal } from "./returnal";
import { riseOfRonin } from "./rise-of-ronin";
import { riskOfRain2 } from "./risk-of-rain-2";
import { roblox } from "./roblox";
import { robloxGame } from "./roblox-game";
import { shinMegamiTenseiV } from "./shin-megami-tensei-v";
import { simCity } from "./sim-city";
import { skyrim } from "./skyrim";
import { slayTheSpire } from "./slay-the-spire";
import { sonic } from "./sonic";
import { sonicTheHedgehog } from "./sonic-the-hedgehog";
import { soulcalibur } from "./soulcalibur";
import { spaceInvaders } from "./space-invaders";
import { splitgate } from "./splitgate";
import { starCitizen } from "./star-citizen";
import { stardewValley } from "./stardew-valley";
import { stardewValleyFarming } from "./stardew-valley-farming";
import { starfield } from "./starfield";
import { starRail } from "./star-rail";
import { stellaris } from "./stellaris";
import { streetFighter } from "./street-fighter";
import { streetFighter6 } from "./street-fighter-6";
import { subnautica } from "./subnautica";
import { superMarioBros } from "./super-mario-bros";
import { superSmashBros } from "./super-smash-bros";
import { tekken } from "./tekken";
import { tekken8 } from "./tekken-8";
import { terraria } from "./terraria";
import { tetris } from "./tetris";
import { theElderScrolls } from "./the-elder-scrolls";
import { theLastOfUs } from "./the-last-of-us";
import { theLegendOfZelda } from "./the-legend-of-zelda";
import { theSims } from "./the-sims";
import { theWitcher3 } from "./the-witcher-3";
import { uncharted } from "./uncharted";
import { valorantMobile } from "./valorant-mobile";
import { vampireSurvivors } from "./vampire-survivors";
import { virtuaFighter } from "./virtua-fighter";
import { warframe } from "./warframe";
import { warzone } from "./warzone";
import { wiiSports } from "./wii-sports";
import { witcher3WildHunt } from "./witcher-3-wild-hunt";
import { worldOfWarcraft } from "./world-of-warcraft";
import { wutheringWaves } from "./wuthering-waves";
import { yakuza } from "./yakuza";
import { yugiohMasterDuel } from "./yugioh-master-duel";
import { zeldaTearsOfTheKingdom } from "./zelda-tears-of-the-kingdom";
import { zenlessZoneZero } from "./zenless-zone-zero";

/**
 * video entries
 * Auto-generated from lib/data/sports/video/*.ts
 */
export const VIDEO_GAMES: Sport[] = [
  alanWake2,
  amongUs,
  angryBirds,
  animalCrossing,
  armoredCore6,
  assassinsCreed,
  balatro,
  baldursGate3,
  battlefield2042,
  beatSaber,
  bioshock,
  blackMythWukong,
  blackMythZhongKui,
  bloodborne,
  bloodborneFromsoftware,
  callOfDuty,
  candyCrush,
  candyCrushSaga,
  celeste,
  celesteIndie,
  civilization,
  civilizationGame,
  crusaderKingsIii,
  cuphead,
  cyberpunk2077,
  danceDanceRevolution,
  darkSouls,
  daveTheDiver,
  deadOrAlive6,
  deathStranding,
  deepRockGalactic,
  destiny2,
  diablo,
  diabloGame,
  discoElysium,
  donkeyKong,
  doom,
  doomGame,
  dragonQuestXi,
  eaFc,
  eaSportsUfc,
  eldenRing,
  escapeFromTarkov,
  expedition33,
  factorio,
  fallGuys,
  finalFantasy,
  finalFantasy16,
  finalFantasyViiRebirth,
  fortnite,
  galaga,
  ghostOfTsushima,
  godOfWar,
  grandTheftAuto,
  grandTheftAutoV,
  guiltyGear,
  guitarHero,
  hades,
  hades2,
  hadesSupergiant,
  halfLife,
  halo,
  helldivers2,
  hogwartsLegacy,
  hollowKnight,
  hollowKnightMetroidvania,
  hollowKnightSilksong,
  itTakesTwo,
  kerbalSpaceProgram,
  kingdomComeDeliverance,
  kingOfFighters,
  kirby,
  lethalCompany,
  maddenNfl,
  marioKart,
  marvelStrikeForce,
  metalGearSolid,
  metroid,
  minecraft,
  monsterHunter,
  monsterHunterWilds,
  monsterHunterWorld,
  mortalKombat,
  mortalKombat1,
  nba2k,
  nierAutomata,
  noMansSky,
  octopathTraveler2,
  pacMan,
  palworld,
  pathOfExile,
  persona3Reload,
  persona5,
  pinball,
  pizzaTower,
  pokemonGo,
  pokemonLegendsArceus,
  pokemonScarletViolet,
  pokemonVideoGames,
  pokkenTournament,
  portal,
  portalGame,
  redDeadRedemption2,
  residentEvil,
  returnal,
  riseOfRonin,
  riskOfRain2,
  roblox,
  robloxGame,
  shinMegamiTenseiV,
  simCity,
  skyrim,
  slayTheSpire,
  sonic,
  sonicTheHedgehog,
  soulcalibur,
  spaceInvaders,
  splitgate,
  starCitizen,
  stardewValley,
  stardewValleyFarming,
  starfield,
  starRail,
  stellaris,
  streetFighter,
  streetFighter6,
  subnautica,
  superMarioBros,
  superSmashBros,
  tekken,
  tekken8,
  terraria,
  tetris,
  theElderScrolls,
  theLastOfUs,
  theLegendOfZelda,
  theSims,
  theWitcher3,
  uncharted,
  valorantMobile,
  vampireSurvivors,
  virtuaFighter,
  warframe,
  warzone,
  wiiSports,
  witcher3WildHunt,
  worldOfWarcraft,
  wutheringWaves,
  yakuza,
  yugiohMasterDuel,
  zeldaTearsOfTheKingdom,
  zenlessZoneZero,
];


