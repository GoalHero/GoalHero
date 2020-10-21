import store from "../Store";

// REDUX
import { getMonsterHealth, getCharHealth, gotMonsterHp } from "../Store/game";

// (async()=>{
//   await store.dispatch(gotMonsterHp())
// })()

const state = store.getState();
//console.log('****************',state.game)
const game = state.game;

let tick = 0;

// CHARACTER PROPERTIES
let charHealth = game.charHealth;
let charDamage = state.hero.damage + state.user.damage;
let charPose = 0;
let charAttacking = false;
let charHurt = false;
let charJump = true;
// let charImage = state.hero.imageUrl;
// let charState = ["idle", "hurt", "dying", "attacking"];

// MONSTER PROPERTIES
let monsterHealth = game.monsterHealth;
let monsterDamage = 5;
let monsterRange = 85;
let monsterPose = 0;
let monsterAttacking = false;
let monsterHurt = false;

const updateStore = () => {
  const state = store.getState();
  monsterHealth = store.getState().game.monsterHealth;
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

const disableCharJump = () => {
  charJump = false;
};

const incrementTick = () => {
  tick++;
};

// const incrementCharPose = () => {
//   charPose++;
//   if (charPose > 9) {
//     charPose = 0;
//   }
// };

// const incrementMonsterPose = () => {
//   monsterPose++;
//   if (monsterPose > 9) {
//     monsterPose = 0;
//   }
// };

// const resetCharPose = () => {
//   charPose = 0;
// };

// const resetMonsterPose = () => {
//   monsterPose = 0;
// };

export {
  charHealth,
  monsterHealth,
  monsterRange,
  charPose,
  monsterPose,
  charJump,
  tick,
  damageChar,
  damageMonster,
  dispatchCharHealth,
  dispatchMonsterHealth,
  disableCharJump,
  incrementTick,
  // incrementCharPose,
  // incrementMonsterPose,
  // resetCharPose,
  // resetMonsterPose,
};
