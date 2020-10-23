import {
  damageMonster,
  dispatchMonsterHealth,
  monsterHealth,
  charHealth,
  updateStore,
  setMonsterHurt,
} from '../Global';

import { hurt } from '../animations/Animations';

import store from '../../Store';

export const characterDamage = (entities) => {
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  const state = store.getState();
  let charRange = state.hero.range;
  updateStore();

  if (
    Math.abs(char.position.x - monster.position.x) < charRange &&
    monsterHealth > 0 &&
    charHealth > 0
  ) {
    setMonsterHurt(true);
    hurt(entities.initialMonster, 'initialMonster');
    damageMonster();
    dispatchMonsterHealth();
  }
};
