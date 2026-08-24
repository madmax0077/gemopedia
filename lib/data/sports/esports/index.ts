import type { Sport } from "@/lib/types";

import { apexLegends } from "./apex-legends";
import { counterStrike } from "./counter-strike";
import { dota2 } from "./dota-2";
import { hearthstone } from "./hearthstone";
import { leagueOfLegends } from "./league-of-legends";
import { overwatch } from "./overwatch";
import { pubg } from "./pubg";
import { rocketLeague } from "./rocket-league";
import { starcraftII } from "./starcraft-ii";
import { valorant } from "./valorant";

/** Esports category — professionally competed video-game titles. */
export const ESPORTS_SPORTS: Sport[] = [
  apexLegends,
  counterStrike,
  dota2,
  hearthstone,
  leagueOfLegends,
  overwatch,
  pubg,
  rocketLeague,
  starcraftII,
  valorant,
];
