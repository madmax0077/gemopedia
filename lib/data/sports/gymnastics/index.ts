import type { Sport } from "@/lib/types";

import { acrobaticGymnastics } from "./acrobatic-gymnastics";
import { acroyoga } from "./acroyoga";
import { aerialSilks } from "./aerial-silks";
import { aerobicGymnastics } from "./aerobic-gymnastics";
import { artisticGymnastics } from "./artistic-gymnastics";
import { cheerleading } from "./cheerleading";
import { cyrWheel } from "./cyr-wheel";
import { germanWheel } from "./german-wheel";
import { rhythmicGymnastics } from "./rhythmic-gymnastics";
import { ropeSkipping } from "./rope-skipping";
import { trampoline } from "./trampoline";
import { trampolining } from "./trampolining";
import { tumbling } from "./tumbling";

/**
 * Gymnastics, acrobatics, and body-control disciplines.
 * Sourced from `lib/data/sports/gymnastics/*.ts`.
 */
export const GYMNASTICS_SPORTS: Sport[] = [
  acrobaticGymnastics,
  acroyoga,
  aerialSilks,
  aerobicGymnastics,
  artisticGymnastics,
  cheerleading,
  cyrWheel,
  germanWheel,
  rhythmicGymnastics,
  ropeSkipping,
  trampoline,
  trampolining,
  tumbling,
];

