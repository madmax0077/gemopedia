import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * Sepak takraw court — 13.4 m × 6.1 m, split by a low net. Shows the
 * two service circles and the three positions.
 */
export function SepakTakrawCourt() {
  return (
    <DiagramCanvas
      title="A sepak takraw court"
      description="The same court size as badminton doubles. The tekong serves from inside the service circle; the two apits (feeders/strikers) roam the rest of the half."
      aspect="16/9"
      legend={[
        { color: "#0f766e", label: "Court" },
        { color: "#fef3c7", label: "Service circle" },
        { color: "#ef4444", label: "Tekong" },
        { color: "#3b82f6", label: "Apit" },
      ]}
    >
      <svg viewBox="0 0 200 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Court */}
        <rect x="4" y="4" width="192" height="102" fill="#0f766e" />
        <rect x="4" y="4" width="192" height="102" fill="none" stroke="white" strokeWidth="0.7" />

        {/* Net */}
        <line x1="100" y1="4" x2="100" y2="106" stroke="white" strokeWidth="1.2" />
        <g stroke="white" strokeOpacity="0.4" strokeWidth="0.25">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1="99" x2="101" y1={4 + (i * 102) / 20} y2={4 + (i * 102) / 20} />
          ))}
        </g>
        <text x="100" y="4" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          NET 1.52 m (men) · 1.42 m (women)
        </text>

        {/* Left service circle */}
        <circle cx="50" cy="55" r="8" fill="#fef3c7" fillOpacity="0.85" stroke="white" strokeWidth="0.5" />
        {/* Right service circle */}
        <circle cx="150" cy="55" r="8" fill="#fef3c7" fillOpacity="0.85" stroke="white" strokeWidth="0.5" />

        {/* Left team */}
        <g transform="translate(50, 55)">
          <circle r="3" fill="#ef4444" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="3" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">T</text>
        </g>
        <g transform="translate(25, 30)">
          <circle r="3" fill="#3b82f6" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="2.6" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">A</text>
        </g>
        <g transform="translate(25, 80)">
          <circle r="3" fill="#3b82f6" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="2.6" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">A</text>
        </g>

        {/* Right team */}
        <g transform="translate(150, 55)">
          <circle r="3" fill="#ef4444" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="3" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">T</text>
        </g>
        <g transform="translate(175, 30)">
          <circle r="3" fill="#3b82f6" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="2.6" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">A</text>
        </g>
        <g transform="translate(175, 80)">
          <circle r="3" fill="#3b82f6" stroke="white" strokeWidth="0.4" />
          <text y="1.1" textAnchor="middle" fontSize="2.6" fontWeight="800" fill="white" fontFamily="ui-sans-serif, system-ui">A</text>
        </g>

        <text x="50" y="103" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          6.1 m
        </text>
        <text x="150" y="103" textAnchor="middle" fontSize="2.6" fill="white" fontFamily="ui-sans-serif, system-ui">
          × 13.4 m
        </text>
      </svg>
    </DiagramCanvas>
  );
}
