import axios from "axios";

const userId = 1;

const GET_GOALS = "GET_GOALS";

const goals = [];

const getGoals = (goals) => ({ type: GET_GOALS, goals });

export const fetchGoals = (userId) => async (dispatch) => {
  try {
    const { data : user } = await axios.get(`http://localhost:8080/api/users/${userId}`);
    const goals = user.Goals
    dispatch(getGoals(goals));
  } catch (error) {
    console.log(error)
    console.log(`failed to get goals from api/users/${userId}`);
  }
};

export const postGoal = (values) => async (dispatch) => {
  try {
    console.log('goalName', values.goalName)
    await axios.post(`http://localhost:8080/api/goals/users/${userId}`, {name: values.goalName})
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
    const goals = user.Goals
    dispatch(getGoals(goals))
  } catch (error) {
    console.log(`failed to post goal to api/goals/users${userId}`)
  }
}

export const removeGoal = (id) => async (dispatch) => {
  try {
    console.log('removeId', id)
    await axios.delete(`http://localhost:8080/api/goals/${id}`)
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
    let goals = user.Goals
    dispatch(getGoals(goals))
  } catch (error) {
    console.log(`failed to remove goal api/goals/${id}`)
  }
}

export const completeGoal = (id) => async (dispatch) => {
  try {
    console.log('completeId', id)
    await axios.put(`http://localhost:8080/api/goals/${id}`)
    let {data: user} = await axios.get(`http://localhost:8080/api/users/${userId}`)
    let goals = user.Goals
    dispatch(getGoals(goals))
  } catch (error) {
    console.log(`failed to complete goal api/goals/${id}`)
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
