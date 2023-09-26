import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignedUp(!isSignedUp);
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.chineseGold,
    alignItems: "center",
    justifyContent: "flex-start",
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
