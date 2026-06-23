import { Colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={{ fontSize: 40, color: Colors.textPrimary }}>
        Hola mundo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
