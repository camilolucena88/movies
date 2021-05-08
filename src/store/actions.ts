import {Element} from './types'

export const ADD_ELEMENT = "ADD_ELEMENT"
export const REMOVE_ELEMENT = "REMOVE_ELEMENT"

export type ActionTypes =
    | { type: typeof ADD_ELEMENT; payload: Element }
    | { type: typeof REMOVE_ELEMENT; payload: number }

export const addElement = (element: Element): ActionTypes => ({type: ADD_ELEMENT, payload: element});
export const removeElement = (id: number): ActionTypes => ({type: REMOVE_ELEMENT, payload: id});