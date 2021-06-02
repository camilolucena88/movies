import {CommentType, Element, MovieStore} from "../types";
import moment from 'moment';
import {
    ActionTypes,
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    UPDATE_ELEMENT
} from "../actions/elements";
import {ADD_COMMENT_TO_ELEMENT, ADD_LIKE_TO_LIKED_COMMENT} from "../actions/comments";

const removeElement = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addElement = (elements: Element[], element: Element): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return elements
    return [...elements, element];
}

const addCommentToElement = (elements: Element[], elementId: number, comment: string): Element[] => {
    elements.map((oldElement) => {
        if (oldElement.id == elementId) {
            return oldElement.comments?.push({
                id: oldElement.comments.length + 1,
                placeId: oldElement.id,
                comment: comment,
                likes: 0,
                timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
                liked: false,
                replies: []
            })
        }
    })
    return elements;
}

const updateElement = (elements: Element[], elementId: number, field: string): Element[] => {
    return elements.map(oldElement => {
        if (oldElement.id == elementId) {
            if (field === 'bookmark') {
                if (oldElement.bookmark) {
                    oldElement.bookmark = !oldElement.bookmark
                } else {
                    oldElement.bookmark = true
                }
            } else if (field === 'setLiked') {
                oldElement.liked = !oldElement.liked
            } else if (field === 'liked') {
                oldElement.liked = !oldElement.liked
                if (oldElement.liked) {
                    oldElement.likes = oldElement.likes + 1
                } else {
                    oldElement.likes = oldElement.likes - 1
                }
            }
            return oldElement
        }
        return oldElement
    });
}


const addToLikedComments = (elements: Element[], element: Element, comment: CommentType, field: string) => {
    return elements.map(oldElement => {
        if (oldElement.id == element.id) {
            let oldComment = oldElement.comments.find(oldComment => oldComment.id === comment.id)
            let oldCommentIndex = oldElement.comments.findIndex(oldComment => oldComment.id === comment.id)
            if (field === 'setLiked' && oldComment) {
                oldComment.liked = true
            } else if (oldComment) {
                oldComment.liked = isNaN(oldComment.likes) ? true : !(oldComment.liked)
                if (oldComment.liked) {
                    if (isNaN(oldComment.likes)) {
                        oldComment.likes = 1
                    } else {
                        oldComment.likes = oldComment.likes + 1
                    }
                } else {
                    oldComment.likes = oldComment.likes - 1
                }
                oldElement.comments[oldCommentIndex] = oldComment
            }
            return oldElement
        }
        return oldElement
    });
}

function elementsReducer(state: MovieStore = {elements: []}, action: ActionTypes) {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
                ...state,
                elements: addElement(state.elements, action.payload)
            }
        case UPDATE_ELEMENT:
            return {
                ...state,
                elements: updateElement(state.elements, action.payload, action.field)
            }
        case REMOVE_ELEMENT:
            return {
                ...state,
                elements: removeElement(state.elements, action.payload)
            }
        case ADD_COMMENT_TO_ELEMENT:
            return {
                ...state,
                elements: addCommentToElement(state.elements, action.payload, action.comment)
            }
        case ADD_LIKE_TO_LIKED_COMMENT:
            return {
                ...state,
                elements: addToLikedComments(state.elements, action.payload, action.comment, action.field)
            }
        default:
            return state
    }
}

export default elementsReducer;