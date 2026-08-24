import type { Sport } from "@/lib/types";

import { artisticGymnastics } from "./artistic-gymnastics";
import { cheerleading } from "./cheerleading";
import { rhythmicGymnastics } from "./rhythmic-gymnastics";

/** Gymnastics category — artistic, rhythmic, trampoline, acrobatic, aerobic, cheerleading. */
export const GYMNASTICS_SPORTS: Sport[] = [
  artisticGymnastics,
  cheerleading,
  rhythmicGymnastics,
];
