import {CommentType, Element} from "../types";
import {ActionTypes} from "./elements";

export const ADD_COMMENT_TO_ELEMENT = "ADD_COMMENT_TO_ELEMENT"
export const REMOVE_COMMENT_FROM_ELEMENT = "REMOVE_COMMENT_FROM_ELEMENT"
export const ADD_LIKE_TO_LIKED_COMMENT = "ADD_LIKE_TO_LIKED_COMMENT"
export const REMOVE_LIKE_FROM_LIKED_COMMENT = "REMOVE_LIKE_FROM_LIKED_COMMENT"

export type CommentsTypes =
    | { type: typeof ADD_COMMENT_TO_ELEMENT; comment: string; payload: number; }
    | { type: typeof REMOVE_COMMENT_FROM_ELEMENT; payload: number }

export const addCommentToElement = (comment: string, id: number): CommentsTypes => ({
    type: ADD_COMMENT_TO_ELEMENT,
    payload: id,
    comment: comment
});
export const addLikedCommentsToElement = (element: Element, comment: CommentType, field: string): ActionTypes => ({
    type: ADD_LIKE_TO_LIKED_COMMENT,
    payload: element,
    comment: comment,
    field: field
});