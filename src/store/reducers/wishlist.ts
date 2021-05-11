import {Element, Store, WishlistStore} from "../types";
import {ADD_ELEMENT_TO_WISHLIST, REMOVE_ELEMENT_TO_WISHLIST, WishlistTypes} from "../actions/elements";

const removeFromWishlist = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addToWishlist = (elements: Element[], element: Element): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return removeFromWishlist(elements, element.id)
    return [...elements, element];
}

function wishlistReducer(state: WishlistStore = {elements: []}, action: WishlistTypes) {
    switch (action.type) {
        case ADD_ELEMENT_TO_WISHLIST:
            return {
                ...state,
                elements: addToWishlist(state.elements, action.payload)
            }
        case REMOVE_ELEMENT_TO_WISHLIST:
            return {
                ...state,
                elements: removeFromWishlist(state.elements, action.payload)
            }
        default:
            return state
    }
}

export default wishlistReducer;