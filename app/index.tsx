import { Button } from "@/components/Button";
import { ThemeText } from "@/components/ThemeText";
import { Platform, StyleSheet, View } from "react-native";

import { useCalculator } from "@/hooks/useCalculator";
import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) NavigationBar.setBackgroundColorAsync("black");

export default function HomeScreen() {
  const { formula, buildNumber } = useCalculator();
  return (
    <View style={styles.container}>
      <ThemeText>{formula}</ThemeText>
      <ThemeText variant="h2">12</ThemeText>
      <View style={styles.row}>
        <Button label="C" color="lightGray" onPress={() => console.log("")} />
        <Button label="+/-" color="lightGray" onPress={() => console.log("")} />
        <Button label="del" color="lightGray" onPress={() => console.log("")} />
        <Button label="÷" color="orange" onPress={() => console.log("")} />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={() => buildNumber("7")} />
        <Button label="8" onPress={() => buildNumber("8")} />
        <Button label="9" onPress={() => buildNumber("9")} />
        <Button label="x" color="orange" onPress={() => console.log("")} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => buildNumber("4")} />
        <Button label="5" onPress={() => buildNumber("5")} />
        <Button label="6" onPress={() => buildNumber("6")} />
        <Button label="-" color="orange" onPress={() => console.log("")} />
      </View>
      <View style={styles.row}>
        <Button label="1" onPress={() => buildNumber("1")} />
        <Button label="2" onPress={() => buildNumber("2")} />
        <Button label="3" onPress={() => buildNumber("3")} />
        <Button label="+" color="orange" onPress={() => console.log("")} />
      </View>
      <View style={styles.row}>
        <Button label="0" doubleSize onPress={() => buildNumber("0")} />
        <Button label="." onPress={() => buildNumber(".")} />
        <Button label="=" color="orange" onPress={() => console.log("")} />
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
