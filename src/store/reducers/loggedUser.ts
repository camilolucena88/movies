import {UserType, ADD_USER_DATA} from "../actions/elements";
import {loggedUserStore} from "../types";

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