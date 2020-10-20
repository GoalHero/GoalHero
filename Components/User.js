import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { connect } from "react-redux";
import { me } from "../Store/user";
import { fetchHero } from "../Store/hero";
import user from "../Store/user";
import hero from "../Store/hero";

import { logout } from "../Store/user";


class User extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      hero: [],
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchHero();
  }

  signOutUser() {
    this.props.logOut();


    alert("You have successfully logged out!");

    // navigation.navigate("SignPage")
  }

  render() {
    const user = this.props.user;
    const hero = this.props.hero;
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/game_background_1.png')}
      >
        <View style={styles.container}>
          <Image
            style={{ width: 360, height: 140 }}
            source={require('../assets/images/logotest.png')}
          />

          {/* <Text style={{ fontSize: 20 }}>Your Profile</Text> */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              {/* <Image
                style={styles.avatar}
                source={{
                  uri:
                    "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg",
                }}
              /> */}

              <Text style={styles.name}>Name: {user.name}</Text>
              <Text style={styles.userInfo}>Level: {user.level}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text>Current Hero: {hero.name} </Text>

            <Text>Hero Health: {user.health} </Text>
            <Text>Hero Damage: {user.damage} </Text>
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Log Out" onPress={() => this.signOutUser()} />
          </View>
          {/*
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      "https://img.icons8.com/color/70/000000/filled-like.png",
                  }}
                />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Health: {user.health}</Text>
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
                <Text style={{ textAlign: "center" }}>
                  Damage: {user.damage}
                </Text>
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
                <Text style={styles.info}>Heroes: {hero.name}</Text>
                <Text style={styles.item}></Text>
                <Image
                  style={styles.icon}
                  source={{
                    uri: `${hero.imageUrl}`,
                  }}
                />
                <Button
                  style={styles.buttonStyle}
                  title="Log Out"
                  onPress={() => this.signOutUser()}
                />
              </View>
            </View>
          </View> */}
        </View>
      </ImageBackground>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    hero: state.hero,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => dispatch(me()),
    fetchHero: () => dispatch(fetchHero()),
    logOut: () => dispatch(logout()),
  };
};

export default connect(mapState, mapDispatch)(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  header: {
    marginTop: 15,
    backgroundColor: '#6A7B89',
    padding: 15,
    borderRadius: 20,
    opacity: 0.7,
  },
  headerContent: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  body: {
    // height: 500,
    alignItems: 'center',
    backgroundColor: '#6A7B89',

    borderRadius: 10,
    padding: 20,
    opacity: 0.7,
    marginVertical: 20,
  },

  buttonStyle: {

    backgroundColor: "#F09031",
    color: "white",
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",

  },

  item: {
    flexDirection: 'row',
    backgroundColor: '#6A7B89',
    padding: 15,
    borderRadius: 20,
    opacity: 0.7,
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 5,
    textAlign: 'center',
    // backgroundColor: "white",
  },
  icon: {
    width: 50,
    height: 40,
    marginTop: 30,
  },
  info: {
    fontSize: 30,
    marginTop: 40,
    color: 'black',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
