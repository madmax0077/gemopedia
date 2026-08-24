import type { Sport } from "@/lib/types";

import { charades } from "./charades";
import { codenames } from "./codenames";
import { pictionary } from "./pictionary";

/** Party games category — Charades, Codenames, Werewolf, Two Truths and a Lie. */
export const PARTY_GAMES: Sport[] = [
  charades,
  codenames,
  pictionary,
];
