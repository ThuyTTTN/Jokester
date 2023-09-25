import React, { useState } from "react";
import { Text, Button, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <>
      <Text>Login Page</Text>
      <View>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={email}
          onChangeText={setPassword}
        />
        <Button title="Submit" onPress={handleLogin} />
      </View>
    </>
  );
};

export default Login;
