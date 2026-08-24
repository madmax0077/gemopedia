import React from "react";

/**
 * Animation primitives — SVG building blocks composed by every sport-specific
 * animation. Each primitive is deliberately dumb: props in, SVG out. State
 * lives in the parent composed animation, which is itself driven by the
 * `progress` value from `AnimationCanvas`.
 *
 * All primitives assume the parent SVG viewBox is set — they don't create
 * one themselves.
 */

/* ---------------------- Player ---------------------- */
export function Player({
  x,
  y,
  color = "#ef4444",
  label,
  outline = "#111827",
}: {
  x: number;
  y: number;
  color?: string;
  label?: string;
  outline?: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r={2.6} cy={-6} fill={color} stroke={outline} strokeWidth={0.4} />
      <rect x={-2.2} y={-3.5} width={4.4} height={7} rx={1.4} fill={color} stroke={outline} strokeWidth={0.4} />
      {label && (
        <text
          y={9.5}
          textAnchor="middle"
          fontSize={2.8}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill="#111827"
          fontWeight={700}
        >
          {label}
        </text>
      )}
    </g>
  );
}

/* ---------------------- Ball ---------------------- */
export function Ball({
  x,
  y,
  r = 1.2,
  color = "#f5f5f5",
  stroke = "#111827",
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
  stroke?: string;
}) {
  return <circle cx={x} cy={y} r={r} fill={color} stroke={stroke} strokeWidth={0.35} />;
}

/* ---------------------- Field / Court ---------------------- */
export function Field({
  x = 0,
  y = 0,
  width = 100,
  height = 60,
  color = "#22c55e",
  stripe = false,
}: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  color?: string;
  stripe?: boolean;
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={2} fill={color} />
      {stripe && (
        <>
          {Array.from({ length: 10 }).map((_, i) => (
            <rect
              key={i}
              x={x}
              y={y + (i * height) / 10}
              width={width}
              height={height / 20}
              fill="black"
              opacity={0.07}
            />
          ))}
        </>
      )}
    </g>
  );
}

/* ---------------------- Court (indoor tone) ---------------------- */
export function Court({
  x = 0,
  y = 0,
  width = 100,
  height = 60,
  color = "#f59e0b",
}: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  color?: string;
}) {
  return <rect x={x} y={y} width={width} height={height} rx={2.5} fill={color} />;
}

/* ---------------------- Goal ---------------------- */
export function Goal({
  x,
  y,
  width = 12,
  height = 6,
  facing = "left",
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
  facing?: "left" | "right";
}) {
  const netX = facing === "left" ? x : x - width;
  return (
    <g>
      <rect x={netX} y={y - height / 2} width={width} height={height} fill="white" stroke="#111827" strokeWidth={0.5} />
      <g stroke="#111827" strokeOpacity={0.25} strokeWidth={0.15}>
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={netX + (i * width) / 6}
            x2={netX + (i * width) / 6}
            y1={y - height / 2}
            y2={y + height / 2}
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line
            key={`h${i}`}
            y1={y - height / 2 + (i * height) / 4}
            y2={y - height / 2 + (i * height) / 4}
            x1={netX}
            x2={netX + width}
          />
        ))}
      </g>
    </g>
  );
}

/* ---------------------- Zone (highlighted region) ---------------------- */
export function Zone({
  x,
  y,
  width,
  height,
  color = "#6366f1",
  label,
  opacity = 0.18,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  label?: string;
  opacity?: number;
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={1.5} fill={color} opacity={opacity} />
      <rect x={x} y={y} width={width} height={height} rx={1.5} fill="none" stroke={color} strokeWidth={0.4} strokeDasharray="1.4 1" />
      {label && (
        <text
          x={x + 1.5}
          y={y + 3}
          fontSize={2.6}
          fontWeight={700}
          fill={color}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  );
}

/* ---------------------- Arrow ---------------------- */
export function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = "#111827",
  width = 0.5,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
}) {
  const id = `arrow-${Math.round(x1 + y1 + x2 + y2)}`;
  return (
    <g>
      <defs>
        <marker
          id={id}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4.5"
          markerHeight="4.5"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={width}
        markerEnd={`url(#${id})`}
      />
    </g>
  );
}

/* ---------------------- Trajectory (curved dashed line) ---------------------- */
export function Trajectory({
  path,
  color = "#111827",
  dashed = true,
}: {
  path: string;
  color?: string;
  dashed?: boolean;
}) {
  return (
    <path d={path} fill="none" stroke={color} strokeWidth={0.35} strokeDasharray={dashed ? "1.2 1" : undefined} />
  );
}

/* ---------------------- Line (rule line) ---------------------- */
export function RuleLine({
  x1,
  y1,
  x2,
  y2,
  color = "white",
  width = 0.4,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
}) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} />;
}
