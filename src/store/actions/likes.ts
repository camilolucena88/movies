import {Element} from "../types";

export const ADD_ELEMENT_TO_LIKED = "ADD_ELEMENT_TO_LIKED"
export const REMOVE_ELEMENT_FROM_LIKED = "REMOVE_ELEMENT_FROM_LIKED"

export type LikedTypes =
    | { type: typeof ADD_ELEMENT_TO_LIKED; payload: Element }
    | { type: typeof REMOVE_ELEMENT_FROM_LIKED; payload: number }

export const addToLikedElements = (element: Element): LikedTypes => ({type: ADD_ELEMENT_TO_LIKED, payload: element});
export const removeFromLikedElements = (id: number): LikedTypes => ({type: REMOVE_ELEMENT_FROM_LIKED, payload: id});