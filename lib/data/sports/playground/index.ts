import type { Sport } from "@/lib/types";

import { captureTheFlag } from "./capture-the-flag";
import { dodgeball } from "./dodgeball";
import { duckDuckGoose } from "./duck-duck-goose";
import { hideAndSeek } from "./hide-and-seek";
import { hopscotch } from "./hopscotch";
import { jumpRope } from "./jump-rope";
import { kickball } from "./kickball";
import { kubb } from "./kubb";
import { marbles } from "./marbles";
import { molkky } from "./molkky";
import { musicalChairs } from "./musical-chairs";
import { redLightGreenLight } from "./red-light-green-light";
import { rockPaperScissors } from "./rock-paper-scissors";
import { simonSays } from "./simon-says";
import { tag } from "./tag";

/** Playground games category — Tag, Hide-and-Seek, Hopscotch, Dodgeball, Capture the Flag, Simon Says, Musical Chairs, Red Light Green Light, Duck Duck Goose, Marbles, Jump Rope, Rock Paper Scissors, Kickball, Kubb, Mölkky. */
export const PLAYGROUND_GAMES: Sport[] = [
  captureTheFlag,
  dodgeball,
  duckDuckGoose,
  hideAndSeek,
  hopscotch,
  jumpRope,
  kickball,
  kubb,
  marbles,
  molkky,
  musicalChairs,
  redLightGreenLight,
  rockPaperScissors,
  simonSays,
  tag,
];
