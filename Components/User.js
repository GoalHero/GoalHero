import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import axios from "axios";
import connect from 'react-redux'
import fetchUser from "../Store/user"
import fetchHero from "../Store/hero"
import user from "../Store/user";
import hero from "../Store/hero";
import logout from "../Store/test"


export default class User extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      hero: []
    };
  }
  async componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
    this.props.fetchHero(this.props.match.params.id)
  }

  async signOutUser() {
    this.logout(user.id)
  }

  render() {
    const user = this.props.user
    const hero = this.props.hero
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
            <Text style={styles.name}>name:</Text>
            <Text style={styles.userInfo}>Level: 1 </Text>
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
              <Text style={styles.info}>Health</Text>
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
            <Text style={styles.info}>damage</Text>
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
            <Text style={styles.info}>Hero</Text>
            <Text style={styles.item}></Text>
            <Image style={styles.icon}>
            </Image>
            <Button style={styles.button} title="Log Out" onPress={() => this.signOutUser()} />
          </View>
        </View>
      </View>
    </View>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user, 
    hero: state.hero
  }
}

const mapDispatch = async dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)), 
    fetchHero: (heroId) => dispatch(fetchHero(heroId)), 
    logOut: () => dispatch(logout())
  }
}

// export default connect(mapState, mapDispatch)(User);

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
  button: {
    fontSize: 100, 
    alignItems: "center"
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
