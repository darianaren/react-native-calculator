import { Button } from "@/components/Button";
import { ThemeText } from "@/components/ThemeText";
import { Platform, StyleSheet, View } from "react-native";

import * as NavigationBar from "expo-navigation-bar";

const isAndroid = Platform.OS === "android";

if (isAndroid) NavigationBar.setBackgroundColorAsync("black");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemeText>10 + 2</ThemeText>
      <ThemeText variant="h2">12</ThemeText>
      <View style={styles.row}>
        <Button label="C" color="lightGray" onPress={console.log} />
        <Button label="+/-" color="lightGray" onPress={console.log} />
        <Button label="del" color="lightGray" onPress={console.log} />
        <Button label="÷" color="orange" onPress={console.log} />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={console.log} />
        <Button label="8" onPress={console.log} />
        <Button label="9" onPress={console.log} />
        <Button label="x" color="orange" onPress={console.log} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={console.log} />
        <Button label="5" onPress={console.log} />
        <Button label="6" onPress={console.log} />
        <Button label="-" color="orange" onPress={console.log} />
      </View>
      <View style={styles.row}>
        <Button label="1" onPress={console.log} />
        <Button label="2" onPress={console.log} />
        <Button label="3" onPress={console.log} />
        <Button label="+" color="orange" onPress={console.log} />
      </View>
      <View style={styles.row}>
        <Button label="0" doubleSize onPress={console.log} />
        <Button label="." onPress={console.log} />
        <Button label="=" color="orange" onPress={console.log} />
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
