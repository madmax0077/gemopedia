import type { Sport } from "@/lib/types";

import { buzkashi } from "./buzkashi";
import { cuttingHorse } from "./cutting-horse";
import { dressage } from "./dressage";
import { enduranceRiding } from "./endurance-riding";
import { eventing } from "./eventing";
import { gymkhana } from "./gymkhana";
import { harnessRacing } from "./harness-racing";
import { horseRacing } from "./horse-racing";
import { hunterJumper } from "./hunter-jumper";
import { polo } from "./polo";
import { saddleBroncRiding } from "./saddle-bronc-riding";
import { showJumping } from "./show-jumping";
import { steeplechaseHorse } from "./steeplechase-horse";
import { teamPenning } from "./team-penning";
import { teamRoping } from "./team-roping";
import { tentPegging } from "./tent-pegging";
import { vaulting } from "./vaulting";

/**
 * Equestrian sports category.
 * Sourced from `lib/data/sports/equestrian/*.ts`.
 */
export const EQUESTRIAN_SPORTS: Sport[] = [
  buzkashi,
  cuttingHorse,
  dressage,
  enduranceRiding,
  eventing,
  gymkhana,
  harnessRacing,
  horseRacing,
  hunterJumper,
  polo,
  saddleBroncRiding,
  showJumping,
  steeplechaseHorse,
  teamPenning,
  teamRoping,
  tentPegging,
  vaulting,
];

