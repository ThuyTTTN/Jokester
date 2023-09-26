import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import bunnySunglasses from "../assets/images/bunnySunglasses.png";
import catSunglasses from "../assets/images/catSunglasses.png";
import dogBowtie from "../assets/images/dogBowtie.png";
import khoala from "../assets/images/khoala.png";
import pandaPartyHat from "../assets/images/pandaPartyHat.png";

const Images = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  const imageArray = [
    bunnySunglasses,
    catSunglasses,
    dogBowtie,
    khoala,
    pandaPartyHat,
  ];

  useEffect(() => {
    const shuffled = imageArray.sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <View style={styles.container}>
      {shuffledImages.map((image, index) => {
        <Image key={index} source={image} style={styles.image} />;
      })}
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    zIndex: 2,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
