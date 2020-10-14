import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import axios from "axios";

const Stack = createStackNavigator();

class UserPage extends Component {
  constructor() {
    super()
    this.state = {
      user: []
    }
  }
  async componentDidMount() {
    // let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
    // console.log("this is the user", user)
    // this.setState({
    //   user
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "",
              }}
            />
            <Text style={styles.name}>Finn</Text>
            <Text style={styles.userInfo}>finn@email.com</Text>
            <Text style={styles.userInfo}>Username: finn</Text>
          </View>
        </View>
        {/* <View style={styles.body}>
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
          </View> */}
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
              <Button
              title="Log Out"
               onPress={() => null}
          />
            </View>
          </View>
        </View>
   
    );
  }
}

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
    backgroundColor: "purple",
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
});
