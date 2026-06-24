import { Colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label: string;
  color?: "lightGray" | "darkGray" | "orange";
  onPress: VoidFunction;
}
export const Button = ({ label, color = "darkGray", onPress }: Props) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: Colors[color] }]}
      onPress={onPress}
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
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: 300,
  },
});
