import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/game_background_1.png")}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 360, height: 140 }}
          source={require("../assets/images/logotest.png")}
        />

        <Text style={styles.body}>
          Are you ready to achieve some goals and fight those pesky monsters?!?!{" "}
          {"\n\n"}
          The game is simple. Make goals for yourself. Level up and defeat the
          monsters. {"\n\n"}
          Defeating a monster will unlock cool new characters {"\n\n"}
          Lets achieve some goals and fight those monsters.{" "}
        </Text>

        {/* <Image
        source={require("./GameEngine/assets/characterSprites/defaultKnights/Idle/Idle_000.png")}
        style={styles.logo}
      ></Image> */}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "purple",
  },
  header: {
    fontSize: 30,
    padding: 30,
    color: "black",
  },
  body: {
    fontSize: 15,
    color: "black",
    backgroundColor: "#6A7B89",
    padding: 4,
    borderRadius: 20,
    opacity: 0.7,
    textAlign: "center",
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: "20%",
    marginTop: "10%",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
