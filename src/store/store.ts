import {createStore} from 'redux'
import {Element, Store} from "./types";
import {ActionTypes, ADD_ELEMENT, REMOVE_ELEMENT} from "./actions";

function payloadReducer(state: Store = {elements: [], newElement: null}, action: ActionTypes) {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
                ...state,
                elements: addElement(state.elements, action.payload)
            }
        case REMOVE_ELEMENT:
            return {
                ...state,
                elements: removeElement(state.elements, action.payload)
            }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(payloadReducer)


// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

const removeElement = (elements: Element[], id: number): Element[] =>
    elements.filter((element: Element) => element.id !== id)

const addElement = (elements: Element[], element: Element): Element[] => {
    if (elements.some((oldElement) => oldElement.id === element.id))
        return elements
    return [ ...elements, element ];
}

export default store;