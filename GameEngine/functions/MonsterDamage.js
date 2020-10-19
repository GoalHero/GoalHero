import { damageChar, dispatchCharHealth, charHealth, monsterHealth, monsterRange } from '../Global'

export const monsterDamage = (entities) => {
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  if (Math.abs(char.position.x - monster.position.x) < monsterRange && charHealth > 0 && monsterHealth > 0) {
    damageChar();
    dispatchCharHealth();
  }
};
