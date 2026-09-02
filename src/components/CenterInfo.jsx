import { Text } from "@react-three/drei";

export default function CenterInfo() {
  return (
    <>
      <Text
        position={[0, 0.15, 0]}
        fontSize={0.55}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        $4,291
      </Text>

      <Text
        position={[0, -0.45, 0]}
        fontSize={0.18}
        color="#777"
        anchorX="center"
        anchorY="middle"
      >
        Net Worth
      </Text>
    </>
  );
}