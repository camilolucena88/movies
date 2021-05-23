import store from "../../store/store";

const userIsLogged = () => {
    return store.getState().token.access_token !== ''
}

export default userIsLogged;