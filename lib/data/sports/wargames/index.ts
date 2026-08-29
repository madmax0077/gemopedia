import type { Sport } from "@/lib/types";

import { ageOfSigmar } from "./age-of-sigmar";
import { bloodBowl } from "./blood-bowl";
import { boltAction } from "./bolt-action";
import { flamesOfWar } from "./flames-of-war";
import { infinityTheGame } from "./infinity-the-game";
import { killTeam } from "./kill-team";
import { kingsOfWar } from "./kings-of-war";
import { malifaux } from "./malifaux";
import { marvelCrisisProtocol } from "./marvel-crisis-protocol";
import { middleEarthSbg } from "./middle-earth-sbg";
import { necromunda } from "./necromunda";
import { saga } from "./saga";
import { starWarsArmada } from "./star-wars-armada";
import { starWarsLegion } from "./star-wars-legion";
import { starWarsShatterpoint } from "./star-wars-shatterpoint";
import { warhammer40k } from "./warhammer-40000";
import { warhammerTheOldWorld } from "./warhammer-the-old-world";
import { warhammerUnderworlds } from "./warhammer-underworlds";
import { warmachine } from "./warmachine";
import { xWing } from "./x-wing";

/**
 * Wargames category.
 * Sourced from `lib/data/sports/wargames/*.ts`.
 */
export const WARGAMES_GAMES: Sport[] = [
  ageOfSigmar,
  bloodBowl,
  boltAction,
  flamesOfWar,
  infinityTheGame,
  killTeam,
  kingsOfWar,
  malifaux,
  marvelCrisisProtocol,
  middleEarthSbg,
  necromunda,
  saga,
  starWarsArmada,
  starWarsLegion,
  starWarsShatterpoint,
  warhammer40k,
  warhammerTheOldWorld,
  warhammerUnderworlds,
  warmachine,
  xWing,
];

