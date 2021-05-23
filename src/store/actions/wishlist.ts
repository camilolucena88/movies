import {Element} from "../types";

export const ADD_ELEMENT_TO_WISHLIST = "ADD_ELEMENT_TO_WISHLIST"
export const REMOVE_ELEMENT_TO_WISHLIST = "REMOVE_ELEMENT_TO_WISHLIST"

export type WishlistTypes =
    | { type: typeof ADD_ELEMENT_TO_WISHLIST; payload: Element }
    | { type: typeof REMOVE_ELEMENT_TO_WISHLIST; payload: number }


/// ADD ///
export const addToWishlist = (element: Element): WishlistTypes => ({type: ADD_ELEMENT_TO_WISHLIST, payload: element});

/// REMOVE ///
export const removeFromWishlist = (id: number): WishlistTypes => ({type: REMOVE_ELEMENT_TO_WISHLIST, payload: id});

/// UPDATE ///
