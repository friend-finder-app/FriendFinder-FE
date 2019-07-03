import {
  FETCH_MATCH,
  FETCH_FRIEND,
  FETCH_FRIEND_REQUEST
} from "../actions/profiles"

const initialState = {
  matches: [],
  friends: [],
  friendRequest: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_FRIEND:
      return {
        ...state,
        FETCH_FRIEND: action.payload
      }
      case FETCH_MATCH:
      return {
        ...state,
        FETCH_MATCH: action.payload
      }
      case FETCH_FRIEND_REQUEST:
      return {
        ...state,
        FETCH_FRIEND_REQUEST: action.payload
      }
    default:
      return state;
  }
};