import Matter from 'matter-js';
import { monsterHealth } from '../Global';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomizer = getRandomInt(100);

let consecutive = 0;

let direction = 'left';

export const monsterWalking = (entities) => {
  if (monsterHealth <= 0) {
    return;
  }

  let monster = entities.initialMonster.body;

  const walkLeft = () => {
    entities.initialMonster.face = -1;
    Matter.Body.applyForce(monster, monster.position, { x: -0.01, y: 0 });
  };
  const walkRight = () => {
    entities.initialMonster.face = 1;
    Matter.Body.applyForce(monster, monster.position, { x: 0.01, y: 0 });
  };

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
};
