import { Text, View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
import dogSkateboard from "../assets/images/dogSkateboard.png";

const WelcomeScreen = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate("Jokes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Jokester</Text>
      <View style={styles.imageContainer}>
        <Image source={dogSkateboard} style={styles.imageStyle} />
      </View>
      <PrimaryButton onPress={handleOnPress} width={200} fontSize={25}>
        Let's GoOoo!
      </PrimaryButton>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "10%",
    marginBottom: "20%",
  },
  imageContainer: {
    marginBottom: "10%",
  },
  imageStyle: {},
});
