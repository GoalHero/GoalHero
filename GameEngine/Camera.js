import Matter from 'matter-js';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { monsterWalking } from './MonsterWalking';

export const Camera = (entities, { screen }) => {
  let hero = entities.initialChar;
  let monster = entities.monster;
  let camera = entities.camera;
  let targetX = monster.position.x + camera.offsetX;
  let anchorX = screen.height * 0.65;
  let diff = anchorX - hero.body.position.x - camera.offsetX;

  if (targetX < 150 || diff < 0) {
    camera.offsetX += diff * 0.05;
  }

  return entities;
};
