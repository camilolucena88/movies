import {CommentType, Element} from "../types";

export const ADD_ELEMENT = "ADD_ELEMENT"
export const REMOVE_ELEMENT = "REMOVE_ELEMENT"
export const UPDATE_ELEMENT = "UPDATE_ELEMENT"
export const ADD_ELEMENT_TO_WISHLIST = "ADD_ELEMENT_TO_WISHLIST"
export const REMOVE_ELEMENT_TO_WISHLIST = "REMOVE_ELEMENT_TO_WISHLIST"
export const ADD_ELEMENT_TO_LIKED = "ADD_ELEMENT_TO_LIKED"
export const REMOVE_ELEMENT_FROM_LIKED = "REMOVE_ELEMENT_FROM_LIKED"
export const ADD_COMMENT_TO_ELEMENT = "ADD_COMMENT_TO_ELEMENT"
export const REMOVE_COMMENT_FROM_ELEMENT = "REMOVE_COMMENT_FROM_ELEMENT"
export const ADD_LIKE_TO_LIKED_COMMENT = "ADD_LIKE_TO_LIKED_COMMENT"
export const REMOVE_LIKE_FROM_LIKED_COMMENT = "REMOVE_LIKE_FROM_LIKED_COMMENT"

export type ActionTypes =
    | { type: typeof ADD_ELEMENT; payload: Element }
    | { type: typeof REMOVE_ELEMENT; payload: number }
    | { type: typeof UPDATE_ELEMENT; payload: number; field: string }
    | { type: typeof ADD_COMMENT_TO_ELEMENT; comment: string; payload: number; }
    | { type: typeof ADD_LIKE_TO_LIKED_COMMENT; payload: Element, comment: CommentType }

export type WishlistTypes =
    | { type: typeof ADD_ELEMENT_TO_WISHLIST; payload: Element }
    | { type: typeof REMOVE_ELEMENT_TO_WISHLIST; payload: number }

export type LikedTypes =
    | { type: typeof ADD_ELEMENT_TO_LIKED; payload: Element }
    | { type: typeof REMOVE_ELEMENT_FROM_LIKED; payload: number }

export type CommentLikedTypes =
    | { type: typeof ADD_LIKE_TO_LIKED_COMMENT; payload: Element, comment: CommentType }
    | { type: typeof REMOVE_LIKE_FROM_LIKED_COMMENT; payload: number }

export type CommentsTypes =
    | { type: typeof ADD_COMMENT_TO_ELEMENT; comment: string; payload: number; }
    | { type: typeof REMOVE_COMMENT_FROM_ELEMENT; payload: number }

export const addElement = (element: Element): ActionTypes => ({type: ADD_ELEMENT, payload: element});
export const removeElement = (id: number): ActionTypes => ({type: REMOVE_ELEMENT, payload: id});
export const updateElement = (id: number, field: string): ActionTypes => ({
    type: UPDATE_ELEMENT,
    payload: id,
    field: field
});
export const addToWishlist = (element: Element): WishlistTypes => ({type: ADD_ELEMENT_TO_WISHLIST, payload: element});
export const removeFromWishlist = (id: number): WishlistTypes => ({type: REMOVE_ELEMENT_TO_WISHLIST, payload: id});
export const addToLikedElements = (element: Element): LikedTypes => ({type: ADD_ELEMENT_TO_LIKED, payload: element});
export const removeFromLikedElements = (id: number): LikedTypes => ({type: REMOVE_ELEMENT_FROM_LIKED, payload: id});
export const addCommentToElement = (comment: string, id: number): CommentsTypes => ({
    type: ADD_COMMENT_TO_ELEMENT,
    payload: id,
    comment: comment
});
export const addToLikedComments = (element: Element, comment: CommentType): CommentLikedTypes => ({
    type: ADD_LIKE_TO_LIKED_COMMENT,
    payload: element,
    comment: comment
});
