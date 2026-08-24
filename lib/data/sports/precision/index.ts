import type { Sport } from "@/lib/types";

import { archery } from "./archery";
import { golf } from "./golf";

/** Precision sports — target accuracy under stillness (archery, golf, darts, shooting, cue sports, bowling). */
export const PRECISION_SPORTS: Sport[] = [
  archery,
  golf,
];
