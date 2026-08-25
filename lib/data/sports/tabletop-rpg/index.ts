import type { Sport } from "@/lib/types";

import { callOfCthulhu } from "./call-of-cthulhu";
import { cyberpunkRed } from "./cyberpunk-red";
import { dungeonsAndDragons } from "./dungeons-and-dragons";
import { pathfinder } from "./pathfinder";
import { shadowrun } from "./shadowrun";
import { vampireTheMasquerade } from "./vampire-the-masquerade";

/** Tabletop RPG category — D&D, Pathfinder, Call of Cthulhu, Shadowrun, Vampire, Cyberpunk. */
export const TABLETOP_RPG_GAMES: Sport[] = [
  callOfCthulhu,
  cyberpunkRed,
  dungeonsAndDragons,
  pathfinder,
  shadowrun,
  vampireTheMasquerade,
];
