import Matter from 'matter-js';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { monsterWalking } from './MonsterWalking';
import { characterDamage } from './CharacterDamage';

import store from '../Store'
import { getMonsterHealth, getCharHealth } from '../Store/game'

let monsterHealth = store.getState().game.monsterHealth
let charHealth = store.getState().game.charHealth

let tick = 0;
let attackingtick = 0;
let pose = 0;
let allowJump = true;
let attacking = false;

let monsterAlive = true;
let monsterImmune = false;
let charAlive = true;

let monsterDamage = 20;
let charDamage = 5;

let monsterHurtTick = 0;
let monsterHurt = false;
let monsterDeadTick = 0;
let monsterImmuneTick = 0;

let characterHurtTick = 0;
let characterHurt = false;
let characterDeadTick = 0;

const { width, height } = Dimensions.get('screen');

export const Physics = (entities, { touches, time }) => {
  let engine = entities['physics'].engine;
  let world = engine.world;
  let char = entities.initialChar.body;

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      if (charAlive) {
        if (t.event.pageY > height / 1.1 && t.event.pageX > width / 1.25) {
          pose = 0;
          attacking = true;
          if (characterDamage(entities, monsterImmune) && monsterAlive) {
            monsterHealth -= charDamage;
            store.dispatch(getMonsterHealth(monsterHealth))
            entities.initialMonster.state = 'hurt';
            monsterHurt = true;
          }
        } else if (t.event.pageY < height / 3) {
          if (allowJump) {
            allowJump = false;
            Matter.Body.applyForce(char, char.position, { x: 0, y: 3 });
          }
        } else if (t.event.pageX < width / 2) {
          entities.initialChar.face = -1;
          Matter.Body.applyForce(char, char.position, { x: -0.15, y: 0 });
        } else {
          entities.initialChar.face = 1;
          Matter.Body.applyForce(char, char.position, { x: 0.15, y: 0 });
        }
      }
    });

  Matter.Engine.update(engine, time.delta);

  if (monsterAlive) {
    monsterWalking(entities, monsterHurt);
  }

  if (!charAlive) {
    entities.initialChar.state = 'dying';
    if (characterDeadTick > 36) {
      if (characterDeadTick === 50) {
        Matter.World.remove(world, entities.initialChar.body);
      }
    } else {
      if (characterDeadTick % 4 === 0) {
        entities.initialChar.pose = `00${characterDeadTick / 4}`;
      }
    }
    characterDeadTick++;
  } else if (characterHurt) {
    if (characterHurtTick > 36) {
      characterHurt = false;
      entities.initialChar.state = 'idle';
      characterHurtTick = 0;
    } else {
      if (characterHurtTick % 4 === 0) {
        entities.initialChar.pose = `00${characterHurtTick / 4}`;
      }
      characterHurtTick++;
    }
  } else if (!attacking) {
    entities.initialChar.state = 'idle';
  } else if (attacking) {
    if (attackingtick > 5) {
      attacking = false;
      attackingtick = 0;
    }
    entities.initialChar.state = 'attacking';
    attackingtick += 1;
  }

  if (!monsterAlive) {
    entities.initialMonster.state = 'dying';
    if (monsterDeadTick > 36) {
      if (monsterDeadTick === 50) {
        Matter.World.remove(world, entities.initialMonster.body);
      }
    } else {
      if (monsterDeadTick % 4 === 0) {
        entities.initialMonster.pose = `00${monsterDeadTick / 4}`;
      }
    }
    monsterDeadTick++;
  } else if (monsterHurt) {
    if (monsterHurtTick > 20) {
      monsterHurtTick = 0;
      entities.initialMonster.state = 'idle';
      monsterHurt = false;
    } else {
      if (monsterHurtTick % 4 === 0) {
        entities.initialMonster.pose = `00${monsterHurtTick / 4}`;
      }
      monsterHurtTick++;
    }
  } else if (monsterImmune) {
    if (monsterImmuneTick > 72) {
      entities.initialMonster.state = 'idle';
      monsterImmuneTick = 0;
      monsterImmune = false;
    } else {
      if (monsterImmuneTick % 8 === 0) {
        entities.initialMonster.pose = `00${monsterImmuneTick / 8}`;
      }
      monsterImmuneTick++;
    }
  }

  if (tick % 500 === 0) {
    entities.initialMonster.state = 'attacking';
    monsterImmune = true;
    if (characterDamage(entities) && charAlive && monsterAlive) {
      characterHurt = true;
      entities.initialChar.state = 'hurt';
      charHealth -= monsterDamage;
      store.dispatch(getCharHealth(charHealth))
    }
  }
  if (tick % 100 === 0) {
    allowJump = true;
  }
  tick += 1;
  if (tick % 5 === 0) {
    pose = pose + 1;
    if (pose > 5) {
      pose = 0;
    }
  }

  if (monsterHealth <= 0) {
    monsterAlive = false;
  } else if (charHealth <= 0) {
    charAlive = false;
  }

  if (charAlive) {
    entities.initialChar.pose = `00${pose}`;
  }
  return entities;
};
