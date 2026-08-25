import type { Sport } from "@/lib/types";

import { acrobaticGymnastics } from "./acrobatic-gymnastics";
import { artisticGymnastics } from "./artistic-gymnastics";
import { cheerleading } from "./cheerleading";
import { rhythmicGymnastics } from "./rhythmic-gymnastics";
import { trampoline } from "./trampoline";
import { tumbling } from "./tumbling";

/** Gymnastics category — artistic, rhythmic, trampoline, acrobatic, tumbling, cheerleading. */
export const GYMNASTICS_SPORTS: Sport[] = [
  acrobaticGymnastics,
  artisticGymnastics,
  cheerleading,
  rhythmicGymnastics,
  trampoline,
  tumbling,
];
