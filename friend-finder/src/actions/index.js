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
      console.log('User successfully added to database')
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: SIGNUP_FAIL, payload: err.message });
    });
};


// export const LOAD_USER_DATA_SUCCESS = "LOAD_USER_DATA_SUCCESS";
// export const LOAD_USER_DATA_FAIL = "LOAD_USER_DATA_FAIL";

// export const postSignUp = values => dispatch => {
//   return axios
//     .get(`https://friendfinder-be.herokuapp.com/api/users/ID`, values)
//     .then(res => {
//       console.log('User successfully added to database')
//       dispatch({ type: LOAD_USER_DATA_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       if (err.status === "Error") {
//         localStorage.removeItem("token");
//       }
//       dispatch({ type: LOAD_USER_DATA_FAIL, payload: err.message });
//     });
// };