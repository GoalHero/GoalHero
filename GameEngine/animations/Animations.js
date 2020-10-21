// import {
//   charHealth,
//   monsterHealth,
//   tick,
//   incrementTick,
//   charState,
//   charImage,
//   charPose,
//   resetCharPose,
//   resetMonsterPose,
// } from "./Global";

// const resetObj = {
//   initialChar: () => resetCharPose(),
//   initialMonster: () => resetMonsterPose(),
// };

// export const idle = (entities, name) => {
//   entities.name.state = "idle";
//   resetObj[name];
// };

// export const hurt = (entities, name) => {
//   entities.name.state = "hurt";
//   resetObj[name];
// };

// export const dying = (entities, name) => {
//   entities.name.state = "dying";
//   resetObj[name];
// };

// export const attacking = (entities, name) => {
//   entities.name.state = "attacking";
//   resetObj[name];
// };

// export const changeCharPose = (entities) => {
//   entities.initialChar.pose = 00 + charPose;
// };

// export const changeMonsterPose = (entities) => {
//   entities.initialMonster.pose = 00 + monsterPose;
// };
