import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { connect } from 'react-redux'
import { me } from "../Store/user"
import { fetchHero }  from "../Store/hero"
import user from "../Store/user";
import hero from "../Store/hero";
import logout from "../Store/test"

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      hero: []
    };
  }
   componentDidMount() {
    this.props.fetchUser()
    this.props.fetchHero()
  }

  async signOutUser() {
    this.logout(id)
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
                uri: "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg",
              }}
            />
            <Text style={styles.name}>name: {user.name}</Text>
            <Text style={styles.userInfo}>Level: {user.level}</Text>
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
            <Text style={styles.info}>Damage: {user.damage}</Text>
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
            <Image style={styles.icon} source={{
              uri: `${hero.imageUrl}`
            }} />
            <Button style={styles.buttonStyle} title="Log Out" onPress={() => this.signOutUser()} />
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

const mapDispatch = (dispatch) => {
  return {
    fetchUser: () => dispatch(me()), 
    fetchHero: () => dispatch(fetchHero()), 
    logOut: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(User);

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
    width: 160,
    height: 160,
    borderRadius: 63,
    borderWidth: 7,
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
  buttonStyle: {
    backgroundColor: "black",
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
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
