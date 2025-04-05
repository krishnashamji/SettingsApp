import { Stack } from "expo-router";
import { Text } from "react-native";
import useLoadFonts from "@/hooks/useLoadFonts"

export default function RootLayout() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  return (
      <Stack />
  );
};
