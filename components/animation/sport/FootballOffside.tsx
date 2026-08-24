"use client";
import React from "react";
import { AnimationCanvas, ease, lerp } from "../AnimationCanvas";
import { Field, Ball, Player, RuleLine, Goal } from "../primitives";

/**
 * How the offside rule works.
 *
 * Setup:
 *   - 3 defenders (blue) in a line
 *   - 2 attackers (red): one on halfway, one behind the last defender
 *   - Passer plays the ball forward
 *
 * The moment the ball is played, the position of the receiving attacker
 * is what matters. If the attacker is nearer the goal line than the
 * second-last defender at that moment → offside.
 *
 * We show the "offside line" as a red dashed line at the second-last
 * defender's position when the ball is played.
 */
export function FootballOffside() {
  return (
    <AnimationCanvas
      duration={5}
      aspect="16/9"
      caption="At the moment the ball is played, the receiving attacker is nearer to the goal line than the second-last defender → offside."
    >
      {(p) => {
        // Timeline
        // 0.0 → 0.4  : passer preparing, everyone still
        // 0.4        : ball played — freeze offside line
        // 0.4 → 0.9  : ball travels to attacker
        // 0.9 → 1.0  : flag raised + tint red
        const played = 0.4;

        // Attacker position (starts even with last defender, drifts slightly past)
        const attackerX = lerp(66, 74, ease(p));

        // Ball travel
        let bx = 24;
        let by = 34;
        if (p >= played) {
          const t = ease((p - played) / (1 - played));
          bx = lerp(24, attackerX, t);
          by = lerp(34, 34, t);
        }

        // Second-last defender x at moment of the pass (fixed)
        const offsideLineX = 65;

        const isOffside = attackerX > offsideLineX;

        return (
          <svg viewBox="0 0 100 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Pitch */}
            <Field x={0} y={0} width={100} height={56} color="#166534" stripe />
            <RuleLine x1={50} y1={0} x2={50} y2={56} color="white" width={0.35} />
            <circle cx={50} cy={28} r={9} fill="none" stroke="white" strokeWidth={0.35} />

            {/* Penalty box (right) */}
            <rect x={82} y={12} width={16} height={32} rx={0.5} fill="none" stroke="white" strokeWidth={0.35} />
            <rect x={92} y={22} width={6} height={12} rx={0.3} fill="none" stroke="white" strokeWidth={0.3} />
            <Goal x={98} y={28} width={2} height={9} facing="right" />

            {/* Offside line (only draw once the ball has been played) */}
            {p >= played && (
              <g>
                <line
                  x1={offsideLineX}
                  y1={6}
                  x2={offsideLineX}
                  y2={50}
                  stroke={isOffside ? "#ef4444" : "#22c55e"}
                  strokeWidth={0.5}
                  strokeDasharray="1.4 1"
                />
                <text
                  x={offsideLineX + 1}
                  y={9}
                  fill={isOffside ? "#fecaca" : "#dcfce7"}
                  fontSize={2.4}
                  fontWeight={700}
                  fontFamily="ui-sans-serif, system-ui"
                >
                  offside line
                </text>
              </g>
            )}

            {/* Defenders */}
            <Player x={60} y={20} color="#3b82f6" label="D" />
            <Player x={65} y={30} color="#3b82f6" label="D" />
            <Player x={62} y={44} color="#3b82f6" label="D" />
            <Player x={92} y={28} color="#f59e0b" label="GK" />

            {/* Passer & receiving attacker */}
            <Player x={24} y={34} color="#ef4444" label="P" />
            <Player x={attackerX} y={34} color="#ef4444" label="A" />

            {/* Ball */}
            <Ball x={bx} y={by} r={1.15} />

            {/* Verdict banner */}
            {p > 0.9 && (
              <g>
                <rect
                  x={30}
                  y={2}
                  width={40}
                  height={7}
                  rx={3}
                  fill={isOffside ? "#ef4444" : "#22c55e"}
                />
                <text
                  x={50}
                  y={7}
                  textAnchor="middle"
                  fill="white"
                  fontSize={3.6}
                  fontWeight={800}
                  fontFamily="ui-sans-serif, system-ui"
                >
                  {isOffside ? "OFFSIDE" : "ONSIDE"}
                </text>
              </g>
            )}
          </svg>
        );
      }}
    </AnimationCanvas>
  );
}
