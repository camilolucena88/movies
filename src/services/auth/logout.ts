import store from "../../store/store";
import {removeToken} from "../../store/actions/elements";

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    store.dispatch(removeToken())

}

export default logout;