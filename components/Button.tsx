import { Colors } from "@/constants/colors";
import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;
  color?: "lightGray" | "darkGray" | "orange";
  onPress: VoidFunction;
  doubleSize?: boolean;
}
export const Button = ({
  label,
  doubleSize = false,
  color = "darkGray",
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: Colors[color],
          opacity: pressed ? 0.8 : 1,
          width: doubleSize ? 180 : 80,
        },
      ]}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: color === "lightGray" ? Colors.darkGray : Colors.textPrimary,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    fontWeight: 300,
  },
});
