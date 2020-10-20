import axios from 'axios'
const GET_MONSTER_HEALTH = 'GET_MONSTER_HEALTH';
const GET_CHAR_HEALTH = 'GET_CHAR_HEALTH';
const KILL_TIMES = 'KILL_TIMES'

const initialState = {
  monsterHealth: 100,
  charHealth: 100,
  killTimes:0
};

export const updateKillTimes = ()=>({
  type:KILL_TIMES
})

export const getMonsterHealth = (monsterHealth) => ({ type: GET_MONSTER_HEALTH, monsterHealth });

export const gotMonsterHp =()=>async(dispatch)=>{
  try {
    const res = await axios.get('http://localhost:8080/auth/me');
    const monsterHP =res.data.monsterHP
 // console.log(monsterHP,"===========>")
    dispatch(getMonsterHealth(monsterHP))
  } catch (error) {
    console.error(err);
  }
}



export const getCharHealth = (charHealth) => ({
  type: GET_CHAR_HEALTH, charHealth
})

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MONSTER_HEALTH:
      return {...state, monsterHealth: action.monsterHealth};
    case GET_CHAR_HEALTH:
      return {...state, charHealth: action.charHealth}
      case KILL_TIMES:
        return {...state,killTimes:++state.killTimes}
    default:
      return state;
  }
}
