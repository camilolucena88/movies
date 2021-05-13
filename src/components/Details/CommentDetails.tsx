import React from 'react'
import CommentList from "../CommentList/CommentList";
import {CommentType} from "../../store/types";

type Props = {
    id: number,
    comments?: CommentType[],
    onComment: (comment: string, id: number) => void;
    onCommentLike: (elementId: number, commentId: number) => void;
    elementId: number
}


export default function CommentDetails({id, comments, onComment, onCommentLike, elementId}: Props) {
    return <div>
        <div>Comments</div><hr/>
        <div className="container">
            <CommentList elementId={elementId} onCommentLike={onCommentLike} id={id} comments={comments} onComment={onComment} allCommentsView={true}/>
        </div>
    </div>
}
