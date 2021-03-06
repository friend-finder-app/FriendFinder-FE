import {
    LOAD_USER_DATA_SUCCESS
} from '../actions'

const initialState = {
    profileData: {
        friends: []
    }
  }
  
  export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_USER_DATA_SUCCESS:
            // console.log(action.payload)
                return {
                    ...state,
                    profileData: action.payload
                }
        default:
            return state;
    }
  };