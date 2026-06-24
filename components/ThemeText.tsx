import { Colors } from "@/constants/colors";
import { StyleSheet, Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}
export const ThemeText = ({
  children,
  variant = "h1",
  numberOfLines = 1,
  adjustsFontSizeToFit = true,
  ...props
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={variant === "h1" ? styles.mainResult : styles.subResult}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: "right",
    fontWeight: 400,
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: 300,
  },
});
