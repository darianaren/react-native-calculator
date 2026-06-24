import { ThemeText } from "@/components/ThemeText";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemeText>10 + 2</ThemeText>
      <ThemeText variant="h2">12</ThemeText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
});
