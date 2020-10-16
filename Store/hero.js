import axios from 'axios';

const GET_HERO = 'GET_HERO';

const defaultHero = {};

const getHero = (hero) => ({ type: GET_HERO, hero });

export const fetchHero = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://goal-hero-capstone.herokuapp.com/api/hero/me');
    dispatch(getHero(data));
  } catch (error) {
    console.log('failed to get api/hero/:id');
  }
};

export default function (state = defaultHero, action) {
  switch (action.type) {
    case GET_HERO:
      return action.hero;
    default:
      return state;
  }
}
