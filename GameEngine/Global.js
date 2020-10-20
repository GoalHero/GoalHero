import store from '../Store';

// REDUX
import { getMonsterHealth, getCharHealth,gotMonsterHp } from '../Store/game';


// (async()=>{
//   await store.dispatch(gotMonsterHp())
// })()


const state = store.getState();
//console.log('****************',state.game)
const game = state.game;

let tick = 0;

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

const updateStore=()=>{
  monsterHealth = store.getState().game.monsterHealth;
}

const damageMonster = () => {
  updateStore()
//console.log("222222222222222",monsterHealth)
  monsterHealth -= charDamage
}

const dispatchCharHealth = () => {
  store.dispatch(getCharHealth(charHealth));
}

const dispatchMonsterHealth = () => {
  store.dispatch(getMonsterHealth(monsterHealth));
}

const disableCharJump = () => {
  charJump = false;
}

const incrementTick = () => {
  tick++;
}

export {
  charHealth,
  monsterHealth,
  charRange,
  monsterRange,
  charPose,
  monsterPose,
  charJump,
  damageChar,
  damageMonster,
  dispatchCharHealth,
  dispatchMonsterHealth,
  disableCharJump,
  tick,
  incrementTick
}
