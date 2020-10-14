import React from "react";
import { View, Text, Button, StyleSheet, StatusBar, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.header}>Welcome to Goal Hero! </Text> {"\n\n"}
        <Text style={styles.body}>
          Are you ready to achieve some goals and fight those pesky monsters?!?!{" "}
          {"\n\n"}
          The game is simple. Make goals for yourself. Level up and defeat the
          monsters. {"\n\n"}
          Defeating a monster will unlock cool new characters {"\n\n"}
          Lets achieve some goals and fight those monsters.{" "}
        </Text>
      </Text>
      <Image
    style={{ width: 400, height: 400 }}
    source={require("../assets/images/knight.png")}
  />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "purple",
  },
  header: {
    justifyContent: "center",
    fontSize: 30,
    padding: 30,
    color: "black",
  },
  body: {
    fontSize: 15,
    color: "purple",
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: "20%",
    marginTop: "10%",
  },
});
