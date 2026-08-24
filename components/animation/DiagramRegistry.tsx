import React from "react";
import { CricketFieldingPositions } from "./diagrams/CricketFieldingPositions";
import { CricketPitch } from "./diagrams/CricketPitch";
import { FootballPitch } from "./diagrams/FootballPitch";
import { FootballFormation433 } from "./diagrams/FootballFormation433";
import { BasketballCourt } from "./diagrams/BasketballCourt";
import { KabaddiCourt } from "./diagrams/KabaddiCourt";
import { SumoDohyoDiagram } from "./diagrams/SumoDohyoDiagram";
import { ChessBoardSetup } from "./diagrams/ChessBoardSetup";
import { CurlingSheet } from "./diagrams/CurlingSheet";
import { HurlingGoals } from "./diagrams/HurlingGoals";
import { F1TrackDiagram } from "./diagrams/F1TrackDiagram";
import { SepakTakrawCourt } from "./diagrams/SepakTakrawCourt";
import { AflOval } from "./diagrams/AflOval";
import { CapoeiraRoda } from "./diagrams/CapoeiraRoda";
import { BuzkashiField } from "./diagrams/BuzkashiField";
import { LaambArena } from "./diagrams/LaambArena";

/**
 * Central registry mapping string identifiers (used in each Sport's
 * `diagrams` array) to their concrete React diagram components.
 *
 * To add a new diagram:
 *   1. Create the component under `components/animation/diagrams/`.
 *   2. Register it here with a stable slug key.
 *   3. Reference the key from `lib/data/sports/<slug>.ts` via
 *      `{ id, title, component: "<key>", slot }`.
 *
 * The SportPage looks up the component via `DiagramByKey` and renders
 * it inside the appropriate slot — no per-sport plumbing required.
 */
export const DIAGRAM_REGISTRY: Record<string, React.ComponentType> = {
  "cricket-fielding-positions": CricketFieldingPositions,
  "cricket-pitch": CricketPitch,
  "football-pitch": FootballPitch,
  "football-formation-433": FootballFormation433,
  "basketball-court": BasketballCourt,
  "kabaddi-court": KabaddiCourt,
  "sumo-dohyo": SumoDohyoDiagram,
  "chess-board-setup": ChessBoardSetup,
  "curling-sheet": CurlingSheet,
  "hurling-goals": HurlingGoals,
  "f1-track": F1TrackDiagram,
  "sepak-takraw-court": SepakTakrawCourt,
  "afl-oval": AflOval,
  "capoeira-roda": CapoeiraRoda,
  "buzkashi-field": BuzkashiField,
  "laamb-arena": LaambArena,
};

export function DiagramByKey({ componentKey }: { componentKey: string }) {
  const Comp = DIAGRAM_REGISTRY[componentKey];
  if (!Comp) return null;
  return <Comp />;
}
