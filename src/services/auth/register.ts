import axios from "axios";
import login from "./login";

type RegistrationDetails = {
    username: string,
    password: string,
    password2: string,
    email: string,
    first_name: string,
    last_name: string,
}
const baseURL = process.env.API_URL

const register = ({username, password, password2, email, first_name, last_name}: RegistrationDetails) => {
    axios.post(baseURL + '/api/auth/register/', {
        username: username,
        password: password,
        password2: password2,
        email: email,
        first_name: first_name,
        last_name: last_name,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.status === 201) {
                login({username, password})
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default register;