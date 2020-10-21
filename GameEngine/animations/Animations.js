import {
  charHealth,
  monsterHealth,
  tick,
  incrementTick,
  charState,
  charImage,
  charPose,
  resetCharPose,
  resetMonsterPose,
} from "./Global";

export const idle = (entities, name) => {
  entities.name.state = "idle";
};

export const hurt = (entities, name) => {
  entities.name.state = "hurt";
};

export const dying = (entities, name) => {
  entities.name.state = "dying";
};

export const attacking = (entities, name) => {
  entities.name.state = "attacking";
};

export const changeCharPose = (entities) => {
  entities.initialChar.pose = 00 + charPose;
};

export const changeMonsterPose = (entities) => {
  entities.initialMonster.pose = 00 + monsterPose;
};
