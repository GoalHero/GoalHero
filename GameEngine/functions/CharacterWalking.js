import Matter from 'matter-js';
import { Dimensions } from 'react-native';

import { charHealth } from '../Global';

const { width } = Dimensions.get('screen');

export const characterWalking = (entities, t) => {
  if (charHealth <= 0) {
    return;
  }

  const char = entities.initialChar.body;

  if (t.event.pageX < width / 2) {
    entities.initialChar.face = -1;
    Matter.Body.applyForce(char, char.position, { x: -0.15, y: 0 });
  } else {
    entities.initialChar.face = 1;
    Matter.Body.applyForce(char, char.position, { x: 0.15, y: 0 });
  }
};
