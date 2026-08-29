import type { Sport } from "@/lib/types";

import { aerobie } from "./aerobie";
import { astrojax } from "./astrojax";
import { boomerang } from "./boomerang";
import { buugeng } from "./buugeng";
import { contactJuggling } from "./contact-juggling";
import { cupStacking } from "./cup-stacking";
import { devilSticks } from "./devil-sticks";
import { diabolo } from "./diabolo";
import { fingerboarding } from "./fingerboarding";
import { hackySack } from "./hacky-sack";
import { hulaHoop } from "./hula-hoop";
import { juggling } from "./juggling";
import { kendama } from "./kendama";
import { poi } from "./poi";
import { simon } from "./simon";
import { spinningTops } from "./spinning-tops";
import { yoyo } from "./yoyo";

/**
 * Skill toys games category.
 * Sourced from `lib/data/sports/skill-toys/*.ts`.
 */
export const SKILL_TOYS_GAMES: Sport[] = [
  aerobie,
  astrojax,
  boomerang,
  buugeng,
  contactJuggling,
  cupStacking,
  devilSticks,
  diabolo,
  fingerboarding,
  hackySack,
  hulaHoop,
  juggling,
  kendama,
  poi,
  simon,
  spinningTops,
  yoyo,
];

