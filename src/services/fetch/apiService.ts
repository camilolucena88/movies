import axios from "axios";
import store from "../../store/store";

class ApiService {
    async post(url: string, data?: object) {
        await axios.post('http://localhost:8000/api/' + url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + store.getState().token.access_token
            }
        }   )
            .then(r => r)
            .catch(err => console.log(err))
    }
    async delete(url: string, data?: object) {
        await axios.delete('http://localhost:8000/api/' + url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + store.getState().token.access_token
            }
        }   )
            .then(r => r)
            .catch(err => console.log(err))
    }
}

export default ApiService