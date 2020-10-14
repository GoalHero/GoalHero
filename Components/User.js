import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import User from "./User";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const UserPage = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/Repeated.png")}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
              }}
            />
            <Text style={styles.name}>Finn</Text>
            <Text style={styles.userInfo}>finn@email.com</Text>
            <Text style={styles.userInfo}>Chicago, Illinois</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/filled-like.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Health: 100%</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    "https://img.icons8.com/color/70/000000/administrator-male.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Level: 1</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/color/70/000000/groups.png",
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Heroes Unlocked</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "purple",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingRight: 5,
  },
  icon: {
    width: 50,
    height: 40,
    marginTop: 30,
  },
  info: {
    fontSize: 30,
    marginTop: 40,
    color: "black",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
