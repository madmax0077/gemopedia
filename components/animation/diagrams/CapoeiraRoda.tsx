import React from "react";
import { DiagramCanvas } from "../DiagramCanvas";

/**
 * A capoeira roda — the circle formed by musicians and clapping
 * participants around the two jogadores (players). The berimbaus, atabaque
 * and pandeiros sit at the top of the circle (the "bateria").
 */
export function CapoeiraRoda() {
  const positions: { angle: number; label: string; group: "bat" | "player" | "chorus" }[] = [
    { angle: 270, label: "berimbau gunga", group: "bat" },
    { angle: 285, label: "berimbau médio", group: "bat" },
    { angle: 300, label: "berimbau viola", group: "bat" },
    { angle: 250, label: "atabaque", group: "bat" },
    { angle: 235, label: "pandeiro", group: "bat" },
    { angle: 315, label: "pandeiro", group: "bat" },
    { angle: 0, label: "chorus", group: "chorus" },
    { angle: 45, label: "chorus", group: "chorus" },
    { angle: 90, label: "chorus", group: "chorus" },
    { angle: 135, label: "chorus", group: "chorus" },
    { angle: 180, label: "chorus", group: "chorus" },
  ];

  return (
    <DiagramCanvas
      title="A capoeira roda"
      description="The roda is the circle. At the top sits the bateria — three berimbaus, an atabaque and two pandeiros. Everyone else claps and sings while two players jogam in the middle."
      aspect="1/1"
      legend={[
        { color: "#f59e0b", label: "Bateria (music)" },
        { color: "#0ea5e9", label: "Chorus" },
        { color: "#ef4444", label: "Player" },
      ]}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Sand */}
        <rect x="0" y="0" width="100" height="100" fill="#78350f" />
        {/* Roda circle */}
        <circle cx="50" cy="50" r="42" fill="#c2926a" stroke="white" strokeWidth="0.4" strokeDasharray="1.5 1" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="0.5" />

        {/* Two players in the middle */}
        <g transform="translate(42, 50)">
          <circle r="3.5" fill="#ef4444" stroke="white" strokeWidth="0.5" />
        </g>
        <g transform="translate(58, 50)">
          <circle r="3.5" fill="#ef4444" stroke="white" strokeWidth="0.5" />
        </g>
        {/* Ginga arrows */}
        <path d="M 45 50 L 55 50" stroke="white" strokeWidth="0.4" strokeDasharray="1 0.8" markerEnd="url(#arA)" markerStart="url(#arB)" />
        <defs>
          <marker id="arA" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="white" />
          </marker>
          <marker id="arB" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M10 0 L0 5 L10 10 z" fill="white" />
          </marker>
        </defs>

        {/* Ring positions */}
        {positions.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const cx = 50 + Math.cos(rad) * 42;
          const cy = 50 + Math.sin(rad) * 42;
          const color = p.group === "bat" ? "#f59e0b" : "#0ea5e9";
          return (
            <g key={`${p.angle}-${p.label}`}>
              <circle cx={cx} cy={cy} r="2.4" fill={color} stroke="white" strokeWidth="0.4" />
              {p.group === "bat" && (
                <text
                  x={cx}
                  y={cy - 4}
                  textAnchor="middle"
                  fontSize="1.8"
                  fill="white"
                  fontWeight="700"
                  fontFamily="ui-sans-serif, system-ui"
                  style={{ paintOrder: "stroke", stroke: "#0f172a", strokeWidth: 0.4 }}
                >
                  {p.label}
                </text>
              )}
            </g>
          );
        })}

        <text x="50" y="97" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="700" fontFamily="ui-sans-serif, system-ui">
          the roda opens with the berimbau
        </text>
      </svg>
    </DiagramCanvas>
  );
}
