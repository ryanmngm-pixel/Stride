import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Galaxy from "../components/Galaxy";

const nodes = [
  {
    label: "GOALS",
    position: [0, 4.2, 0],
    textPosition: [0, 3.5, 0],
    color: "#a855f7",
  },
  {
    label: "ACCOUNTS",
    position: [-4.8, 1.8, 0],
    textPosition: [-4.8, 1.1, 0],
    color: "#3b82f6",
  },
  {
    label: "INCOME",
    position: [4.8, 1.8, 0],
    textPosition: [4.8, 1.1, 0],
    color: "#22c55e",
  },
  {
    label: "DEBT",
    position: [-4.2, -3.2, 0],
    textPosition: [-4.2, -3.9, 0],
    color: "#ef4444",
  },
  {
    label: "SPENDING",
    position: [4.2, -3.2, 0],
    textPosition: [4.2, -3.9, 0],
    color: "#f97316",
  },
  {
    label: "SETTINGS",
    position: [0, -4.9, 0],
    textPosition: [0, -5.6, 0],
    color: "#94a3b8",
  },
];

export default function Universe() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Canvas
        orthographic
        camera={{
          zoom: 70,
          position: [0, 0, 10],
        }}
      >
        {/* Core Galaxy */}
        <Galaxy
          count={3000}
          radius={1.6}
          position={[0, 0, 0]}
          color="#ffffff"
          size={0.018}
        />

        {/* Outer Galaxies */}
        {nodes.map((node) => (
          <Galaxy
            key={node.label}
            count={180}
            radius={0.32}
            position={node.position}
            color={node.color}
            size={0.02}
          />
        ))}

        {/* Labels */}
        {nodes.map((node) => (
          <Html
            key={node.label}
            position={node.textPosition}
            center
          >
            <div
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {node.label}
            </div>
          </Html>
        ))}
      </Canvas>

      {/* Center UI */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "clamp(2.8rem, 12vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          $4,291
        </div>

        <div
          style={{
            marginTop: "0.4rem",
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.9rem",
          }}
        >
          Net Worth
        </div>
      </div>
    </div>
  );
}