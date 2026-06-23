import { Colors } from "@/constants/colors";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
}
