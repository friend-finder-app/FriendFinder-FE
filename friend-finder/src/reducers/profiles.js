import {
  // FETCH_MATCH,
  // FETCH_FRIEND,
  // FETCH_FRIEND_REQUEST,
  GET_FRIENDS_FAIL,
  GET_FRIENDS,
  GET_FRIENDS_REQUEST,
  GET_MATCH_FRIENDS
} from "../actions"

const initialState = {
  matches: [],
  friends: [],
  friendRequest: [],
  allFriends: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        allFriends: action.payload
      }
    case GET_FRIENDS_REQUEST:
      return {
        ...state,
        friendRequest: action.payload
      }
    case GET_MATCH_FRIENDS:
      return {
        ...state,
        matches: action.payload
      }

    // case FETCH_MATCH:
    //   return {
    //     ...state,
    //     FETCH_MATCH: action.payload
    //   }
    // case FETCH_FRIEND_REQUEST:
    //   return {
    //     ...state,
    //     FETCH_FRIEND_REQUEST: action.payload
    //   }
    default:
      return state;
  }
};