import {AuthTypes, LOGIN_USER_SUCCESS, LOGOUT_USER} from "../actions/elements";
import {AuthStore} from "../types";

export default function authReducer(state: AuthStore = {access_token: ''}, action: AuthTypes) : AuthStore {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                access_token: action.access_token
            };
        case LOGOUT_USER:
            return {
                access_token: ''
            };
        default:
            return state;
    }
}