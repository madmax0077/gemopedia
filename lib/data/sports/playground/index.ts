import type { Sport } from "@/lib/types";

import { captureTheFlag } from "./capture-the-flag";
import { dodgeball } from "./dodgeball";
import { hideAndSeek } from "./hide-and-seek";
import { hopscotch } from "./hopscotch";
import { tag } from "./tag";

/** Playground games category — Tag, Hide-and-Seek, Hopscotch, Dodgeball, Capture the Flag. */
export const PLAYGROUND_GAMES: Sport[] = [
  captureTheFlag,
  dodgeball,
  hideAndSeek,
  hopscotch,
  tag,
];
