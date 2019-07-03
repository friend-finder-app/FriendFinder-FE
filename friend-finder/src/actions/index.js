import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";

export const login = values => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios

    .post(`https://friendfinder-be.herokuapp.com/api/users/login`, values)
    .then(res => {
      // console.log(res)
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const postSignUp = values => dispatch => {
  localStorage.removeItem("token");
  return axios
    .post(`https://friendfinder-be.herokuapp.com/api/users/register`, values)
    .then(res => {
      // console.log('User successfully added to database')
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};

export const LOAD_USER_DATA_SUCCESS = "LOAD_USER_DATA_SUCCESS";
export const LOAD_USER_DATA_FAIL = "LOAD_USER_DATA_FAIL";

export const getUserinfo = values => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  return axios
    .get(`https://friendfinder-be.herokuapp.com/api/users/currentuser`, {
      headers
    })
    .then(res => {
      // console.log(res)
      dispatch({ type: LOAD_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOAD_USER_DATA_FAIL, payload: err.message });
    });
};

export const GET_USERS = "GET_USERS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const getUsers = () => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  axios
    .get(`https://friendfinder-be.herokuapp.com/api/users/match/people`, {
      headers
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_USERS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_USERS_FAIL, payload: err }));
};

export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";
export const getFriends = () => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  axios
    .get(
      `https://friendfinder-be.herokuapp.com/api/users/getAllFriends/friends`,
      { headers }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: GET_FRIENDS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_FRIENDS_FAIL, payload: err }));
};

export const GET_FRIENDS_REQUEST = "GET_FRIENDS_REQUEST";
export const GET_FRIENDS_REQUEST_FAIL = "GET_FRIENDS_REQUEST_FAIL";
export const getFriendsRequest = () => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  axios
    .get(
      `https://friendfinder-be.herokuapp.com/api/users/getAllFriendsRequests/friends`,
      { headers }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: GET_FRIENDS_REQUEST, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_FRIENDS_REQUEST_FAIL, payload: err }));
};

export const GET_MATCH_FRIENDS = "GET_MATCH_FRIENDS";
export const GET_MATCH_FRIENDS_FAIL = "GET_MATCH_FRIENDS_FAIL";
export const getMatchFriends = () => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  axios
    .get(`https://friendfinder-be.herokuapp.com/api/users/match/people`, {
      headers
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_MATCH_FRIENDS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_MATCH_FRIENDS_FAIL, payload: err }));
};

export const addFriend = id => dispatch => {
  const headers = { token: localStorage.getItem("token") };
  axios
    .get(`https://friendfinder-be.herokuapp.com/api/users/${id}/addfriend`, {
      headers
    })
    .then(res => {
      console.log(res.data);
    });
};
