import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Galaxy({
  count = 1000,
  radius = 1,
  position = [0, 0, 0],
  color = "white",
  size = 0.02,
}) {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const cluster = Math.floor(Math.random() * 8);

      const clusterAngle =
        (cluster / 8) * Math.PI * 2;

      const clusterDistance =
        Math.random() * radius * 0.7;

      const clusterX =
        Math.cos(clusterAngle) *
        clusterDistance;

      const clusterY =
        Math.sin(clusterAngle) *
        clusterDistance;

      const spread =
        Math.random() * radius * 0.55;

      const angle =
        Math.random() * Math.PI * 2;

      const x =
        clusterX +
        Math.cos(angle) * spread +
        (Math.random() - 0.5) * 0.25;

      const y =
        clusterY +
        Math.sin(angle) * spread +
        (Math.random() - 0.5) * 0.25;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
    }

    return positions;
  }, [count, radius]);

  useFrame(() => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.z += 0.00008;
  });

  return (
    <points
      ref={pointsRef}
      position={position}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={0.95}
      />
    </points>
  );
}