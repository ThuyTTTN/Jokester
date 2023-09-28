import { Text, View, StyleSheet, Button } from "react-native";
import PrimaryButton from "../component/PrimaryButton";

const WelcomeScreen = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate("Jokes");
  };

  return (
    <View>
      <Text> Welcome!</Text>
      <PrimaryButton onPress={handleOnPress} width={200} fontSize={25}>
        Let's GoOoo!
      </PrimaryButton>
    </View>
  );
};

export default WelcomeScreen;
