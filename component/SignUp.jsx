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
      {/* <Text>Sign Up page</Text> */}
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          fontSize={18}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          fontSize={18}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          fontSize={18}
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
    flex: 3,
    backgroundColor: Colors.chineseGold,
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
    paddingLeft: 5,
  },
});
