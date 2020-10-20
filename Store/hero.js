import axios from 'axios';

const GET_HERO = 'GET_HERO';
// const GET_HEROES = 'GET_HEROES'

const defaultHero = {};

const getHero = (hero) => ({ type: GET_HERO, hero });


export const fetchHero = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/hero/userHero`);
    dispatch(getHero(data));
  } catch (error) {
    console.log('failed to get api/hero/:id');
  }
};

// export const fetchHeroes = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get('http://localhost:8080/api/hero')
//     console.log("this is the data", data)
//     dispatch(getHeroes(data))
//   } catch (error) {
//     console.log('failed to get api/hero')
//   }
// }

export default function (state = defaultHero, action) {
  switch (action.type) {
    case GET_HERO:
      return action.hero;
    default:
      return state;
  }
}
