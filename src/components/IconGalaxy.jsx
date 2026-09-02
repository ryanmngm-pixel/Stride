import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function IconGalaxy({
  type = "default",
  position = [0, 0, 0],
  count = 1000,
}) {
  const ref = useRef();

  const particles = useMemo(() => {
    const stars = [];

    const addStar = (x, y, spread = 0.04) => {
      stars.push(
        x + (Math.random() - 0.5) * spread,
        y + (Math.random() - 0.5) * spread,
        0
      );
    };

    const addCore = (amount = 350) => {
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius =
          Math.pow(Math.random(), 2) * 0.35;

        addStar(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0.08
        );
      }
    };

    addCore();

    switch (type) {
      case "goals":
        for (let r = 0.25; r <= 0.9; r += 0.25) {
          for (let i = 0; i < 250; i++) {
            const a =
              Math.random() * Math.PI * 2;

            addStar(
              Math.cos(a) * r,
              Math.sin(a) * r,
              0.03
            );
          }
        }
        break;

      case "income":
        for (let i = 0; i < 500; i++) {
          addStar(
            (Math.random() - 0.5) * 1.4,
            0,
            0.04
          );

          addStar(
            0,
            (Math.random() - 0.5) * 1.4,
            0.04
          );
        }
        break;

      case "spending":
        for (let i = 0; i < 700; i++) {
          addStar(
            (Math.random() - 0.5) * 1.6,
            0,
            0.04
          );
        }
        break;

      case "debt":
        for (let i = 0; i < 600; i++) {
          addStar(
            0,
            Math.random() * 1.2 - 0.1,
            0.05
          );
        }

        for (let i = 0; i < 200; i++) {
          const angle =
            Math.random() * Math.PI * 2;

          const radius =
            Math.random() * 0.15;

          addStar(
            Math.cos(angle) * radius,
            -0.9 + Math.sin(angle) * radius,
            0.02
          );
        }
        break;

      case "accounts":
        [
          [-0.6, 0.5],
          [0.6, 0.5],
          [-0.6, -0.5],
          [0.6, -0.5],
        ].forEach(([cx, cy]) => {
          for (let i = 0; i < 200; i++) {
            const angle =
              Math.random() * Math.PI * 2;

            const radius =
              Math.random() * 0.25;

            addStar(
              cx + Math.cos(angle) * radius,
              cy + Math.sin(angle) * radius,
              0.03
            );
          }
        });

        break;

      case "settings":
        for (let i = 0; i < 900; i++) {
          const angle =
            Math.random() * Math.PI * 2;

          const radius =
            0.85 +
            (Math.random() - 0.5) * 0.08;

          addStar(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0.03
          );
        }
        break;
    }

    return new Float32Array(stars);
  }, [type]);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.z += 0.00015;
  });

  return (
    <points ref={ref} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="white"
        size={0.018}
        transparent
        opacity={0.95}
      />
    </points>
  );
}