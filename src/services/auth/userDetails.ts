import axios from "axios";
import {addToLikedElements, updateElement} from "../../store/actions/elements";
import store from "../../store/store";
import {Element} from "../../store/types";

type Likes = {
    id: number,
    place: Element,
    type: number,
    created_by: number,
    timestamp: string
}

const userDetails = (username: string, token: string) => {
    axios.get('http://localhost:8000/api/users/'+username, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        }
    })
        .then(function (response) {
            console.log(response.data)
            response.data.liked.forEach((like:Likes) => {
                store.dispatch(addToLikedElements(like.place))
                updateElement(like.place.id, 'liked')
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default userDetails