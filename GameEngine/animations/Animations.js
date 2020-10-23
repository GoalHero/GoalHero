import {
  charHealth,
  monsterHealth,
  tick,
  incrementTick,
  charPose,
  monsterPose,
  resetCharPose,
  resetMonsterPose,
} from '../Global';

const resetObj = {
  initialChar: () => resetCharPose(),
  initialMonster: () => resetMonsterPose(),
};

export const idle = (entity, name) => {
  entity.state = 'idle';
  resetObj[name];
};

export const hurt = (entity, name) => {
  entity.state = 'hurt';
  resetObj[name];
};

export const dying = (entity, name) => {
  entity.state = 'dying';
  resetObj[name];
};

export const attacking = (entity, name) => {
  entity.state = 'attacking';
  resetObj[name];
};

export const changeCharPose = (entity) => {
  entity.pose = `00${charPose}`;
};

export const changeMonsterPose = (entity) => {
  entity.pose = `00${monsterPose}`;
};
