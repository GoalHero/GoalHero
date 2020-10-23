import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import { me } from '../Store/user';
import { fetchHero } from '../Store/hero';
import user from '../Store/user';
import hero from '../Store/hero';
import { Audio } from 'expo-av';
import { setGameRunning } from '../GameEngine/Global';

import { logout } from '../Store/user';


class User extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchHero();

  }
  signOutUser() {
    this.props.logOut();
    alert("You have successfully logged out!");
  }

  render() {
    const user = this.props.user;
    const hero = this.props.hero;
    setGameRunning(false);
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
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={{ fontSize: 20, fontFamily: "Menlo-Regular" }}>
                {user.name}
                {"\n"}
              </Text>


              <Text style={styles.name}>Level: {user.level}</Text>

              <Text style={styles.userContent}>Health: {user.health} </Text>
              <Text style={styles.userContent}> Damage: {user.damage}</Text>

            </View>
          </View>

          <View style={styles.body}>

            <Text
              style={{
                fontSize: 20,
                fontFamily: "Menlo-Regular",
                color: "white",
              }}
            >
              HERO{"\n"}
            </Text>
            <Text style={styles.heroContent}>Current Hero: {hero.name} </Text>

            <Text style={styles.heroContent}>Hero Health: {hero.health} </Text>
            <Text style={styles.heroContent}>Hero Damage: {hero.damage} </Text>

          </View>
          <View style={styles.buttonStyle}>
            <Button title="Log Out" onPress={() => this.signOutUser()} />
          </View>
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
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    marginTop: 15,
    backgroundColor: "#34B4D6",
    padding: 15,
    borderRadius: 20,
    opacity: 0.7,
    width: 215,
  },
  headerContent: {
    padding: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    fontFamily: "Menlo-Regular",
  },
  userInfo: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    // height: 500,
    alignItems: "center",
    backgroundColor: "#00447A",

    borderRadius: 10,
    padding: 20,
    opacity: 0.7,
    marginVertical: 20,
    width: 215,
  },

  buttonStyle: {
    backgroundColor: "#F09031",
    color: "white",
    width: 100,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#6A7B89",
    padding: 15,
    borderRadius: 20,
    opacity: 0.7,
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingRight: 5,
    textAlign: "center",
    // backgroundColor: "white",
    color: "white",
  },
  icon: {
    width: 50,
    height: 40,
    marginTop: 30,
  },
  info: {
    fontSize: 30,
    marginTop: 40,
    color: "white",
    textAlign: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  userContent: {
    color: "black",
    fontFamily: "Menlo-Regular",
  },
  heroContent: {
    color: "white",
    fontFamily: "Menlo-Regular",
  },
});
