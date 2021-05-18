import {AuthTypes, LOGIN_USER_SUCCESS, LOGOUT_USER} from "../actions/elements";
import {AuthStore} from "../types";

export default function authReducer(state: AuthStore = {access_token: ''}, action: AuthTypes) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return action.access_token;
        case LOGOUT_USER:
            return "";
        default:
            return state;
    }
}