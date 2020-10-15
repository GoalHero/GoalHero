import axios from 'axios'
// import history from '../history'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

export const me = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:8080/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const updateUser = (newInfo) => {
  return async dispatch => {
    try {
      const {data} = await axios.put('http://localhost:8080/api/users/me', newInfo)
      dispatch(getUser(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    console.log('************', email, password, method)
    res = await axios.post(`http://localhost:8080/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    // history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    console.log("hereeeeeeeeeeeeeeee")
    await axios.post('http://localhost:8080/auth/logout')
    dispatch(removeUser())
    // history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
