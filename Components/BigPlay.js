import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Play from "../GameEngine/Play";

const { width, height } = Dimensions.get("screen");
export default function App() {
  return (
    <View style={styles.container}>
      <Play />
      <Text>Trying to test touch</Text>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 22,
    width: width,

    // flex: 1,
    //backgroundColor: '#fff',
  //  backgroundColor: "darkgreen",
    alignItems: "center",
  },
});
