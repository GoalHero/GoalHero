import React from 'react';
import Matter from 'matter-js';
import { GameEngine } from 'react-native-game-engine';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import Character from './Character';
import Floor from './Floor';
import { Physics } from './Physics';
import HealthBar from './HealthBar';
import Wall from './Wall';
import Boundary from './Boundary';
import Monster from './Monster';
import AttackButton from './AttackButton';
import MonsterHealth from './MonsterHealth'

const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;
const { width, height } = Dimensions.get('screen');
const charSize = Math.trunc(Math.max(width, height) * 0.175);
const monsterSize = Math.trunc(Math.max(width, height) * 0.2);
const initialChar = Matter.Bodies.rectangle(-width/2, height / 2, charSize, charSize);
initialChar.collisionFilter = {"group":-1,"mask":1,"category":1}
const initialMonster = Matter.Bodies.rectangle(
  width /2 ,
  height / 2,
  monsterSize,
  monsterSize
);
initialMonster.collisionFilter = {"group":-1,"mask":1,"category":1}

const floorSize = Math.trunc(Math.max(width, height) * 0.075);
const healthSize = Math.trunc(Math.max(width, height) * 0.075);
const attackButtonSize = Math.trunc(Math.max(width, height) * 0.1);
const monsterHealthSize = Math.trunc(Math.max(width, height) * 0.075);
const boundarySize = Math.trunc(Math.max(width, height) * 0.009);
const floor = Matter.Bodies.rectangle(
  0,
  height - floorSize / 2,
  width,
  floorSize,
  { isStatic: true }
);

floor.collisionFilter = {"group":0,"mask":1,"category":1}
const healthBar = Matter.Bodies.rectangle(0, 0, width, healthSize, {
  isStatic: true,
});
const attackButton = Matter.Bodies.rectangle(width / 2.25, height - (height / 45), width, height, {
  isStatic: true,
})
const monsterHealthBar = Matter.Bodies.rectangle(0, 0, width, monsterHealthSize, {
  isStatic: true,
});
const wall = Matter.Bodies.rectangle(0, 0, width, height, { isStatic: true });
const leftBoundary = Matter.Bodies.rectangle(
  - width / 2 - boundarySize,
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

export default class Play extends React.Component {
  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[Physics]}
        entities={{
          physics: {
            engine: engine,
            world: world,
          },
          initialChar: {
            body: initialChar,
            size: [charSize * 1.2, charSize],
            state: 'idle',
            pose: '000',
            face: 1,
            renderer: Character,
          },
          initialMonster: {
            body: initialMonster,
            size: [monsterSize * 1.3, monsterSize],
            state: 'idle',
            pose: '000',
            face: -1,
            renderer: Monster,
          },
          floor: {
            body: floor,
            size: [width, floorSize],
            color: 'green',
            renderer: Floor,
          },
          healthBar: {
            body: healthBar,
            size: [width, healthSize],
            color: 'green',
            renderer: HealthBar,
          },
          attackButton: {
            body: attackButton,
            size: [attackButtonSize, attackButtonSize],
            color: 'blue',
            renderer: AttackButton
          },
          monsterHealthBar: {
            body: monsterHealthBar,
            size: [width, monsterHealthSize],
            color: 'green',
            renderer: MonsterHealth,
          },
          wall: {
            body: wall,
            size: [width, height],
            color: 'clear',
            renderer: Wall,
          },
          rightBoundary: {
            body: rightBoundary,
            size: [boundarySize, height],
            color: 'clear',
            renderer: Boundary,
          },
          leftBoundary: {
            body: leftBoundary,
            size: [boundarySize, height],
            color: 'clear',
            renderer: Boundary,
          },
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   //flex: 1,
  //  backgroundColor: '#fff',
  
  },
});
