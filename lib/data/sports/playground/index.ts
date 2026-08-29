import type { Sport } from "@/lib/types";

import { captureTheFlag } from "./capture-the-flag";
import { chineseJumpRope } from "./chinese-jump-rope";
import { dodgeball } from "./dodgeball";
import { doubleDutch } from "./double-dutch";
import { duckDuckGoose } from "./duck-duck-goose";
import { fourSquare } from "./four-square";
import { hideAndSeek } from "./hide-and-seek";
import { hopscotch } from "./hopscotch";
import { jacks } from "./jacks";
import { jumpRope } from "./jump-rope";
import { kickball } from "./kickball";
import { kubb } from "./kubb";
import { marbles } from "./marbles";
import { molkky } from "./molkky";
import { musicalChairs } from "./musical-chairs";
import { newcombBall } from "./newcomb-ball";
import { redLightGreenLight } from "./red-light-green-light";
import { rockPaperScissors } from "./rock-paper-scissors";
import { simonSays } from "./simon-says";
import { tag } from "./tag";
import { tetherball } from "./tetherball";

/**
 * Playground games category.
 * Sourced from `lib/data/sports/playground/*.ts`.
 */
export const PLAYGROUND_GAMES: Sport[] = [
  captureTheFlag,
  chineseJumpRope,
  dodgeball,
  doubleDutch,
  duckDuckGoose,
  fourSquare,
  hideAndSeek,
  hopscotch,
  jacks,
  jumpRope,
  kickball,
  kubb,
  marbles,
  molkky,
  musicalChairs,
  newcombBall,
  redLightGreenLight,
  rockPaperScissors,
  simonSays,
  tag,
  tetherball,
];

