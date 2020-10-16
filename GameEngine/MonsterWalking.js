import Matter from 'matter-js';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let pose = 0;
let tick = 0;
let consecutive = 0;
let randomizer = getRandomInt(100);
let direction = 'left';

export const monsterWalking = (entities, monsterHurt, monsterImmune) => {
  let engine = entities['physics'].engine;
  let monster = entities.initialMonster.body;
  const walkLeft = () => {
    entities.initialMonster.face = -1;
    Matter.Body.applyForce(monster, monster.position, { x: -0.01, y: 0 });
  };
  const walkRight = () => {
    entities.initialMonster.face = 1;
    Matter.Body.applyForce(monster, monster.position, { x: 0.01, y: 0 });
  };
  tick += 1;
  if (tick % 5 === 0) {
    pose = pose + 1;
    if (pose > 5) {
      pose = 0;
    }
    if (!monsterHurt) {
      entities.initialMonster.pose = `00${pose}`;
    }
  }
  if (!monsterImmune) {
    if (consecutive < randomizer) {
      if (direction === 'left') {
        walkLeft();
      } else {
        walkRight();
      }
      consecutive++;
    } else {
      if (direction === 'left') {
        direction = 'right';
      } else {
        direction = 'left';
      }
      consecutive = 0;
      randomizer = getRandomInt(100);
    }
  }
};
