import { Text, View, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AnimalImages from "../component/AnimalImages";
import speechBubble from "../assets/images/speechBubble.png";

const DisplayJokes = () => {
  const [joke, setJoke] = useState({});
  const { setup, punchline } = joke;

  return (
    <View style={styles.container}>
      <View style={styles.speechContainer}>
        <Image source={speechBubble} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.setupStyle}>{setup}</Text>
        <Text style={styles.punchlineStyle}>{punchline}</Text>
      </View>
      <AnimalImages setJoke={setJoke} />
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  punchlineStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
  },
  speechContainer: {
    position: "absolute",
    top: "10%",
  },
});
