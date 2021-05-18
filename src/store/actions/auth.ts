import {AppDispatch} from "../types";
import {logout, obtainToken} from "../authenticationAPI";
import {LOGIN_USER_SUCCESS, LOGOUT_USER} from "./elements";


export function loginUserSuccess(token: string) {
    return {type: LOGIN_USER_SUCCESS, token};
}

export function loginUser(username: string, password: string) {
    return async function (dispatch: AppDispatch) {
        try {
            const response = await obtainToken(username, password);
            dispatch(loginUserSuccess(response.data.access));
        } catch (error) {
            console.log("Error obtaining token. " + error);
        }
    };
}

export function logoutUserSuccess() {
    return {type: LOGOUT_USER};
}

export function logoutUser() {
    return async function (dispatch: AppDispatch) {
        await logout();
        dispatch(logoutUserSuccess());
    };
}