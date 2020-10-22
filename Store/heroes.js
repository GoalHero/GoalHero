import axios from 'axios';

const GET_HEROES = 'GET_HEROES';
const GET_UNLOCK_HEROES = 'GET_UNLOCK_HEROES';
const getAllHeroes = (heroes) => ({ type: GET_HEROES, heroes });
const getUnlockedHeroesNames = (heroNames) => ({
  type: GET_UNLOCK_HEROES,
  heroNames,
});

const initialState = {
  defaultHeroes: [],
  unlockedHeroes: [],
};

export const fetchUnlockedHeroesNames = () => async (dispatch) => {
  try {console.log('dedgrhserghserherhwerhwre')
    const { data: heroesNames } = await axios.get(
      'http://localhost:8080/api/hero/unlockedHeroes'
    );

    dispatch(getUnlockedHeroesNames(heroesNames));
  } catch (error) {
    console.log('failed to get api/heroNames');
  }
};

export const fetchAllHeroes = () => async (dispatch) => {
  try {
    const { data: heroes } = await axios.get('http://localhost:8080/api/hero');
    dispatch(getAllHeroes(heroes));
  } catch (error) {
    console.log('failed to get api/hero');
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return { ...state, defaultHeroes: action.heroes };
    case GET_UNLOCK_HEROES:
      return { ...state, unlockedHeroes: action.heroNames };

    default:
      return state;
  }
}
