import axios from "axios";
import {Element} from "../../store/types";
import onLiked from "../userInteraction/likes";
import {onBookmark} from "../userInteraction/wishlist";

type Likes = {
    id: number,
    place: Element,
    type: number,
    created_by: number,
    timestamp: string
}

type Bookmark = {
    created_by: string
    id: number
    place: Element
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
            response.data.liked.forEach((like:Likes) => {
                onLiked(like.place.id, [like.place])
            })
            response.data.bookmarks.forEach((element:Bookmark) => {
                onBookmark(element.place.id, [element.place])
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default userDetails