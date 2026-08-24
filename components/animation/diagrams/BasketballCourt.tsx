import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Basketball court — half-court view with 3-point arc, key/paint,
 * free-throw line and restricted area.
 */
export function BasketballCourt() {
  return (
    <DiagramCanvas
      title="The basketball court"
      description="A NBA / FIBA regulation court — with the three-point arc, the paint (key), the free-throw circle and the restricted area."
      aspect="16/10"
      legend={[
        { color: "#c2410c", label: "Court" },
        { color: "#f59e0b", label: "Paint (key)" },
        { color: "#0ea5e9", label: "3-point line" },
      ]}
    >
      <svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Court */}
        <rect x="0" y="0" width="200" height="130" fill="#c2410c" />
        {/* Boundary */}
        <rect x="4" y="4" width="192" height="122" fill="none" stroke="white" strokeWidth="0.6" />
        {/* Halfway line */}
        <line x1="100" y1="4" x2="100" y2="126" stroke="white" strokeWidth="0.6" />
        <circle cx="100" cy="65" r="14" fill="none" stroke="white" strokeWidth="0.5" />

        {/* LEFT half (mirror version at right for symmetry) */}
        {/* Paint (key) */}
        <rect x="4" y="45" width="38" height="40" fill="#f59e0b" fillOpacity="0.55" stroke="white" strokeWidth="0.5" />
        {/* Free-throw circle */}
        <circle cx="42" cy="65" r="12" fill="none" stroke="white" strokeWidth="0.5" />
        {/* Restricted area */}
        <path d="M4 55 A10 10 0 0 1 4 75" fill="none" stroke="white" strokeWidth="0.5" />
        {/* Backboard */}
        <line x1="10" y1="60" x2="10" y2="70" stroke="white" strokeWidth="1" />
        {/* Rim */}
        <circle cx="12" cy="65" r="1.3" fill="none" stroke="#facc15" strokeWidth="0.5" />
        {/* 3-point arc */}
        <path d="M4 25 L20 25 A44 44 0 0 1 20 105 L4 105" fill="none" stroke="#0ea5e9" strokeWidth="0.8" />

        {/* RIGHT half */}
        <rect x="158" y="45" width="38" height="40" fill="#f59e0b" fillOpacity="0.55" stroke="white" strokeWidth="0.5" />
        <circle cx="158" cy="65" r="12" fill="none" stroke="white" strokeWidth="0.5" />
        <path d="M196 55 A10 10 0 0 0 196 75" fill="none" stroke="white" strokeWidth="0.5" />
        <line x1="190" y1="60" x2="190" y2="70" stroke="white" strokeWidth="1" />
        <circle cx="188" cy="65" r="1.3" fill="none" stroke="#facc15" strokeWidth="0.5" />
        <path d="M196 25 L180 25 A44 44 0 0 0 180 105 L196 105" fill="none" stroke="#0ea5e9" strokeWidth="0.8" />

        {/* Callouts */}
        <text x="23" y="52" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Paint
        </text>
        <text x="42" y="42" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          Free-throw line
        </text>
        <text x="32" y="20" textAnchor="middle" fontSize="2.6" fill="#0ea5e9" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          3-point arc
        </text>
        <text x="100" y="122" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          FIBA: 28 m × 15 m · NBA: 28.65 m × 15.24 m · hoop 3.05 m high
        </text>
      </svg>
    </DiagramCanvas>
  );
}
