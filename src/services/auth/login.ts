import axios from "axios";
import {UserCredentials} from "../../store/types";
import store from "../../store/store";
import {history} from "../../helpers/history";
import userDetails from "./userDetails";
import {storeToken, storeUser} from "../../store/actions/auth";

const baseURL = process.env.API_URL;
const login = ({username, password} : UserCredentials) => {
    axios.post(baseURL + '/api/auth/token/obtain/', {
        username: username,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            store.dispatch(storeToken(response.data.access))
        }).then(() => {
            store.dispatch(storeUser(username))
            userDetails(username, store.getState().token.access_token)
            history.push("/")
    })
        .catch(function (error) {
            console.log(error);
        });
}

export default login;