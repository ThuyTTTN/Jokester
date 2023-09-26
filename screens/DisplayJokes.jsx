import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AnimalImages from "../component/AnimalImages";

const DisplayJokes = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => {
        console.log("joke json", json);
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <View style={styles.container}>
      {/* <Text>Display Jokes here</Text> */}
      {/* <Text style={styles.setupStyle}>{setup}</Text>
      <Text style={styles.punchlineStyle}>{punchline}</Text> */}
      <AnimalImages />
    </View>
  );
};

export default DisplayJokes;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    // width: "80%",
    marginHorizontal: "5%",
    justifyContent: "center",
    textAlign: "center",
  },
  setupStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  punchlineStyle: {
    fontSize: 25,
  },
});
