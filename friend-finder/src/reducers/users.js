import { GET_USERS, GET_USERS_FAIL } from './../actions';
const initialState = {
    users: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};