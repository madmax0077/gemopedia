import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Cricket pitch — the 22-yard playing strip, with popping crease,
 * bowling crease and return creases labelled.
 */
export function CricketPitch() {
  return (
    <DiagramCanvas
      title="The cricket pitch"
      description="22 yards (20.12 m) end to end. All the action between bowler and batter happens on this strip."
      aspect="16/6"
      legend={[
        { color: "#c8a97a", label: "Pitch" },
        { color: "#f5f5f5", label: "Stumps" },
        { color: "#ffffff", label: "Crease" },
      ]}
    >
      <svg viewBox="0 0 200 60" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Outfield */}
        <rect x="0" y="0" width="200" height="60" fill="#166534" />
        {/* Pitch */}
        <rect x="10" y="18" width="180" height="24" fill="#c8a97a" />
        {/* Popping creases (batter's crease — dashed line 1.22 m in front of stumps) */}
        <line x1="24" y1="18" x2="24" y2="42" stroke="white" strokeWidth="0.6" />
        <line x1="176" y1="18" x2="176" y2="42" stroke="white" strokeWidth="0.6" />
        {/* Bowling crease (line of the stumps) */}
        <line x1="18" y1="20" x2="18" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="1.4 1" />
        <line x1="182" y1="20" x2="182" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="1.4 1" />
        {/* Return creases (perpendicular) */}
        <line x1="14" y1="24" x2="24" y2="24" stroke="white" strokeWidth="0.4" />
        <line x1="14" y1="36" x2="24" y2="36" stroke="white" strokeWidth="0.4" />
        <line x1="176" y1="24" x2="186" y2="24" stroke="white" strokeWidth="0.4" />
        <line x1="176" y1="36" x2="186" y2="36" stroke="white" strokeWidth="0.4" />

        {/* Stumps */}
        {[17.4, 18, 18.6].map((sx, i) => (
          <line key={`ls-${i}`} x1={sx} y1="28" x2={sx} y2="32" stroke="#f5f5f5" strokeWidth="0.5" />
        ))}
        {[181.4, 182, 182.6].map((sx, i) => (
          <line key={`rs-${i}`} x1={sx} y1="28" x2={sx} y2="32" stroke="#f5f5f5" strokeWidth="0.5" />
        ))}

        {/* 22-yard label */}
        <line x1="24" y1="52" x2="176" y2="52" stroke="white" strokeWidth="0.4" markerStart="url(#arrL)" markerEnd="url(#arrR)" />
        <defs>
          <marker id="arrL" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M10 0 L0 5 L10 10 z" fill="white" />
          </marker>
          <marker id="arrR" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="white" />
          </marker>
        </defs>
        <text x="100" y="50" textAnchor="middle" fontSize="3.2" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          22 yards (20.12 m)
        </text>

        {/* Callouts */}
        <text x="24" y="14" textAnchor="middle" fontSize="2.6" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Popping crease (batter)
        </text>
        <text x="176" y="14" textAnchor="middle" fontSize="2.6" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Popping crease (batter)
        </text>
        <text x="18" y="8" textAnchor="middle" fontSize="2.4" fill="white" fontFamily="ui-sans-serif, system-ui">
          Bowling crease
        </text>
        <text x="182" y="8" textAnchor="middle" fontSize="2.4" fill="white" fontFamily="ui-sans-serif, system-ui">
          Bowling crease
        </text>
      </svg>
    </DiagramCanvas>
  );
}
