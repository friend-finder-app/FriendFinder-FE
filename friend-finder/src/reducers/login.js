import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOAD_USER_DATA_SUCCESS
} from '../actions'

const initialState = {
    ifAuth: false,
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        
        case LOGIN_SUCCESS:
        return {
            ...state,
            ...action.payload,
            ifAuth: true,
        }
        case LOAD_USER_DATA_SUCCESS:
            console.log(action.payload)
                return {
                    ...state,
                    ...action.payload,

                }
        default:
            return state;
    }
  };