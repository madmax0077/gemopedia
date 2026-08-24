"use client";
import React from "react";
import { AnimationCanvas, ease } from "../AnimationCanvas";
import { RuleLine, Player } from "../primitives";

/**
 * Reading the sumo dohyō.
 *
 * Shows the 4.55 m clay ring bordered by tawara. Two rikishi charge from
 * the two white shikiri-sen lines, collide, and one is forced out —
 * demonstrating a yorikiri (force-out).
 */
export function SumoDohyo() {
  return (
    <AnimationCanvas
      duration={4.5}
      aspect="16/9"
      caption="Two rikishi charge from the starting lines; a push-out (yorikiri) is decided the moment one steps outside the tawara."
    >
      {(p) => {
        const charge = 0.4;
        const push = 0.85;

        // rikishi A (left) and B (right); centre of ring at (50, 30)
        let ax = 44;
        let bx = 56;
        if (p < charge) {
          const t = ease(p / charge);
          ax = 44 - 1 * t;
          bx = 56 + 1 * t;
        } else if (p < push) {
          // collide near centre; A gradually drives B backward
          const t = ease((p - charge) / (push - charge));
          ax = 48 + t * 6; // 48 → 54
          bx = 52 + t * 12; // 52 → 64 (past ring boundary at ~63)
        } else {
          ax = 54;
          bx = 65; // out of ring
        }

        const outOfRing = bx > 63;

        return (
          <svg viewBox="0 0 100 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Base platform */}
            <rect x={16} y={8} width={68} height={44} rx={2} fill="#8a5a1d" />
            {/* Clay top */}
            <rect x={20} y={10} width={60} height={40} rx={1.5} fill="#d3a76a" />
            {/* Ring (dohyō) — 4.55 m circle scaled */}
            <circle cx={50} cy={30} r={13} fill="#e8c58f" stroke="#a06a1e" strokeWidth={0.9} strokeDasharray="0.8 0.7" />
            {/* Starting lines */}
            <RuleLine x1={46} y1={29} x2={48.5} y2={29} color="white" width={0.45} />
            <RuleLine x1={51.5} y1={29} x2={54} y2={29} color="white" width={0.45} />

            {/* Salt on the two "corners" */}
            <circle cx={26} cy={30} r={0.8} fill="white" opacity={0.4} />
            <circle cx={74} cy={30} r={0.8} fill="white" opacity={0.4} />

            <Player x={ax} y={30} color="#7c3aed" label="A" outline="white" />
            <Player x={bx} y={30} color="#ef4444" label="B" outline="white" />

            {/* Referee (gyōji) fan */}
            <g transform="translate(50, 46)">
              <rect x={-1.2} y={-1.5} width={2.4} height={4} rx={0.4} fill="#111827" />
              <rect x={-0.6} y={-3} width={1.2} height={2} rx={0.5} fill="#facc15" />
            </g>

            {/* Verdict */}
            {p > 0.9 && (
              <g>
                <rect x={30} y={2} width={40} height={5.5} rx={2.5} fill={outOfRing ? "#ef4444" : "#94a3b8"} />
                <text x={50} y={5.9} textAnchor="middle" fill="white" fontSize={3.2} fontWeight={800} fontFamily="ui-sans-serif, system-ui">
                  {outOfRing ? "YORIKIRI — Rikishi A wins" : "Still in ring…"}
                </text>
              </g>
            )}
          </svg>
        );
      }}
    </AnimationCanvas>
  );
}
