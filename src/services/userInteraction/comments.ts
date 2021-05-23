import {addCommentToElement, addToLikedComments} from "../../store/actions/comments";
import {Element} from "../../store/types";
import userIsLogged from "../auth/userStatus";
import store from "../../store/store";

export const onCommentLike = (elementId: number, commentId: number, data: Element[]): void => {
    if (!userIsLogged()) {
        alert('NEED TO LOGIN')
    } else if (data) {
        const element = data[elementId - 1]
        store.dispatch(addToLikedComments(element, element.comments[commentId - 1]))
    } else {
        alert('SOMTHING IS WRONG')
    }
}

export const onComment = (comment: string, id: number, data: Element[]): void => {
    if (!userIsLogged()) {
        alert('NEED TO LOGIN')
    } else if (data) {
        store.dispatch(addCommentToElement(comment, id))
    } else {
        alert('SOMTHING IS WRONG')
    }
}