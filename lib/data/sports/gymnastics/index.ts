import type { Sport } from "@/lib/types";

import { artisticGymnastics } from "./artistic-gymnastics";
import { rhythmicGymnastics } from "./rhythmic-gymnastics";

/** Gymnastics category — artistic, rhythmic, trampoline, acrobatic and aerobic. */
export const GYMNASTICS_SPORTS: Sport[] = [
  artisticGymnastics,
  rhythmicGymnastics,
];
