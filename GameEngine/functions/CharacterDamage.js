// GLOBAL VARIABLES
import { damageMonster, dispatchMonsterHealth, monsterHealth, charRange } from '../Global'

export const characterDamage = (entities) => {
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  if (Math.abs(char.position.x - monster.position.x) < charRange && monsterHealth > 0) {
    damageMonster();
    dispatchMonsterHealth();
  }
};
