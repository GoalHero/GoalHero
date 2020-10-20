import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

import { fetchAllHeroes,fetchUnlockedHeroesNames } from "../Store/heroes";
import { fetchHero } from '../Store/hero'


const heroImages = {
  1: require("../assets/images/knight.png"),
  2: require("../assets/images/barbarian.png"),
  3: require("../assets/images/archer.png"),
  4: require("../assets/images/viking.png"),
  5: require("../assets/images/druid.png"),
  6: require("../assets/images/elf.png"),
  7: require("../assets/images/darkelf.png"),
  8: require("../assets/images/ninja.png"),
  9: require("../assets/images/wizard.png"),
  10: require("../assets/images/elemental.png"),
};
class Heroes extends Component {
  componentDidMount() {
    this.props.fetchAllHeroes();
   this.props.fetchUnlockedHeroesNames();
  }
  render() {
    const unlockedNames = this.props.unlockedHeroesNames
   
    // const im = "elemental.png";
    const heroes = this.props.heroes;
    if (!heroes) {
      return <View />;
    } else
      return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/images/game_background_1.png")}
        >
          <View style={styles.container}>
            <View style={{ height: 20 }}></View>
            <Text style={{ fontFamily: "EuphemiaUCAS-Bold" }}>
              {"\n\n"}Defeat the enemy to level up to a new hero! {"\n\n"}
            </Text>
            <View style={{ height: 50 }}></View>
            {heroes.map((hero, index) => {
               let textStyling;
               unlockedNames.includes(hero.name)? textStyling=styles.unlocked : styles.locked
          return (
          
           <View style={styles.card} key={index}>
           <Image
             style={{
               width: 100,
               height: 100,
             }}
             source={
              heroImages[hero.heroNum]
              }
           />
           <Text
             style={[styles.textStyling,textStyling]}
           > {hero.name}
           </Text>
         </View>
       
        )})}
            {/* <View style={styles.card} >
              
              <Image
            
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/knight.png")}
              />
              <Text

                style={[styles.textStyling,textStyling]}
              >
                KNIGHT
              </Text>
              {/* {i === 0 ? <Text>unlock</Text> : <Text />} */}
            {/* </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/barbarian.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                BARBARIAN
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/archer.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                ARCHER
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/druid.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                DRUID
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/viking.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                VIKING
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/elf.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                ELF
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/darkelf.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                DARK ELF
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/ninja.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                NINJA
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/wizard.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                WIZARD
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/elemental.png")}
              />
              <Text
                style={{ textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }}
              >
                ELEMENTAL
              </Text>
            </View> */} 
          </View>
        </ImageBackground>
      );
  }
}

const mapState = (state) => {
  return {
  unlockedHeroesNames:state.heroes.unlockedHeroes,
    heroes: state.heroes.defaultHeroes,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllHeroes: () => dispatch(fetchAllHeroes()),
    fetchUnlockedHeroesNames:()=>dispatch(fetchUnlockedHeroesNames())

  };
};

export default connect(mapState, mapDispatch)(Heroes);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: "column",
    // backgroundColor: "#6A7B89",

    // borderRadius: 100,
    // opacity: 0.7,
    // padding: 5,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  locked:{
    color:"red",
  },
  unlocked:{
color:'green'
  },
  textStyling:{
     textAlign: "center", fontFamily: "EuphemiaUCAS-Bold" }
});
