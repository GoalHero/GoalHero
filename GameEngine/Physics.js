
import Matter, { MouseConstraint } from 'matter-js';
import { Dimensions } from 'react-native';


// GLOBAL VARIABLES
import {
  charJump,
  disableCharJump,
  charHealth,
  monsterHealth,
  charHurt,
  charAttacking,
  monsterHurt,
  monsterAttacking,
  tick,
  incrementTick,
  incrementCharPose,
  incrementMonsterPose,
  monsterPose,
  charPose,
  setCharAttacking,
  setMonsterHurt,
  setCharHurt,
  setMonsterAttacking,
} from "./Global";
import {
  idle,
  hurt,
  dying,
  attacking,
  changeCharPose,
  changeMonsterPose,
} from "./animations/Animations";


// FUNCTIONS
import { monsterWalking } from "./functions/MonsterWalking";
import { monsterDamage } from "./functions/MonsterDamage";

import { characterWalking } from "./functions/CharacterWalking";
import { characterDamage } from "./functions/CharacterDamage";

const { width, height } = Dimensions.get("screen");

const verifyTouch = (t) => {
  const x = t.event.pageX;
  const y = t.event.pageY;

  if (x > 290 && y > 595 && !charAttacking && !monsterAttacking) {
    return true;
  }
};

export const Physics = (entities, { touches, time }) => {
  let engine = entities["physics"].engine;
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      if (verifyTouch(t)) {
        setCharAttacking(true);
        attacking(entities.initialChar, "initialChar")
        characterDamage(entities);
      } else if (t.event.pageY < height / 3 && charJump) {
        disableCharJump();
        Matter.Body.applyForce(char, char.position, { x: 0, y: 3 });
      } else {
        characterWalking(entities, t);
      }
    });

  Matter.Engine.update(engine, time.delta);

  incrementTick();

  monsterWalking(entities);

  if (!charAttacking && !charHurt) {
    idle(entities.initialChar, "initialChar");
  }

  if (!monsterAttacking && !monsterHurt) {
    idle(entities.initialMonster, "initialMonster");
  }

  if (tick % 50 === 0 && !charAttacking) {
    monsterDamage(entities);
  }
  if (tick % 5 === 0) {
    incrementCharPose();
    changeCharPose(entities.initialChar);
    incrementMonsterPose();
    changeMonsterPose(entities.initialMonster);
  }

  if (charPose === 9) {
    setCharAttacking(false)
    setCharHurt(false)
  }
  if (monsterPose === 9) {
    setMonsterAttacking(false)
    setMonsterHurt(false)
  }

  if (Math.abs(monster.position.x) > 150 || Math.abs(monster.position.y) > 600) {
    monster.position.x = 60
    monster.position.y = 520.183
  }

  if (Math.abs(char.position.x) > 150 || Math.abs(char.position.y) > 600) {
    char.position.x = 60
    char.position.y = 530.183
  }

  // console.log("\n\n\nmonsterpose\n\n\n", monsterPose);
  // console.log("\n\n\ncharpose\n\n\n", charPose);
  // console.log("\n\n\ncharSTATE\n\n", entities.initialChar.state);
  // console.log("\n\n\nmonsterSTATE\n\n", entities.initialMonster.state);

  return entities;
};
