import axios from 'axios';

const GET_HERO = 'GET_HERO';
// const GET_HEROES = 'GET_HEROES'

const defaultHero = {heroNum:1};

const getHero = (hero) => ({ type: GET_HERO, hero });

export const fetchHero = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/hero/userHero`);
   // console.log('array of heroes', data);
    dispatch(getHero(data));
  } catch (error) {
    console.log('failed to get api/hero/:id');
  }
};

export const setSelectedHero = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`http://localhost:8080/api/hero/userHero`, {id});
    dispatch(getHero(data));
  } catch (error) {
    console.log('failed to change api/hero/:id');
  }
}

export default function (state = defaultHero, action) {
  switch (action.type) {
    case GET_HERO:
      return action.hero;
    default:
      return state;
  }
}
