import { Button } from "@/components/Button";
import { ThemeText } from "@/components/ThemeText";
import { StyleSheet, View } from "react-native";

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
