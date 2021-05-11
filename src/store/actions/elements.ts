import {Element} from "../types";

export const ADD_ELEMENT = "ADD_ELEMENT"
export const REMOVE_ELEMENT = "REMOVE_ELEMENT"
export const UPDATE_ELEMENT = "UPDATE_ELEMENT"
export const ADD_ELEMENT_TO_WISHLIST = "ADD_ELEMENT_TO_WISHLIST"
export const REMOVE_ELEMENT_TO_WISHLIST = "REMOVE_ELEMENT_TO_WISHLIST"
export const ADD_ELEMENT_TO_LIKED = "ADD_ELEMENT_TO_LIKED"
export const REMOVE_ELEMENT_FROM_LIKED = "REMOVE_ELEMENT_FROM_LIKED"

export type ActionTypes =
    | { type: typeof ADD_ELEMENT; payload: Element }
    | { type: typeof REMOVE_ELEMENT; payload: number }
    | { type: typeof UPDATE_ELEMENT; payload: number; field: string }

export type WishlistTypes =
    | { type: typeof ADD_ELEMENT_TO_WISHLIST; payload: Element }
    | { type: typeof REMOVE_ELEMENT_TO_WISHLIST; payload: number }

export type LikedTypes =
    | { type: typeof ADD_ELEMENT_TO_LIKED; payload: Element }
    | { type: typeof REMOVE_ELEMENT_FROM_LIKED; payload: number }

export type CommentsTypes =
    | { type: typeof ADD_ELEMENT_TO_WISHLIST; payload: Element }
    | { type: typeof REMOVE_ELEMENT_TO_WISHLIST; payload: number }

export const addElement = (element: Element): ActionTypes => ({type: ADD_ELEMENT, payload: element});
export const removeElement = (id: number): ActionTypes => ({type: REMOVE_ELEMENT, payload: id});
export const updateElement = (id: number, field: string): ActionTypes => ({type: UPDATE_ELEMENT, payload: id, field: field});
export const addToWishlist = (element: Element): WishlistTypes => ({type: ADD_ELEMENT_TO_WISHLIST, payload: element});
export const removeFromWishlist = (id: number): WishlistTypes => ({type: REMOVE_ELEMENT_TO_WISHLIST, payload: id});
export const addToLikedElements = (element: Element): LikedTypes => ({type: ADD_ELEMENT_TO_LIKED, payload: element});
export const removeFromLikedElements = (id: number): LikedTypes => ({type: REMOVE_ELEMENT_FROM_LIKED, payload: id});
