import React from 'react';
import Likes from "../Interaction/Likes";
import Bookmark from "../Interaction/Bookmark";
import {CommentType} from "../../store/types";
import Comments from "../Interaction/Comments";

type Props = {
    id: number
    likes?: number,
    liked?: boolean,
    comments?: CommentType[]
    bookmark?: boolean
    onLiked: (event: React.MouseEvent) => void;
    onComment: (event: React.MouseEvent) => void;
    onBookmark: (event: React.MouseEvent) => void;
}

export default function CardInteraction({likes, comments, bookmark, liked, onBookmark, onComment, onLiked, id}: Props) {
    return <div>
        <span className="flex justify-content-between my-3 mx-5">
            {likes && (liked !== undefined) ? <Likes onLiked={onLiked} likes={likes} liked={liked} id={id}/> : ''}
            {comments ? <Comments onComment={onComment} comments={comments}  id={id}/> : ''}
            {(bookmark !== undefined) ? <Bookmark onBookmark={onBookmark} bookmark={bookmark}  id={id}/> : ''}
        </span>
    </div>
}