import type { Sport } from "@/lib/types";

import { counterStrike } from "./counter-strike";
import { dota2 } from "./dota-2";
import { leagueOfLegends } from "./league-of-legends";
import { valorant } from "./valorant";

/** Esports category — professionally competed video-game titles. */
export const ESPORTS_SPORTS: Sport[] = [
  counterStrike,
  dota2,
  leagueOfLegends,
  valorant,
];
