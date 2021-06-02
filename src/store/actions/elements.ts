import {CommentType, Element} from "../types";
import {ADD_COMMENT_TO_ELEMENT, ADD_LIKE_TO_LIKED_COMMENT, REMOVE_LIKE_FROM_LIKED_COMMENT} from "./comments";

export const ADD_ELEMENT = "ADD_ELEMENT"
export const REMOVE_ELEMENT = "REMOVE_ELEMENT"
export const UPDATE_ELEMENT = "UPDATE_ELEMENT"



export type ActionTypes =
    | { type: typeof ADD_ELEMENT; payload: Element }
    | { type: typeof REMOVE_ELEMENT; payload: number }
    | { type: typeof UPDATE_ELEMENT; payload: number; field: string }
    | { type: typeof ADD_COMMENT_TO_ELEMENT; comment: string; payload: number; }
    | { type: typeof ADD_LIKE_TO_LIKED_COMMENT; payload: Element, comment: CommentType, field: string }
    | { type: typeof REMOVE_LIKE_FROM_LIKED_COMMENT; payload: number }

export const addElement = (element: Element): ActionTypes => ({type: ADD_ELEMENT, payload: element});
export const removeElement = (id: number): ActionTypes => ({type: REMOVE_ELEMENT, payload: id});
export const updateElement = (id: number, field: string): ActionTypes => ({
    type: UPDATE_ELEMENT,
    payload: id,
    field: field
});

