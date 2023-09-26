import React, { useState } from "react";
import { Text, Button, StyleSheet, TextInput, View } from "react-native";
import colors from "../theme/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <View style={styles.container}>
      {/* <Text>Login Page</Text> */}
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
        <Button title="Submit" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 3,
    // backgroundColor: colors.chineseGold,
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
    borderColor: colors.smokeyBlack,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});
