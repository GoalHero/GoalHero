import store from '../Store';

// REDUX
import { getMonsterHealth, getCharHealth, gotMonsterHp } from '../Store/game';

// (async()=>{
//   await store.dispatch(gotMonsterHp())
// })()

const state = store.getState();
//console.log('****************',state.game)
const game = state.game;

let tick = 0;
let gameRunning = false;

// CHARACTER PROPERTIES
let charHealth = state.hero.health + state.user.health;
let charDamage = state.hero.damage + state.user.damage;
let charPose = 0;
let charAttacking = false;
let charHurt = false;
let charDying = false;
let charJump = true;

// MONSTER PROPERTIES
let monsterHealth = game.monsterHealth;
let monsterDamage = 5;
let monsterRange = 85;
let monsterPose = 0;
let monsterAttacking = false;
let monsterHurt = false;
let monsterDying = false;

const updateStore = () => {
  const state = store.getState();
  charHealth = state.game.charHealth;
  monsterHealth = state.game.monsterHealth;
  charDamage = state.hero.damage + state.user.damage;
};

const damageChar = () => {
  charHealth -= monsterDamage;
};

const damageMonster = () => {
  updateStore();
  monsterHealth -= charDamage;
};

const dispatchCharHealth = () => {
  store.dispatch(getCharHealth(charHealth));
};

const dispatchMonsterHealth = () => {
  store.dispatch(getMonsterHealth(monsterHealth));
};

const setCharJump = (bool) => {
  charJump = bool;
};

const incrementTick = () => {
  tick++;
};

const incrementCharPose = () => {
  charPose++;
  if (charPose > 9) {
    charPose = 0;
  }
};

const incrementMonsterPose = () => {
  monsterPose++;
  if (monsterPose > 9) {
    monsterPose = 0;
  }
};

const resetCharPose = () => {
  charPose = 0;
};

const resetMonsterPose = () => {
  monsterPose = 0;
};

const setCharHurt = (bool) => {
  charHurt = bool;
};

const setCharAttacking = (bool) => {
  charAttacking = bool;
};

const setCharDying = (bool) => {
  charDying = bool;
};

const setMonsterHurt = (bool) => {
  monsterHurt = bool;
};

const setMonsterAttacking = (bool) => {
  monsterAttacking = bool;
};

const setMonsterDying = (bool) => {
  monsterDying = bool;
};

const setGameRunning = (bool) => {
  gameRunning = bool;
};

export {
  charHealth,
  monsterHealth,
  monsterRange,
  charPose,
  monsterPose,
  charJump,
  tick,
  charAttacking,
  charHurt,
  charDying,
  monsterAttacking,
  monsterHurt,
  monsterDying,
  gameRunning,
  damageChar,
  damageMonster,
  dispatchCharHealth,
  dispatchMonsterHealth,
  setCharJump,
  incrementTick,
  incrementCharPose,
  incrementMonsterPose,
  resetCharPose,
  resetMonsterPose,
  updateStore,
  setCharHurt,
  setCharAttacking,
  setCharDying,
  setMonsterHurt,
  setMonsterAttacking,
  setMonsterDying,
  setGameRunning,
};
