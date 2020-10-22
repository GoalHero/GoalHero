import {
  charHealth,
  monsterHealth,
  tick,
  incrementTick,
  // charState,
  // charImage,
  charPose,
  monsterPose,
  resetCharPose,
  resetMonsterPose,
} from "../Global";

const resetObj = {
  initialChar: () => resetCharPose(),
  initialMonster: () => resetMonsterPose(),
};

export const idle = (entity, name) => {
  entity.state = "idle";
  resetObj[name];
};

export const hurt = (entities, name) => {
  entities.name.state = "hurt";
  resetObj[name];
};

export const dying = (entities, name) => {
  entities.name.state = "dying";
  resetObj[name];
};

export const attacking = (entities, name) => {
  entities.name.state = "attacking";
  resetObj[name];
};

export const changeCharPose = (entity) => {
  entity.pose = `00${charPose}`;
};

export const changeMonsterPose = (entity) => {
  entity.pose = `00${monsterPose}`;
};
