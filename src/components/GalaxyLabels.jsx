import { Text } from "@react-three/drei";

export default function GalaxyLabels() {
  return (
    <>
      <Text position={[0, 7.5, 0]} fontSize={0.28}>
        Goals
      </Text>

      <Text position={[-6.2, 3.8, 0]} fontSize={0.28}>
        Accounts
      </Text>

      <Text position={[6.2, 3.8, 0]} fontSize={0.28}>
        Income
      </Text>

      <Text position={[-6, -2.2, 0]} fontSize={0.28}>
        Debt
      </Text>

      <Text position={[6, -2.2, 0]} fontSize={0.28}>
        Spending
      </Text>

      <Text position={[0, -7.5, 0]} fontSize={0.28}>
        Settings
      </Text>
    </>
  );
}