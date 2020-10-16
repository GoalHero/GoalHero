const GET_MONSTER_HEALTH = 'GET_MONSTER_HEALTH';
const GET_CHAR_HEALTH = 'GET_CHAR_HEALTH';

const initialState = {
  monsterHealth: 100,
  charHealth: 100
};

export const getMonsterHealth = (monsterHealth) => ({ type: GET_MONSTER_HEALTH, monsterHealth });

export const getCharHealth = (charHealth) => ({
  type: GET_CHAR_HEALTH, charHealth
})

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MONSTER_HEALTH:
      return {...state, monsterHealth: action.monsterHealth};
    case GET_CHAR_HEALTH:
      return {...state, charHealth: action.charHealth}
    default:
      return state;
  }
}
