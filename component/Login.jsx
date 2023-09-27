import React, { useState } from "react";
import { Text, Button, StyleSheet, TextInput, View } from "react-native";
import Colors from "../theme/Colors";
import PrimaryButton from "./PrimaryButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login:", { email, password });
    navigation.navigate("Jokes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          fontSize={16}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={email}
          onChangeText={setPassword}
          fontSize={16}
        />
        <PrimaryButton onPress={handleLogin}>Submit</PrimaryButton>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    width: "100%",
    marginTop: "3%",
  },
  innerContainer: {
    width: "70%",
  },
  input: {
    marginVertical: 10,
    height: 40,
    borderColor: Colors.smokeyBlack,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});
