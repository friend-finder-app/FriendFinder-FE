import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    ifAuth: false,
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        
        case LOGIN_SUCCESS:
            console.log(action.payload)
        return {
            ...state,
            ...action.payload,
            ifAuth: true,
        }
        default:
            return state;
    }
  };