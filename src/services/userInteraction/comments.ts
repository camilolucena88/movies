import {addCommentToElement, addLikedCommentsToElement} from "../../store/actions/comments";
import {Element, CommentType} from "../../store/types";
import userIsLogged from "../auth/userStatus";
import store from "../../store/store";
import {COMPLETED, ERROR, LOGIN_REQUIRED} from "./const";
import Comments from "../fetch/comments";
import CommentLikes from "../fetch/commentLikes";
import {addToCommentLikedReducer} from "../../store/actions/commentLikes";

const addCommentLiked = (element:Element, comment: CommentType) => {
    store.dispatch(addLikedCommentsToElement(element, comment, 'liked'))
    store.dispatch(addToCommentLikedReducer(element, comment.id))
    const like = new CommentLikes()
    if (like.create(element.id, comment.id)) {
        return COMPLETED
    } else {
        return ERROR
    }
}

const removeCommentLiked = (element:Element, comment: CommentType) => {
    store.dispatch(addLikedCommentsToElement(element, comment, 'liked'))
    const like = new CommentLikes()
    if (like.remove(element.id, comment.id)) {
        return COMPLETED
    } else {
        return ERROR
    }
}


export const onCommentLike = (elementId: number, commentId: number): number => {
    const elements = store.getState().movies.elements
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (elements){
        const element = elements.find(element => elementId == element.id)
        if(element){
            const comment = element.comments.find(comment => commentId == comment.id)
            if (comment && !comment.liked) {
                addCommentLiked(element, comment)
                return COMPLETED
            } else if (comment){
                removeCommentLiked(element, comment)
                return COMPLETED
            }
        }
        return ERROR
    } else {
        return ERROR
    }
}

export const getLikedComment = (elementId: number, data: Element[], comment: CommentType) => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if (element) {
            //ADD TO ELEMENT -> TO SHOW LIKED AND SUM 1
            store.dispatch(addLikedCommentsToElement(element, comment, 'setLiked'))
            //ADD TO REDUCER
            // store.dispatch(addToCommentLikedReducer(element, comment.id))
        }
    } else {
        return ERROR
    }
}

export const onComment = (comment: string, id: number, data: Element[]): number => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        store.dispatch(addCommentToElement(comment, id))
        const fetchComment = new Comments()
        if (fetchComment.create(id, {"description": comment})) {
            return COMPLETED
        } else {
            return ERROR
        }
    } else {
        return ERROR
    }
}