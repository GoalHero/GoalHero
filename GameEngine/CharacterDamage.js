import Matter from 'matter-js';

export const characterDamage = (entities, monsterImmune = false) => {
  if (!monsterImmune) {
    let char = entities.initialChar.body;
    let monster = entities.initialMonster.body;

    let attackDistance = 85;

    if (Math.abs(char.position.x - monster.position.x) < attackDistance) {
      return true;
    }
  }
};
