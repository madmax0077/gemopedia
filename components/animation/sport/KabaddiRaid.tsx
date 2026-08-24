"use client";
import React from "react";
import { AnimationCanvas, ease, lerp } from "../AnimationCanvas";
import { Court, Player, RuleLine, Zone } from "../primitives";

/**
 * Anatomy of a kabaddi raid.
 *
 * Story:
 *   0.00 → 0.20  : raider stands behind own baulk, defenders spread out
 *   0.20 → 0.55  : raider crosses midline and baulk line
 *   0.55 → 0.75  : raider tags the nearest defender ("touch") — they turn out
 *   0.75 → 1.00  : raider retreats back across the midline safely (+ point)
 */
export function KabaddiRaid() {
  return (
    <AnimationCanvas
      duration={5}
      aspect="16/9"
      caption="A raid: cross the midline, cross the baulk line, tag a defender, and return home before being tackled — all on a single breath."
    >
      {(p) => {
        // Raider path: from (25, 30) → across midline (50) → to bonus zone (72,30) then tag → return
        let rx: number, ry: number;
        if (p < 0.55) {
          rx = lerp(25, 72, ease(p / 0.55));
          ry = 30;
        } else if (p < 0.75) {
          // Small movement toward the defender being tagged (defender at 68, 20)
          const t = ease((p - 0.55) / 0.2);
          rx = lerp(72, 68, t);
          ry = lerp(30, 24, t);
        } else {
          // Retreat home
          const t = ease((p - 0.75) / 0.25);
          rx = lerp(68, 20, t);
          ry = lerp(24, 30, t);
        }

        // Defender we tag turns "out" once raider reaches it (after 0.7)
        const taggedDefenderOut = p > 0.7;

        // Success once raider is home (p > 0.95) with tag registered
        const scored = p > 0.95;

        return (
          <svg viewBox="0 0 100 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Court background */}
            <Court x={2} y={4} width={96} height={48} color="#f59e0b" />
            {/* Middle line */}
            <RuleLine x1={50} y1={4} x2={50} y2={52} color="white" width={0.6} />
            {/* Baulk lines (near each half) */}
            <RuleLine x1={30} y1={4} x2={30} y2={52} color="white" width={0.4} />
            <RuleLine x1={70} y1={4} x2={70} y2={52} color="white" width={0.4} />
            {/* Bonus line */}
            <RuleLine x1={78} y1={4} x2={78} y2={52} color="#f5f5f5" width={0.3} />

            <text x={3} y={7} fill="white" fontSize={2.2} fontWeight={700} fontFamily="ui-sans-serif, system-ui">
              raider home
            </text>
            <text x={90} y={7} fill="white" fontSize={2.2} fontWeight={700} fontFamily="ui-sans-serif, system-ui" textAnchor="end">
              defender home
            </text>

            {/* Zones highlighting baulk and bonus */}
            <Zone x={30} y={4} width={20} height={48} color="white" opacity={0.05} />
            <Zone x={70} y={4} width={8} height={48} color="#4ade80" opacity={0.12} label="bonus" />

            {/* Six defenders in the right half */}
            <DefenderMarker x={55} y={12} out={false} label="LC" />
            <DefenderMarker x={55} y={44} out={false} label="RC" />
            <DefenderMarker x={62} y={16} out={false} label="LI" />
            <DefenderMarker x={62} y={40} out={false} label="RI" />
            <DefenderMarker x={68} y={20} out={taggedDefenderOut} label="COV" />
            <DefenderMarker x={68} y={36} out={false} label="COV" />
            <DefenderMarker x={72} y={28} out={false} label="ALL" />

            {/* Raider */}
            <Player x={rx} y={ry} color="#ef4444" label="Raid" outline="white" />

            {/* Caption / point banner */}
            <g>
              <text x={50} y={54.5} fill="white" fontSize={2.6} fontWeight={700} fontFamily="ui-sans-serif, system-ui" textAnchor="middle">
                {p < 0.2
                  ? "① Chant 'kabaddi'… ready to raid"
                  : p < 0.55
                    ? "② Cross the midline AND the baulk line"
                    : p < 0.75
                      ? "③ Tag a defender"
                      : p < 0.95
                        ? "④ Race back home"
                        : "✓ POINT — defender out"}
              </text>
            </g>

            {scored && (
              <g>
                <rect x={35} y={2} width={30} height={5.5} rx={2} fill="#22c55e" />
                <text x={50} y={5.9} textAnchor="middle" fill="white" fontSize={3.2} fontWeight={800} fontFamily="ui-sans-serif, system-ui">
                  +1 RAID POINT
                </text>
              </g>
            )}
          </svg>
        );
      }}
    </AnimationCanvas>
  );
}

function DefenderMarker({ x, y, out, label }: { x: number; y: number; out: boolean; label: string }) {
  return (
    <g transform={`translate(${x}, ${y})`} opacity={out ? 0.25 : 1}>
      <Player x={0} y={0} color={out ? "#94a3b8" : "#3b82f6"} label={label} outline="white" />
      {out && (
        <text
          y={-8}
          textAnchor="middle"
          fontSize={2.4}
          fontWeight={800}
          fontFamily="ui-sans-serif, system-ui"
          fill="#f43f5e"
        >
          ✕ OUT
        </text>
      )}
    </g>
  );
}
