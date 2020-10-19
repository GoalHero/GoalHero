import store from '../Store';

// REDUX
import { getMonsterHealth, getCharHealth } from '../Store/game';

const state = store.getState();
const game = state.game;

// CHARACTER PROPERTIES
let charHealth = game.charHealth;
let charDamage = 5;
let charRange = 85;
let charPose = 0;
let charAttacking = false;
let charHurt = false;
let charJump = true;

// MONSTER PROPERTIES
let monsterHealth = game.monsterHealth;
let monsterDamage = 5;
let monsterRange = 85;
let monsterPose = 0;
let monsterAttacking = false;
let monsterHurt = false;

const damageChar = () => {
  charHealth -= monsterDamage
}

const damageMonster = () => {
  monsterHealth -= charDamage
}

const dispatchCharHealth = () => {
  store.dispatch(getCharHealth(charHealth));
}

const dispatchMonsterHealth = () => {
  store.dispatch(getMonsterHealth(monsterHealth));
}

export {
  charHealth,
  monsterHealth,
  charRange,
  monsterRange,
  charPose,
  monsterPose,
  damageChar,
  damageMonster,
  dispatchCharHealth,
  dispatchMonsterHealth
}
