import type { Sport } from "@/lib/types";

import { ageOfSigmar } from "./age-of-sigmar";
import { bloodBowl } from "./blood-bowl";
import { boltAction } from "./bolt-action";
import { killTeam } from "./kill-team";
import { warhammer40k } from "./warhammer-40000";
import { xWing } from "./x-wing";

/** Wargames category — Warhammer 40k, Age of Sigmar, Bolt Action, Blood Bowl, X-Wing, Kill Team (skirmish 40K). */
export const WARGAMES_GAMES: Sport[] = [
  ageOfSigmar,
  bloodBowl,
  boltAction,
  killTeam,
  warhammer40k,
  xWing,
];
