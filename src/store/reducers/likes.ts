import {Element, LikesStore} from "../types";
import {LikedTypes, WishlistTypes} from "../actions/elements";

const removeFromLikedElements = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addToLikedElements = (elements: Element[], element: Element): Element[] => {
    console.log('I am here', element.id)
    if (elements.some((oldElement) => oldElement.id === element.id))
        return removeFromLikedElements(elements, element.id)
    return [...elements, element];
}

function likedReducer(state: LikesStore = {elements: []}, action: LikedTypes) {
    switch (action.type) {
        case "ADD_ELEMENT_TO_LIKED":
            return {
                ...state,
                elements: addToLikedElements(state.elements, action.payload)
            }
        default:
            return state
    }
}

export default likedReducer;