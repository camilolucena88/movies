import {Element, LikesStore} from "../types";
import {ADD_ELEMENT_TO_LIKED, LikedTypes} from "../actions/likes";

const removeFromLikedElements = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addToLikedElements = (elements: Element[], element: Element): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return removeFromLikedElements(elements, element.id)
    return [...elements, element];
}

function likedReducer(state: LikesStore = {elements: []}, action: LikedTypes) {
    switch (action.type) {
        case ADD_ELEMENT_TO_LIKED:
            return {
                ...state,
                elements: addToLikedElements(state.elements, action.payload)
            }
        default:
            return state
    }
}

export default likedReducer;