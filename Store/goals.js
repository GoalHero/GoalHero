import axios from 'axios';
// import Store from './../Store'
import { me } from './user';
const GET_GOALS = 'GET_GOALS';

const goals = [];

const getGoals = (goals) => ({ type: GET_GOALS, goals });

export const fetchGoals = () => async (dispatch) => {
  try {
    const { data: user } = await axios.get(
      `https://goal-hero-capstone.herokuapp.com/api/users/me`
    );
    const goals = user.Goals;
    dispatch(getGoals(goals));
  } catch (error) {
    console.log(error);
    console.log(`failed to get goals from api/users/me`);
  }
};

export const postGoal = (values) => async (dispatch) => {
  try {
    console.log('goalName', values.goalName);
    await axios.post(`https://goal-hero-capstone.herokuapp.com/api/goals/users/me`, {
      name: values.goalName,
    });
    let { data: user } = await axios.get(`https://goal-hero-capstone.herokuapp.com/api/users/me`);
    const goals = user.Goals;
    dispatch(getGoals(goals));
  } catch (error) {
    console.log(`failed to post goal to api/goals/users/me`);
  }
};

export const removeGoal = (id) => async (dispatch) => {
  try {
    console.log('removeId', id);
    await axios.delete(`https://goal-hero-capstone.herokuapp.com/api/goals/${id}`);
    let { data: user } = await axios.get(`https://goal-hero-capstone.herokuapp.com/api/users/me`);
    let goals = user.Goals;
    dispatch(getGoals(goals));
  } catch (error) {
    console.log(`failed to remove goal api/goals/${id}`);
  }
};

export const completeGoal = (id) => async (dispatch) => {
  try {
    console.log('completeId', id);
    await axios.put(`https://goal-hero-capstone.herokuapp.com/api/goals/${id}`);
    await axios.put(`https://goal-hero-capstone.herokuapp.com/api/users/me`);
    let { data: user } = await axios.get(`https://goal-hero-capstone.herokuapp.com/api/users/me`);
    let goals = user.Goals;
    dispatch(getGoals(goals));
    dispatch(me());
  } catch (error) {
    console.log(`failed to complete goal api/goals/${id}`);
  }
};

export default function (state = goals, action) {
  switch (action.type) {
    case GET_GOALS:
      return action.goals;
    default:
      return state;
  }
}
