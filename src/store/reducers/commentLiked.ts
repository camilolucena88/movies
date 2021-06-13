import {Element, LikesStore} from "../types";
import {ADD_ELEMENT_TO_COMMENT_LIKED, CommentLikedTypes} from "../actions/commentLikes";

const removeFromLikedElements = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addToLikedElements = (elements: Element[], element: Element, commentId: number): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return removeFromLikedElements(elements, element.id)
    return [...elements, element];
}

function commentLikedReducer(state: LikesStore = {elements: []}, action: CommentLikedTypes) {
    switch (action.type) {
        case ADD_ELEMENT_TO_COMMENT_LIKED:
            return {
                ...state,
                elements: addToLikedElements(state.elements, action.payload, action.commentId)
            }
        default:
            return state
    }
}

export default commentLikedReducer;