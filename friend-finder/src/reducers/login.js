import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    userSignUp: []
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
        return {
            ...state,
            userSignUp: action.payload
        }
        default:
            return state;
    }
  };