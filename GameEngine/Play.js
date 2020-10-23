import React from "react";
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { me } from "../Store/user";
import { fetchHero } from "../Store/hero";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  View,
  Animated,
  Image,
  Alert,
  Button,
  ImageBackground,
} from "react-native";
import Character from "./entities/Character";
import Floor from "./entities/Floor";
import { Physics } from "./Physics";
import HealthBar from "./components/HealthBar";
import Wall from "./entities/Wall";
import Boundary from "./entities/Boundary";
import Monster from "./entities/Monster";
import AttackButton from "./components/AttackButton";
import MonsterHealth from "./components/MonsterHealth";
import { connect } from "react-redux";
import {
  updateKillTimesAndMonster,
  gotCharHealth,
  gotMonsterHp,
} from "../Store/game";
import { fetchUnlockedHeroesNames } from "../Store/heroes";
import store from "../Store";
// import Toast from "react-native-toast-message";
import { Audio } from "expo-av";

import Toast, { DURATION } from "react-native-easy-toast";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { allMonsters } from "./entities/Monster";

export const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;
const { width, height } = Dimensions.get("screen");
const charSize = Math.trunc(Math.max(width, height) * 0.175);
const monsterSize = Math.trunc(Math.max(width, height) * 0.2);
const initialChar = Matter.Bodies.rectangle(
  -width / 2,
  height / 2,
  charSize,
  charSize
);
initialChar.collisionFilter = { group: -1, mask: 1, category: 1 };
const initialMonster = Matter.Bodies.rectangle(
  width / 2,
  height / 2,
  monsterSize,
  monsterSize
);
initialMonster.collisionFilter = { group: -1, mask: 1, category: 1 };

const floorSize = Math.trunc(Math.max(width, height) * 0.075);
const boundarySize = Math.trunc(Math.max(width, height) * 0.009);
const floor = Matter.Bodies.rectangle(0, height - floorSize, width, floorSize, {
  isStatic: true,
});

floor.collisionFilter = { group: 0, mask: 1, category: 1 };

const wall = Matter.Bodies.rectangle(0, 0, width, height, { isStatic: true });
const leftBoundary = Matter.Bodies.rectangle(
  -width / 2 - boundarySize,
  height / 2,
  boundarySize,
  height,
  { isStatic: true }
);
const rightBoundary = Matter.Bodies.rectangle(
  width / 2 + boundarySize,
  height / 2,
  boundarySize,
  height,
  { isStatic: true }
);

Matter.World.add(world, [
  initialChar,
  floor,
  leftBoundary,
  rightBoundary,
  initialMonster,
]);

