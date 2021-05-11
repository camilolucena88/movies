import {Element, MovieStore} from "../types";
import {
    ActionTypes,
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    UPDATE_ELEMENT
} from "../actions/elements";

const removeElement = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addElement = (elements: Element[], element: Element): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return elements
    return [...elements, element];
}

const updateElement = (elements: Element[], elementId: number, field: string): Element[] => {
    return elements.map(oldElement => {
        if (oldElement.id == elementId) {
            if (field === 'bookmark') {
                oldElement.bookmark = !oldElement.bookmark
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
                movies: removeElement(state.elements, action.payload)
            }
        default:
            return state
    }
}

export default elementsReducer;