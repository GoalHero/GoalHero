import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./Store";
import Toast from "react-native-toast-message";

export default function Root() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <App />
        <StatusBar style="auto" />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 200 / 2,
  },
});
