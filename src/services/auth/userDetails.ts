import axios from "axios";
import {CommentType, Element} from "../../store/types";
import {getLiked} from "../userInteraction/likes";
import {getBookmarked} from "../userInteraction/wishlist";
import {getLikedComment} from "../userInteraction/comments";

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

type LikesComment = {
    comment: CommentType
    created_by: string
    place: Element
    timestamp: string
}

const baseURL = process.env.REACT_APP_API_URL;

const userDetails = (username: string, token: string) => {
    axios.get(baseURL + '/api/users/'+username, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        }
    })
        .then(function (response) {
            response.data.liked.forEach((like:Likes) => {
                getLiked(like.place.id, [like.place])
            })
            response.data.bookmarks.forEach((element:Bookmark) => {
                getBookmarked(element.place.id, [element.place])
            })
            console.log()
            response.data.comment_likes.forEach((like:LikesComment) => {
                getLikedComment(like.place.id, [like.place], like.comment)
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default userDetails