import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Hurling — H-shaped goals with scoring explained.
 * Green = goal (under the bar, 3 points).
 * White = point (over the bar between the posts, 1 point).
 */
export function HurlingGoals() {
  return (
    <DiagramCanvas
      title="Scoring in hurling"
      description="A goal (green flag) is worth 3 points; a point (white flag) is worth 1. Scores are written 'goals-points' — e.g. 2-15 means 2 goals + 15 points = 21 aggregate."
      aspect="16/10"
      legend={[
        { color: "#22c55e", label: "Goal zone — 3 pts" },
        { color: "#ffffff", label: "Point zone — 1 pt" },
      ]}
    >
      <svg viewBox="0 0 200 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Grass */}
        <rect x="0" y="0" width="200" height="120" fill="#166534" />
        {/* End-line */}
        <line x1="0" y1="90" x2="200" y2="90" stroke="white" strokeWidth="0.7" />

        {/* Point zones (between posts, above crossbar) */}
        <rect x="60" y="10" width="80" height="45" fill="white" fillOpacity="0.16" />
        {/* Goal zone (between posts, under crossbar) */}
        <rect x="60" y="55" width="80" height="35" fill="#22c55e" fillOpacity="0.35" />

        {/* Uprights */}
        <line x1="60" y1="10" x2="60" y2="90" stroke="white" strokeWidth="1.2" />
        <line x1="140" y1="10" x2="140" y2="90" stroke="white" strokeWidth="1.2" />
        {/* Crossbar */}
        <line x1="60" y1="55" x2="140" y2="55" stroke="white" strokeWidth="1.2" />

        {/* Net texture in the goal */}
        <g stroke="white" strokeOpacity="0.35" strokeWidth="0.25">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v-${i}`} x1={60 + (i * 80) / 8} x2={60 + (i * 80) / 8} y1="55" y2="90" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`h-${i}`} y1={55 + (i * 35) / 4} y2={55 + (i * 35) / 4} x1="60" x2="140" />
          ))}
        </g>

        {/* Point flags */}
        <text x="100" y="30" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">
          POINT · 1 pt
        </text>
        <text x="100" y="42" textAnchor="middle" fontSize="3" fill="white" fontFamily="ui-sans-serif, system-ui">
          over the crossbar, between the posts
        </text>

        {/* Goal label */}
        <text x="100" y="72" textAnchor="middle" fontSize="7" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui" style={{ paintOrder: "stroke", stroke: "#0f172a", strokeWidth: 0.8 }}>
          GOAL · 3 pts
        </text>
        <text x="100" y="82" textAnchor="middle" fontSize="3" fill="white" fontFamily="ui-sans-serif, system-ui">
          under the crossbar, into the net
        </text>

        {/* Field text */}
        <text x="100" y="108" textAnchor="middle" fontSize="3.5" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Pitch: 130–145 m long · 80–90 m wide
        </text>
      </svg>
    </DiagramCanvas>
  );
}
