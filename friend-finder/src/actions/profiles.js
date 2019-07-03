import axios from "axios";

export const FETCH_MATCH = "FETCH_MATCH";
export const FETCH_FRIEND = "FETCH_FRIEND";
export const FETCH_FRIEND_REQUEST = "FETCH_FRIEND_REQUEST"

export const fetchMatch = dispatch => {
  const headers =  {token: localStorage.getItem("token")}
  const body = {}
  axios.get("https://friendfinder-be.herokuapp.com/api/users/", headers).then(res => {
    dispatch({
      type: FETCH_MATCH,
      payload: res.data
    })
  })
}

export const fetchFriend = dispatch => {
  const headers =  {token: localStorage.getItem("token")}
  // axios.get("https://friendfinder-be.herokuapp.com/api/users/getAllFriends/friends", headers)
  // .then(res => {
    console.log('hi')
  // dispatch({
    
  //     type: FETCH_FRIEND,
  //     payload: [{name: 'bob'}]
  //   })
  // })
}

export const fetchFriendRequest = dispatch => {
  const headers =  {token: localStorage.getItem("token")}
  axios.get("https://friendfinder-be.herokuapp.com/api/users/login", headers).then(res => {
    dispatch({
      type: FETCH_FRIEND,
      payload: res.data
    })
  })
}