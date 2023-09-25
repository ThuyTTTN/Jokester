import React, { useState } from "react";
import { Text, Button, StyleSheet, TextInput, View } from "react-native";
import Colors from "../theme/Colors";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    //sign up logic here
    console.log("sign up", { name, email, password });
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up page</Text>
      <View>
        <TextInput placeholder="Name" value={name} onChangeText={setName} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Submit" onPress={handleSignUp} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.chineseGold,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
