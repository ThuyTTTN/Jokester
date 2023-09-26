import { Text, View, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AnimalImages from "../component/AnimalImages";
import speechBubble from "../assets/images/speechBubble.png";

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
      <View style={styles.speechContainer}>
        <Image source={speechBubble} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.setupStyle}>{setup}</Text>
        <Text style={styles.punchlineStyle}>{punchline}</Text>
      </View>

      <AnimalImages />
    </View>
  );
};

export default DisplayJokes;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginHorizontal: "5%",
  },
  textContainer: {
    position: "relative",
    alignContent: "center",
    top: "18%",
    width: "72%",
    left: "15%",
  },
  setupStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  punchlineStyle: {
    fontSize: 22,
    textAlign: "center",
  },
  speechContainer: {
    position: "absolute",
    top: "10%",
  },
});
