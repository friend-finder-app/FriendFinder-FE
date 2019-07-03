import {
    LOAD_USER_DATA_SUCCESS,
    LOAD_USER_DATA_FAIL
} from '../actions'

const initialState = {
    profileData: {}
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        
        case LOAD_USER_DATA_SUCCESS:
            console.log(action.payload)
        return {
            ...state,
            profileData: action.payload,
        }
        default:
            return state;
    }
  };