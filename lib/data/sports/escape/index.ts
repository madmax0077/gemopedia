import type { Sport } from "@/lib/types";

import { alternateRealityGames } from "./alternate-reality-games";
import { escapeRooms } from "./escape-rooms";
import { exitTheGame } from "./exit-the-game";
import { geocaching } from "./geocaching";
import { immersiveTheatre } from "./immersive-theatre";
import { larp } from "./larp";
import { letterboxing } from "./letterboxing";
import { murderMysteryGames } from "./murder-mystery-games";
import { mysterySubscriptionBoxes } from "./mystery-subscription-boxes";
import { puzzleBox } from "./puzzle-box";
import { puzzleHunts } from "./puzzle-hunts";
import { scavengerHunts } from "./scavenger-hunts";
import { treasureHunts } from "./treasure-hunts";

/**
 * Escape and immersive games category.
 * Sourced from `lib/data/sports/escape/*.ts`.
 */
export const ESCAPE_GAMES: Sport[] = [
  alternateRealityGames,
  escapeRooms,
  exitTheGame,
  geocaching,
  immersiveTheatre,
  larp,
  letterboxing,
  murderMysteryGames,
  mysterySubscriptionBoxes,
  puzzleBox,
  puzzleHunts,
  scavengerHunts,
  treasureHunts,
];

