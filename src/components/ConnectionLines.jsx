import { Line } from "@react-three/drei";

export default function ConnectionLines() {
  const center = [0, 0, 0];

  const galaxies = [
    [0, 6.2, 0],     // Goals
    [-4.5, 3, 0],    // Accounts
    [4.5, 3, 0],     // Income
    [-4.5, -3, 0],   // Debt
    [4.5, -3, 0],    // Spending
    [0, -6.2, 0],    // Settings
  ];

  return (
    <>
      {galaxies.map((position, index) => (
        <Line
          key={index}
          points={[center, position]}
          color="white"
          transparent
          opacity={0.15}
          lineWidth={1}
        />
      ))}
    </>
  );
}