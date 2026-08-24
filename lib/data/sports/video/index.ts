import type { Sport } from "@/lib/types";

import { callOfDuty } from "./call-of-duty";
import { fortnite } from "./fortnite";
import { grandTheftAutoV } from "./grand-theft-auto-v";
import { minecraft } from "./minecraft";
import { pokemonVideoGames } from "./pokemon-video-games";
import { roblox } from "./roblox";
import { superMarioBros } from "./super-mario-bros";
import { tetris } from "./tetris";

/** Video games category — Super Mario Bros., Pac-Man, Tetris, Minecraft. */
export const VIDEO_GAMES: Sport[] = [
  callOfDuty,
  fortnite,
  grandTheftAutoV,
  minecraft,
  pokemonVideoGames,
  roblox,
  superMarioBros,
  tetris,
];
