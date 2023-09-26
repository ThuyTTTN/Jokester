import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import bunnySunglasses from "../assets/images/bunnySunglasses.png";
import catSunglasses from "../assets/images/catSunglasses.png";
import dogBowtie from "../assets/images/dogBowtie.png";
import khoala from "../assets/images/khoala.png";
import pandaPartyHat from "../assets/images/pandaPartyHat.png";

const AnimalImages = ({ setJoke }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffling the images array initially
    const shuffled = shuffleArray(imageArray);
    setShuffledImages(shuffled);

    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => {
        setJoke(json);
      });
  };
  let imageArray = [
    bunnySunglasses,
    catSunglasses,
    dogBowtie,
    khoala,
    pandaPartyHat,
  ];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleImagePress = () => {
    // Generate the next image index that is different from the current one
    let nextIndex = currentImageIndex;
    while (nextIndex === currentImageIndex) {
      nextIndex = Math.floor(Math.random() * imageArray.length);
    }
    fetchJoke();

    setCurrentImageIndex(nextIndex);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={shuffledImages[currentImageIndex]}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnimalImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 400,
  },
});
