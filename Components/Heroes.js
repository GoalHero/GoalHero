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

import { fetchAllHeroes, fetchUnlockedHeroesNames } from "../Store/heroes";
import { fetchHero, setSelectedHero } from "../Store/hero";
import store from "../Store";
import { TouchableHighlight } from "react-native-gesture-handler";
import { chooseHeroPicture } from "./../GameEngine/entities/Character";

const heroImages = {
  1: require("../assets/images/knight.png"),
  2: require("../assets/images/barbarian.png"),
  3: require("../assets/images/archer.png"),
  4: require("../assets/images/druid.png"),
  5: require("../assets/images/viking.png"),
  6: require("../assets/images/elf.png"),
  7: require("../assets/images/darkelf.png"),
  8: require("../assets/images/ninja.png"),
  9: require("../assets/images/wizard.png"),
  10: require("../assets/images/elemental.png"),
};
class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
    };
  }
  async componentDidMount() {
    await this.props.fetchAllHeroes();
    await this.props.fetchUnlockedHeroesNames();
    await this.props.fetchHero();
    let selected = this.props.selectedHero;
    this.setState({
      selected,
    });
  }
  async handleSelection(id, heroNum, heroName) {
    let currentHeroId = this.props.selectedHero.id;

    if (
      currentHeroId === id ||
      this.props.unlockedHeroesNames.indexOf(heroName) === -1
    ) {
      return;
    }
    await this.props.setSelectedHero(id);
    chooseHeroPicture[0] = heroNum - 1;
    let selected = store.getState().hero;

    this.setState({
      selected,
    });
  }
  render() {
    const unlockedNames = this.props.unlockedHeroesNames;
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
            {heroes.map((hero) => {
              //  console.log(this.state.selected.name)
              let textStyling;
              let selectedStyling;
              unlockedNames.includes(hero.name)
                ? (textStyling = styles.unlocked)
                : (textStyling = styles.locked);
              this.state.selected.name === hero.name
                ? (selectedStyling = styles.selectedFrame)
                : null;
              return (
                <View style={styles.card} key={hero.id}>
                  <TouchableHighlight
                    underlayColor="clear"
                    onPress={() => {
                      this.handleSelection(hero.id, hero.heroNum, hero.name);
                    }}
                  >
                    <Image
                      style={[styles.imageSize, selectedStyling]}
                      source={heroImages[hero.heroNum]}
                    />
                  </TouchableHighlight>
                  <Text style={[styles.textStyling, textStyling]}>
                    {" "}
                    {hero.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </ImageBackground>
      );
  }
}

const mapState = (state) => {
  return {
    unlockedHeroesNames: state.heroes.unlockedHeroes,
    heroes: state.heroes.defaultHeroes,
    selectedHero: state.hero,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllHeroes: () => dispatch(fetchAllHeroes()),
    fetchUnlockedHeroesNames: () => dispatch(fetchUnlockedHeroesNames()),
    fetchHero: () => dispatch(fetchHero()),
    setSelectedHero: (id) => dispatch(setSelectedHero(id)),
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
  imageSize: {
    width: 100,
    height: 100,
  },
  card: {
    flexDirection: "column",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  locked: {
    color: "black",
    backgroundColor: "gray",
    opacity: 0.7,
    margin: 5,
  },
  unlocked: {
    color: "orange",
    backgroundColor: "gray",
    opacity: 0.7,
    margin: 5,
  },
  textStyling: {
    textAlign: "center",
    fontFamily: "EuphemiaUCAS-Bold",
  },
  selectedFrame: {
    borderWidth: 5,
    borderColor: "orange",
    borderRadius: 20,
    backgroundColor: "#FFE8D4",
    opacity: 0.9,
  },
});
