import type { Sport } from "@/lib/types";

import { barrelRacing } from "./barrel-racing";
import { buzkashi } from "./buzkashi";
import { combinedDriving } from "./combined-driving";
import { cuttingHorse } from "./cutting-horse";
import { dressage } from "./dressage";
import { enduranceRiding } from "./endurance-riding";
import { equestrianVaulting } from "./equestrian-vaulting";
import { eventing } from "./eventing";
import { gymkhana } from "./gymkhana";
import { harnessRacing } from "./harness-racing";
import { horseRacing } from "./horse-racing";
import { hunterJumper } from "./hunter-jumper";
import { polo } from "./polo";
import { rodeo } from "./rodeo";
import { saddleBroncRiding } from "./saddle-bronc-riding";
import { showJumping } from "./show-jumping";
import { steeplechaseHorse } from "./steeplechase-horse";
import { teamPenning } from "./team-penning";
import { teamRoping } from "./team-roping";
import { tentPegging } from "./tent-pegging";
import { vaulting } from "./vaulting";

/**
 * Equestrian sports.
 * Sourced from `lib/data/sports/equestrian/*.ts`.
 */
export const EQUESTRIAN_SPORTS: Sport[] = [
  barrelRacing,
  buzkashi,
  combinedDriving,
  cuttingHorse,
  dressage,
  enduranceRiding,
  equestrianVaulting,
  eventing,
  gymkhana,
  harnessRacing,
  horseRacing,
  hunterJumper,
  polo,
  rodeo,
  saddleBroncRiding,
  showJumping,
  steeplechaseHorse,
  teamPenning,
  teamRoping,
  tentPegging,
  vaulting,
];

