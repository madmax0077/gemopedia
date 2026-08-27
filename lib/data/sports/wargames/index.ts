import type { Sport } from "@/lib/types";

import { ageOfSigmar } from "./age-of-sigmar";
import { bloodBowl } from "./blood-bowl";
import { boltAction } from "./bolt-action";
import { killTeam } from "./kill-team";
import { kingsOfWar } from "./kings-of-war";
import { malifaux } from "./malifaux";
import { marvelCrisisProtocol } from "./marvel-crisis-protocol";
import { middleEarthSbg } from "./middle-earth-sbg";
import { necromunda } from "./necromunda";
import { starWarsArmada } from "./star-wars-armada";
import { starWarsLegion } from "./star-wars-legion";
import { warhammer40k } from "./warhammer-40000";
import { warhammerTheOldWorld } from "./warhammer-the-old-world";
import { warhammerUnderworlds } from "./warhammer-underworlds";
import { warmachine } from "./warmachine";
import { xWing } from "./x-wing";

/** Wargames category — Warhammer 40k, Age of Sigmar, Bolt Action, Blood Bowl, X-Wing, Kill Team (skirmish 40K), Middle-earth SBG, Necromunda, Malifaux, Warmachine, Kings of War, Warhammer: The Old World, Star Wars Armada, Star Wars Legion, Marvel Crisis Protocol, Warhammer Underworlds. */
export const WARGAMES_GAMES: Sport[] = [
  ageOfSigmar,
  bloodBowl,
  boltAction,
  killTeam,
  kingsOfWar,
  malifaux,
  marvelCrisisProtocol,
  middleEarthSbg,
  necromunda,
  starWarsArmada,
  starWarsLegion,
  warhammer40k,
  warhammerTheOldWorld,
  warhammerUnderworlds,
  warmachine,
  xWing,
];
