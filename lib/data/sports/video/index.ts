import type { Sport } from "@/lib/types";

import { callOfDuty } from "./call-of-duty";
import { eaFc } from "./ea-fc";
import { fortnite } from "./fortnite";
import { grandTheftAutoV } from "./grand-theft-auto-v";
import { maddenNfl } from "./madden-nfl";
import { minecraft } from "./minecraft";
import { nba2k } from "./nba-2k";
import { pokemonVideoGames } from "./pokemon-video-games";
import { roblox } from "./roblox";
import { superMarioBros } from "./super-mario-bros";
import { tetris } from "./tetris";

/** Video games category — sandbox, sports sims, arcade classics, sim series, mainstream titles. */
export const VIDEO_GAMES: Sport[] = [
  callOfDuty,
  eaFc,
  fortnite,
  grandTheftAutoV,
  maddenNfl,
  minecraft,
  nba2k,
  pokemonVideoGames,
  roblox,
  superMarioBros,
  tetris,
];
