import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import DisplayJokes from "./screens/DisplayJokes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const handleToggleForm = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <DisplayJokes />
      {/* <Text style={styles.titleStyle}>Jokester</Text>
      <View style={styles.textWrapper}>
        <TouchableOpacity onPress={() => setIsSignedUp(false)}>
          <Text style={[styles.textStyle, !isSignedUp && styles.activeText]}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}> / </Text>
        <TouchableOpacity onPress={() => setIsSignedUp(true)}>
          <Text style={[styles.textStyle, isSignedUp && styles.activeText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      {isSignedUp ? <SignUp /> : <Login />} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.chineseGold,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "30%",
    marginBottom: "30%",
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  activeText: {
    textDecorationLine: "underline",
  },
  textWrapper: {
    flexDirection: "row",
  },
});
