import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    ifAuth: false,
    profileData: {}
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        
        case LOGIN_SUCCESS:
        return {
            ...state,
            ...action.payload,
            ifAuth: true,
        }
        default:
            return state;
    }
  };