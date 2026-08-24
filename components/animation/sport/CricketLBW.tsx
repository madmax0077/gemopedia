"use client";
import React from "react";
import { AnimationCanvas, ease, lerp } from "../AnimationCanvas";
import { Field, Ball, Player, Zone, RuleLine } from "../primitives";

/**
 * How LBW works.
 *
 * Story in 4 beats:
 *   0.00 → 0.35 : bowler runs in and releases the ball
 *   0.35 → 0.65 : ball pitches on the pitch, moves toward the batter
 *   0.65 → 0.80 : ball strikes the batter's pads (in line with stumps)
 *   0.80 → 1.00 : projected path shown continuing to the stumps
 *
 * The animation shows the three zones the umpire mentally uses to judge
 * LBW: (a) where the ball pitched, (b) where the ball struck, (c) where
 * the ball would have hit the stumps.
 */
export function CricketLBW() {
  return (
    <AnimationCanvas
      duration={5}
      aspect="16/9"
      caption="LBW: the ball pitches in line, strikes the batter in line, and — if projected — would have hit the stumps. Verdict: OUT."
    >
      {(p) => {
        // Pitch is drawn 22 units long from x=15 to x=85, batter at x=80, bowler at x=20.
        // Ball flight: bowler → pitch bounce → pad impact
        const bowlerRelease = 0.35;
        const impact = 0.7;

        // Ball travel from bowler (24, 30) to pitch bounce (60, 34) to pad (78, 30)
        let bx = 24;
        let by = 30;
        if (p < bowlerRelease) {
          const t = ease(p / bowlerRelease);
          bx = lerp(20, 24, t);
          by = 30;
        } else if (p < impact) {
          const t = ease((p - bowlerRelease) / (impact - bowlerRelease));
          bx = lerp(24, 78, t);
          // pitch bounce parabola: apex at midway going down to 33 then up to 30
          by = 30 + Math.sin(t * Math.PI) * 6 - (t > 0.5 ? (t - 0.5) * 2 : 0);
        } else {
          bx = 78;
          by = 30;
        }

        // After impact show the projected path arc reaching the stumps
        const showProjection = p > impact;

        return (
          <svg viewBox="0 0 100 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Field oval backdrop */}
            <Field x={0} y={0} width={100} height={56} color="#166534" />
            <ellipse cx={50} cy={28} rx={49} ry={26} fill="none" stroke="white" strokeOpacity={0.3} strokeWidth={0.3} />

            {/* Pitch */}
            <rect x={15} y={26} width={70} height={8} rx={0.7} fill="#c8a97a" />
            <RuleLine x1={17} y1={26} x2={17} y2={34} color="white" />
            <RuleLine x1={83} y1={26} x2={83} y2={34} color="white" />

            {/* Stumps at both ends */}
            <g stroke="#f5f5f5" strokeWidth={0.5}>
              <line x1={17} y1={28.5} x2={17} y2={31.5} />
              <line x1={17.6} y1={28.5} x2={17.6} y2={31.5} />
              <line x1={16.4} y1={28.5} x2={16.4} y2={31.5} />

              <line x1={83} y1={28.5} x2={83} y2={31.5} />
              <line x1={83.6} y1={28.5} x2={83.6} y2={31.5} />
              <line x1={82.4} y1={28.5} x2={82.4} y2={31.5} />
            </g>

            {/* Zone: "pitched in line" (between wickets) */}
            <Zone x={15} y={26} width={70} height={8} color="#eab308" opacity={0.09} />

            {/* Bowler & batter */}
            <Player x={18} y={30} color="#0ea5e9" label="B" outline="white" />
            <Player x={82} y={30} color="#ef4444" label="Bat" outline="white" />

            {/* Ball */}
            <Ball x={bx} y={by} r={1.1} color="#f8fafc" stroke="#111827" />

            {/* Projected path after impact */}
            {showProjection && (
              <g>
                <path
                  d={`M78 30 Q 80 30 83 30`}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={0.6}
                  strokeDasharray="1 0.9"
                />
                <text x={68} y={24} fill="#fef3c7" fontSize={2.5} fontWeight={700} fontFamily="ui-sans-serif, system-ui">
                  projected path → stumps
                </text>
              </g>
            )}

            {/* Beat captions */}
            <text x={2} y={4} fill="white" fontSize={2.8} fontWeight={700} fontFamily="ui-sans-serif, system-ui">
              {p < bowlerRelease
                ? "① Bowler releases"
                : p < impact
                  ? "② Ball pitches in line"
                  : p < 0.85
                    ? "③ Impact on pad in line with stumps"
                    : "④ Would have hit the stumps → OUT"}
            </text>
          </svg>
        );
      }}
    </AnimationCanvas>
  );
}
