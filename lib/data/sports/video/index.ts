import type { Sport } from "@/lib/types";

import { callOfDuty } from "./call-of-duty";
import { fortnite } from "./fortnite";
import { grandTheftAutoV } from "./grand-theft-auto-v";
import { minecraft } from "./minecraft";
import { roblox } from "./roblox";

/** Video games category — Super Mario Bros., Pac-Man, Tetris, Minecraft. */
export const VIDEO_GAMES: Sport[] = [
  callOfDuty,
  fortnite,
  grandTheftAutoV,
  minecraft,
  roblox,
];
