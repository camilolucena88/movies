import {CommentType, Element} from "../types";

export const ADD_ELEMENT_TO_COMMENT_LIKED = "ADD_ELEMENT_TO_LIKED"
export const REMOVE_ELEMENT_FROM_COMMENT_LIKED = "REMOVE_ELEMENT_FROM_LIKED"

export type CommentLikedTypes =
    | { type: typeof ADD_ELEMENT_TO_COMMENT_LIKED; payload: Element; commentId: number }
    | { type: typeof REMOVE_ELEMENT_FROM_COMMENT_LIKED; payload: number }

export const addToCommentLikedReducer = (element: Element, commentId: number): CommentLikedTypes => ({type: ADD_ELEMENT_TO_COMMENT_LIKED, payload: element, commentId: commentId});
export const removeFromCommentLikedElements = (id: number): CommentLikedTypes => ({type: REMOVE_ELEMENT_FROM_COMMENT_LIKED, payload: id});