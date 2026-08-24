import type { Sport } from "@/lib/types";

import { hideAndSeek } from "./hide-and-seek";
import { tag } from "./tag";

/** Playground games category — Tag, Hide-and-Seek, Hopscotch, Dodgeball. */
export const PLAYGROUND_GAMES: Sport[] = [
  hideAndSeek,
  tag,
];
