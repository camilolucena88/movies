import store from "../../store/store";

const userIsLogged = () => {
    const access_token = store.getState().token.access_token
    return access_token !== ''
}

export default userIsLogged;