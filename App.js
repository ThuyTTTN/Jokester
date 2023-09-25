import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./theme/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Jokester</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.chineseGold,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "30%",
  },
});
