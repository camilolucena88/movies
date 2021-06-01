import {addCommentToElement, addToLikedComments} from "../../store/actions/comments";
import {Element} from "../../store/types";
import userIsLogged from "../auth/userStatus";
import store from "../../store/store";
import {COMPLETED, ERROR, LOGIN_REQUIRED} from "./const";
import Comments from "../fetch/comments";

export const onCommentLike = (elementId: number, commentId: number, data: Element[]): number => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if(element){
            const comment = element.comments.find(comment => commentId == comment.id)
            if (comment) {
                store.dispatch(addToLikedComments(element, comment))
                return COMPLETED
            }
        }
        return ERROR
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