export class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      rerender: true,
      rendergame: false,
    };
  }
  //  async componentDidMount() {

  //     // try {
  //     //   this.battleSound = new Audio.Sound();
  //     //   await this.battleSound.loadAsync(
  //     //     require("../Sound/battleMusic/battle.mp3")
  //     //   )
  //     //   await this.battleSound.setIsLoopingAsync(true);
  //     //   await this.battleSound.playAsync()
  //     // } catch (error) {
  //     //   console.log("there was an issue play the battle sounds: ", error)
  //     // }

  //   }
  render() {
    if (this.props.healthBar <= 0) {
      // this.props.setHP()
      Alert.alert(
        "Your hero died!",
        "Time to complete more goals!",
        [
          {
            text: "YES",
            onPress: async () => {
              this.setState({ rendergame: false });
              await this.props.healChar();
              await this.props.healMonster();
              this.props.navigation.navigate("Goals");

              // this.props.updateKillTimesAndMonster();
              this.setState({ rerender: !this.state.rerender });
            },
          },
        ],
        { cancelable: false }
      );

      // this.props.setHP()
      // return (<>

      // </>)
    } else if (this.props.monsterHealth <= 0) {
      // this.props.setHP()
      Alert.alert(
        "You defeated the monster!",
        "Ready for your new hero?",

        [
          {
            text: "LET'S GO!",
            onPress: async () => {
              //  arr[0]=7
              this.setState({ rendergame: false });
              await this.props.updateKillTimesAndMonster();
              allMonsters.push(allMonsters.shift());
              await this.props.healChar();
              await store.dispatch(fetchUnlockedHeroesNames());
              this.props.navigation.navigate("Heroes");
              this.setState({ rerender: !this.state.rerender });
              // this.props.setHP();
            },
          },
        ],
        { cancelable: false }
      );

      // this.props.setHP()
      // return (<>

      // </>)
    }

    //else
    if (this.state.rendergame) {
      return (
        <View style={styles.playView}>
          <Image
            source={require("../assets/images/game_background_1.png")}
            style={styles.absolute}
          />
          <View style={styles.absolute}>
            <HealthBar />
            <MonsterHealth />
          </View>
          <AttackButton />

          <GameEngine
            // nav={this.props.navigation}
            systems={[Physics]}
            entities={{
              physics: {
                engine: engine,
                world: world,
              },
              initialChar: {
                body: initialChar,
                size: [charSize * 1.2, charSize],
                state: "idle",
                pose: "000",
                face: 1,
                renderer: Character,
              },
              initialMonster: {
                body: initialMonster,
                size: [monsterSize * 1.3, monsterSize],
                state: "idle",
                pose: "000",
                face: -1,
                renderer: Monster,
              },
              floor: {
                body: floor,
                size: [width, floorSize],
                color: "green",
                renderer: Floor,
              },
              wall: {
                body: wall,
                size: [width, height],
                color: "clear",
                renderer: Wall,
              },
              rightBoundary: {
                body: rightBoundary,
                size: [boundarySize, height],
                color: "clear",
                renderer: Boundary,
              },
              leftBoundary: {
                body: leftBoundary,
                size: [boundarySize, height],
                color: "clear",
                renderer: Boundary,
              },
            }}
          >
            <StatusBar hidden={true} />
          </GameEngine>
        </View>
      );
    } else {
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
            <View style={styles.body}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Menlo-Regular",
                  fontWeight: "bold",
                }}
              >
                HOW TO PLAY {"\n"}
              </Text>
              <Text style={styles.text}>
                Tap the attack button in lower {"\n"}
                right side to attack the monster! {"\n\n"}
                Tap on the left and right sides of {"\n"}
                the screen to move around {"\n\n"}
                Tap on the top of the screen to jump {"\n\n\n"}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: "Menlo-Regular",
                }}
              >
                It's time for battle!
                {"\n"}
                Press PLAY when you're ready!
              </Text>
            </View>
            <View>
              <Text>{"\n\n\n"}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.topMargin}>
              <Button
                title="Play"
                onPress={() => {
                  this.setState({ rendergame: true });
                }}
              ></Button>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  playView: {
    width: width,
    height: height,
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
  },
  buttonStyle: {
    backgroundColor: "#F09031",
    // color: 'white',
    width: 200,
    height: 40,
    borderRadius: 200 / 20,
    // marginTop: 2,
    alignItems: "center",
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    color: "purple",
  },
  header: {
    justifyContent: "center",
    fontSize: 20,
    padding: 30,
    color: "black",
  },
  body: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "#057BF7", //blue
    padding: 10,
    borderRadius: 20,
    opacity: 0.7,
    fontWeight: "bold",
    fontFamily: "Menlo-Regular",
    color: "white",
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
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "Menlo-Regular",
  },
  topMargin: {
    marginTop: 20,
    backgroundColor: "#F09031", //orange (blue text)
    width: 100,
    height: 40,
    borderRadius: 200 / 20,
    // marginHorizontal: 140,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
});

const mapState = (state) => {
  return {
    monsterHealth: state.game.monsterHealth,
    healthBar: state.game.charHealth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateKillTimesAndMonster: () => dispatch(updateKillTimesAndMonster()),
    healChar: () => dispatch(gotCharHealth()),
    healMonster: () => dispatch(gotMonsterHp()),
  };
};

export default connect(mapState, mapDispatch)(Play);
