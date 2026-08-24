import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Cricket fielding positions — the classic 360° map.
 *
 * The batter faces right, with a right-handed batter at the crease.
 * "Off side" is to the left of the batter (top of the diagram), "leg
 * side" is to the right (bottom). Positions inside the 30-yard circle
 * (light green) are close fielders; outside the circle are the deep
 * boundary riders.
 */
export function CricketFieldingPositions() {
  const positions: { x: number; y: number; label: string; leg?: boolean }[] = [
    // Close catchers
    { x: 78, y: 42, label: "Slip" },
    { x: 78, y: 38, label: "Gully" },
    { x: 75, y: 25, label: "Silly point" },
    { x: 75, y: 62, label: "Short leg", leg: true },
    { x: 82, y: 50, label: "Wicket-keeper" },

    // Inner ring (off side, above pitch)
    { x: 62, y: 18, label: "Point" },
    { x: 48, y: 22, label: "Cover" },
    { x: 32, y: 25, label: "Mid-off" },
    { x: 25, y: 42, label: "Bowler" },

    // Inner ring (leg side, below pitch)
    { x: 62, y: 78, label: "Square leg", leg: true },
    { x: 48, y: 74, label: "Midwicket", leg: true },
    { x: 32, y: 68, label: "Mid-on", leg: true },

    // Deep / boundary
    { x: 88, y: 12, label: "Third man" },
    { x: 60, y: 5, label: "Deep point" },
    { x: 30, y: 8, label: "Deep cover" },
    { x: 6, y: 40, label: "Long-off" },
    { x: 6, y: 55, label: "Long-on", leg: true },
    { x: 30, y: 88, label: "Deep midwicket", leg: true },
    { x: 60, y: 90, label: "Deep square leg", leg: true },
    { x: 88, y: 82, label: "Fine leg", leg: true },
  ];

  return (
    <DiagramCanvas
      title="Cricket fielding positions"
      description="Names of every position around a right-handed batter. Off side is above the pitch, leg side below."
      aspect="16/10"
      legend={[
        { color: "#0ea5e9", label: "Off-side fielder" },
        { color: "#f97316", label: "Leg-side fielder" },
        { color: "#ef4444", label: "Bowler" },
        { color: "#22c55e", label: "Batter" },
      ]}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Outfield oval */}
        <ellipse cx="50" cy="50" rx="48" ry="48" fill="#166534" />
        <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="0.4" />

        {/* 30-yard circle (inner ring) */}
        <ellipse cx="50" cy="50" rx="28" ry="28" fill="#22c55e" fillOpacity="0.28" stroke="white" strokeOpacity="0.55" strokeWidth="0.3" strokeDasharray="1 0.8" />

        {/* Pitch */}
        <rect x="24" y="46" width="60" height="8" fill="#c8a97a" />
        {/* Stumps */}
        <rect x="24.5" y="47.5" width="1" height="5" fill="#f5f5f5" />
        <rect x="83.5" y="47.5" width="1" height="5" fill="#f5f5f5" />

        {/* Off / Leg side labels */}
        <text x="50" y="8" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          OFF SIDE
        </text>
        <text x="50" y="96" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          LEG SIDE
        </text>

        {/* Batter marker (right-handed, at the striker's end) */}
        <circle cx="82" cy="50" r="1.6" fill="#22c55e" stroke="white" strokeWidth="0.35" />

        {/* Bowler + fielders */}
        {positions.map((p) => (
          <g key={p.label} transform={`translate(${p.x}, ${p.y})`}>
            <circle
              r="1.5"
              fill={p.label === "Bowler" ? "#ef4444" : p.leg ? "#f97316" : "#0ea5e9"}
              stroke="white"
              strokeWidth="0.35"
            />
            <text
              y="-2.3"
              textAnchor="middle"
              fontSize="2.1"
              fontWeight="700"
              fill="white"
              fontFamily="ui-sans-serif, system-ui"
              style={{ paintOrder: "stroke", stroke: "#0f172a", strokeWidth: 0.5 }}
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </DiagramCanvas>
  );
}
