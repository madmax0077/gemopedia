import type { Sport } from "@/lib/types";

import { callOfDuty } from "./call-of-duty";
import { donkeyKong } from "./donkey-kong";
import { eaFc } from "./ea-fc";
import { fortnite } from "./fortnite";
import { grandTheftAutoV } from "./grand-theft-auto-v";
import { maddenNfl } from "./madden-nfl";
import { minecraft } from "./minecraft";
import { mortalKombat } from "./mortal-kombat";
import { nba2k } from "./nba-2k";
import { pacMan } from "./pac-man";
import { pinball } from "./pinball";
import { pokemonVideoGames } from "./pokemon-video-games";
import { roblox } from "./roblox";
import { spaceInvaders } from "./space-invaders";
import { streetFighter } from "./street-fighter";
import { superMarioBros } from "./super-mario-bros";
import { tekken } from "./tekken";
import { tetris } from "./tetris";

/** Video games category — sandbox, sports sims, arcade classics, sim series, mainstream titles + fighting games + pinball. */
export const VIDEO_GAMES: Sport[] = [
  callOfDuty,
  donkeyKong,
  eaFc,
  fortnite,
  grandTheftAutoV,
  maddenNfl,
  minecraft,
  mortalKombat,
  nba2k,
  pacMan,
  pinball,
  pokemonVideoGames,
  roblox,
  spaceInvaders,
  streetFighter,
  superMarioBros,
  tekken,
  tetris,
];
