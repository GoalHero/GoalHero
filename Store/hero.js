import axios from "axios";

const GET_HERO = "GET_HERO";

const defaultHero = {};

const getUser = (hero) => ({ type: GET_USER, user });

export const fetchUser = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`);
    dispatch(getUser(data));
  } catch (error) {
    console.log("failed to get api/users/:id");
  }
};




export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
  }
}
