import Matter from 'matter-js';
import { Dimensions } from 'react-native';

// GLOBAL VARIABLES
import { charHealth, damageChar, dispatchCharHealth } from './Global'

// FUNCTIONS
import { monsterWalking } from './functions/MonsterWalking';

import { characterWalking } from './functions/CharacterWalking';
import { characterDamage } from './functions/CharacterDamage';

const { width, height } = Dimensions.get('screen');

export const Physics = (entities, { touches, time }) => {
  let engine = entities['physics'].engine;
  let char = entities.initialChar.body;

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      if (t.event.pageY > height / 1.1 && t.event.pageX > width / 1.25) {
        characterDamage(entities);
      } else if (t.event.pageY < height / 3) {
        Matter.Body.applyForce(char, char.position, { x: 0, y: 3 });
      } else {
        characterWalking(entities, t)
      }
    });

  Matter.Engine.update(engine, time.delta);

  monsterWalking(entities);

  return entities;
};
