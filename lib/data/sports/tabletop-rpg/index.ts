import type { Sport } from "@/lib/types";

import { apocalypseWorld } from "./apocalypse-world";
import { bladesInTheDark } from "./blades-in-the-dark";
import { callOfCthulhu } from "./call-of-cthulhu";
import { cyberpunkRed } from "./cyberpunk-red";
import { deltaGreen } from "./delta-green";
import { dungeonsAndDragons } from "./dungeons-and-dragons";
import { fateCore } from "./fate-core";
import { gurps } from "./gurps";
import { morkBorg } from "./mork-borg";
import { pathfinder } from "./pathfinder";
import { runequest } from "./runequest";
import { shadowrun } from "./shadowrun";
import { starWarsRpgFfg } from "./star-wars-rpg-ffg";
import { traveller } from "./traveller";
import { vampireTheMasquerade } from "./vampire-the-masquerade";
import { warhammerFantasyRoleplay } from "./warhammer-fantasy-roleplay";

/** Tabletop RPG category — D&D, Pathfinder, Call of Cthulhu, Shadowrun, Vampire: The Masquerade, Cyberpunk Red, plus indie / narrative / classic systems (Blades in the Dark, Warhammer Fantasy Roleplay, Star Wars RPG FFG, Traveller, GURPS, Fate Core, Apocalypse World, Mörk Borg, Delta Green, RuneQuest). */
export const TABLETOP_RPG_GAMES: Sport[] = [
  apocalypseWorld,
  bladesInTheDark,
  callOfCthulhu,
  cyberpunkRed,
  deltaGreen,
  dungeonsAndDragons,
  fateCore,
  gurps,
  morkBorg,
  pathfinder,
  runequest,
  shadowrun,
  starWarsRpgFfg,
  traveller,
  vampireTheMasquerade,
  warhammerFantasyRoleplay,
];
