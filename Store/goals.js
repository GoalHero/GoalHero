import axios from "axios";

const GET_GOALS = "GET_GOALS";

const goals = [];

const getGoals = (goals) => ({ type: GET_HERO, goals });

export const fetchGoals = (userId) => async (dispatch) => {
  try {
    const { data : user } = await axios.get(`/api/users/${userId}`);
    const goals = user.Goals
    dispatch(getGoals(goals));
  } catch (error) {
    console.log(`failed to get api/users/${userId}`);
  }
};

export const postGoal = (name) => async (dispatch) => {
  try {

  } catch (error) {

  }
}

export default function (state = goals, action) {
  switch (action.type) {
    case GET_GOALS:
      return action.goals;
    default:
      return state;
  }
}
