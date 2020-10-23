import {
  damageChar,
  dispatchCharHealth,
  charHealth,
  monsterHealth,
  monsterRange,
  setCharHurt,
  setMonsterAttacking,
} from '../Global';

import { hurt, attacking } from '../animations/Animations';

export const monsterDamage = (entities) => {
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  if (
    Math.abs(char.position.x - monster.position.x) < monsterRange &&
    charHealth > 0 &&
    monsterHealth > 0
  ) {
    setMonsterAttacking(true);
    attacking(entities.initialMonster, 'initialMonster');

    setCharHurt(true);
    hurt(entities.initialChar, 'initialChar');
    damageChar();
    dispatchCharHealth();
  }
};
