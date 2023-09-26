import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../theme/Colors";

const PrimaryButton = ({ children }) => {
  const handlePress = () => {
    console.log("pressed!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonContainer}
        onPress={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        android_ripple={{ color: "#283022" }}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.smokeyBlack,
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});