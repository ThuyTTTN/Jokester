import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Colors from "../theme/Colors";

const LoginSignupScreen = ({ navigation }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignedUp(!isSignedUp);
  };

  const testingNavPress = () => {
    console.log("test press");
    navigation.navigate("Jokes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Jokester</Text>
      <View style={styles.textWrapper}>
        <TouchableOpacity onPress={() => setIsSignedUp(false)}>
          <Text style={[styles.textStyle, !isSignedUp && styles.activeText]}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}> / </Text>
        <TouchableOpacity onPress={() => setIsSignedUp(true)}>
          <Text style={[styles.textStyle, isSignedUp && styles.activeText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {isSignedUp ? <SignUp /> : <Login />}
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Colors.cintrine,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "30%",
    marginBottom: "30%",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  activeText: {
    textDecorationLine: "underline",
  },
  textWrapper: {
    flexDirection: "row",
  },
});
