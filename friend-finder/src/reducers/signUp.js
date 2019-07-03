import {
    LOAD_USER_DATA_SUCCESS,
    LOAD_USER_DATA_FAIL
} from '../actions'

const initialState = {
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        
        case LOGIN_SUCCESS:
            console.log(action.payload)
        return {
            ...state,
            ...action.payload,
        }
        default:
            return state;
    }
  };