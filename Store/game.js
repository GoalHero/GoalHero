import axios from 'axios';
const GET_MONSTER_HEALTH = 'GET_MONSTER_HEALTH';
const GET_CHAR_HEALTH = 'GET_CHAR_HEALTH';
const KILL_TIMES = 'KILL_TIMES';

const initialState = {
  monsterHealth: 100,
  charHealth: 100,
  killTimes: 0,

};

export const updateKillTimes = (killTimes) => ({
  type: KILL_TIMES,
  killTimes
});

export const updateKillTimesAndMonster = () => async (dispatch) => {
  try {
   // console.log('HEREeeeeeee')
  await axios.put('http://localhost:8080/api/users/UpdateHpAndKill');
   await axios.post('http://localhost:8080/api/hero/unlockNewHeroes');
   
    dispatch(gotMonsterHp());
  } catch (error) {
    console.error(err);
  }
};

export const getMonsterHealth = (monsterHealth) => ({
  type: GET_MONSTER_HEALTH,
  monsterHealth,
});

export const gotMonsterHp = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:8080/auth/me');
    const monsterHP = res.data.monsterHP;
    const killTimes = res.data.killTimes;
   //  console.log(killTimes,"===========>")
    dispatch(getMonsterHealth(monsterHP));
    dispatch(updateKillTimes(killTimes));
  } catch (error) {
    console.error(err);
  }
};








export const getCharHealth = (charHealth) => ({
  type: GET_CHAR_HEALTH,
  charHealth,
});

export const gotCharHealth = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:8080/auth/me');
    const charHP = res.data.health;
    const ress = await axios.get('http://localhost:8080/api/hero/userHero');
const userHero = ress.data.health
   // const killTimes = res.data.killTimes;
  //   console.log(killTimes,"===========>")
    dispatch(getCharHealth(charHP+userHero));
   // dispatch(updateKillTimes(killTimes));
  } catch (error) {
    console.error(err);
  }
};





export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MONSTER_HEALTH:
      return { ...state, monsterHealth: action.monsterHealth };
    case GET_CHAR_HEALTH:
      return { ...state, charHealth: action.charHealth };
    case KILL_TIMES:
      return { ...state, killTimes: action.killTimes };
    default:
      return state;
  }
}
