import axios from "axios";

const GET_HEROES = "GET_HEROES";

const getAllHeroes = (heroes) => ({ type: GET_HEROES, heroes });

const defaultHeroes = [];

export const fetchAllHeroes = () => async (dispatch) => {
  try {
    const { data: heroes } = await axios.get("http://localhost:8080/api/hero");
    dispatch(getAllHeroes(heroes));
  } catch (error) {
    console.log("failed to get api/hero");
  }
};

export default function (state = defaultHeroes, action) {
  switch (action.type) {
    case GET_HEROES:
      return action.heroes;
    default:
      return state;
  }
}
