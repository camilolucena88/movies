export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_USER_DATA = "ADD_USER_DATA";

export type AuthTypes =
    | { type: typeof LOGIN_USER_SUCCESS; access_token: string; }
    | { type: typeof LOGOUT_USER; }


export type UserType =
    | { type: typeof ADD_USER_DATA; username: string; }

// ACTIONS
export const storeToken = (access_token: string): AuthTypes => ({type: LOGIN_USER_SUCCESS, access_token: access_token})
export const removeToken = (): AuthTypes => ({type: LOGOUT_USER})
export const storeUser = (username: string): UserType => ({type: ADD_USER_DATA, username: username})