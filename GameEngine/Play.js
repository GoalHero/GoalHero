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
import { gotMonsterHp, updateKillTimes } from "../Store/game";
import Toast from "react-native-toast-message";

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
  componentDidMount() {
    this.props.setHP();
    this.props.fetchHero();
    this.props.fetchUser();
  }

  render() {
    if (this.props.monsterHealth <= 1) {
      // this.props.setHP()
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              this.props.navigation.navigate("Heroes");

              this.props.updateKillTimes();
              this.props.setHP();
            },
          },
        ],
        { cancelable: false }
      );

      // this.props.setHP()
      // return (<>

      // </>)
    }

    Toast.show({
      text1: "Tap on attack to fight the monster!",
      text2:
        "Tap on the left or right side of the screen to move. Tap the top of the screen to jump. ",
      type: "info",
      visibilityTime: 15000,
      topOffset: 275,
    });
    //else
    return (
      <View style={styles.playView}>
        <Image
          source={require("../assets/images/game_background_1.png")}
          style={styles.absolute}
        />
        <View style={styles.absolute}>
          <HealthBar />
          <MonsterHealth />
          {/* <AttackButton/> */}
        </View>

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
});

const mapState = (state) => {
  return {
    monsterHealth: state.game.monsterHealth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setHP: () => dispatch(gotMonsterHp()),
    updateKillTimes: () => dispatch(updateKillTimes()),
    fetchUser: () => dispatch(me()),
    fetchHero: () => dispatch(fetchHero()),
  };
};

export default connect(mapState, mapDispatch)(Play);
