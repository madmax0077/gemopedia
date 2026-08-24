import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Football (association) pitch — every marked line and dimension.
 */
export function FootballPitch() {
  return (
    <DiagramCanvas
      title="The football pitch"
      description="A regulation FIFA pitch — halfway line, centre circle, penalty areas (18-yard box), goal areas (6-yard box) and corner arcs."
      aspect="16/10"
      legend={[
        { color: "#166534", label: "Grass" },
        { color: "#ffffff", label: "Line markings" },
        { color: "#c084fc", label: "Penalty area" },
      ]}
    >
      <svg viewBox="0 0 200 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Pitch */}
        <rect x="0" y="0" width="200" height="130" fill="#166534" />
        {/* Stripes for depth */}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x="0" y={i * 13} width="200" height="6.5" fill="black" opacity="0.05" />
        ))}
        {/* Outer boundary */}
        <rect x="4" y="4" width="192" height="122" fill="none" stroke="white" strokeWidth="0.7" />
        {/* Halfway line */}
        <line x1="100" y1="4" x2="100" y2="126" stroke="white" strokeWidth="0.7" />
        {/* Centre circle */}
        <circle cx="100" cy="65" r="14" fill="none" stroke="white" strokeWidth="0.7" />
        <circle cx="100" cy="65" r="0.7" fill="white" />

        {/* Left penalty area (18-yard box) */}
        <rect x="4" y="35" width="26" height="60" fill="#c084fc" fillOpacity="0.14" stroke="white" strokeWidth="0.7" />
        {/* Left goal area (6-yard box) */}
        <rect x="4" y="52" width="10" height="26" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.7" />
        {/* Left penalty arc */}
        <path d="M30 55 A14 14 0 0 1 30 75" fill="none" stroke="white" strokeWidth="0.6" />
        {/* Left penalty spot */}
        <circle cx="22" cy="65" r="0.7" fill="white" />
        {/* Left goal */}
        <rect x="1.5" y="60" width="2.5" height="10" fill="white" stroke="#0f172a" strokeWidth="0.3" />

        {/* Right penalty area */}
        <rect x="170" y="35" width="26" height="60" fill="#c084fc" fillOpacity="0.14" stroke="white" strokeWidth="0.7" />
        <rect x="186" y="52" width="10" height="26" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.7" />
        <path d="M170 55 A14 14 0 0 0 170 75" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="178" cy="65" r="0.7" fill="white" />
        <rect x="196" y="60" width="2.5" height="10" fill="white" stroke="#0f172a" strokeWidth="0.3" />

        {/* Corner arcs */}
        {[
          [4, 4],
          [196, 4],
          [4, 126],
          [196, 126],
        ].map(([cx, cy], i) => (
          <path
            key={i}
            d={`M ${cx} ${cy} m ${cx < 100 ? 2 : -2} 0 A 2 2 0 0 ${cx < 100 === cy < 65 ? 1 : 0} ${cx} ${cy + (cy < 65 ? 2 : -2)}`}
            fill="none"
            stroke="white"
            strokeWidth="0.6"
          />
        ))}

        {/* Callouts */}
        <text x="17" y="32" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Penalty area
        </text>
        <text x="9" y="49" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          6-yard
        </text>
        <text x="22" y="70" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          spot
        </text>

        <text x="100" y="16" textAnchor="middle" fontSize="3" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          Halfway line
        </text>
        <text x="100" y="122" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          100–110 m long · 64–75 m wide
        </text>
      </svg>
    </DiagramCanvas>
  );
}
