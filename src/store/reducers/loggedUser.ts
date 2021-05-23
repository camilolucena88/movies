import {loggedUserStore} from "../types";
import {ADD_USER_DATA, UserType} from "../actions/auth";

export default function loggedUserReducer(state: loggedUserStore = {username: ''}, action: UserType): loggedUserStore {
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                username: action.username
            };
        default:
            return state;
    }
}