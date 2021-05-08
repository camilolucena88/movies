import React from 'react';
import Likes from "../Interaction/Likes";
import Bookmark from "../Interaction/Bookmark";
import {CommentType} from "../../store/types";
import Comments from "../Interaction/Comments";

type Props = {
    likes?: number,
    liked?: boolean,
    comments?: CommentType[]
    bookmark?: boolean
}

export default function CardInteraction({likes, comments, bookmark, liked}: Props) {
    return <div>
        <span className="flex justify-content-between my-3 mx-5">
            {likes && (liked !== undefined) ? <Likes likes={likes} liked={liked}/> : ''}
            {comments ? <Comments comments={comments}/> : ''}
            {(bookmark !== undefined) ? <Bookmark bookmark={bookmark}/> : ''}
        </span>
    </div>
}