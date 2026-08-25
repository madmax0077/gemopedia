import type { Sport } from "@/lib/types";

import { alternateRealityGames } from "./alternate-reality-games";
import { escapeRooms } from "./escape-rooms";
import { geocaching } from "./geocaching";
import { murderMysteryGames } from "./murder-mystery-games";
import { scavengerHunts } from "./scavenger-hunts";

/** Escape & immersive games category — Escape Rooms, ARGs, murder-mystery evenings, scavenger hunts, geocaching. */
export const ESCAPE_GAMES: Sport[] = [
  alternateRealityGames,
  escapeRooms,
  geocaching,
  murderMysteryGames,
  scavengerHunts,
];
