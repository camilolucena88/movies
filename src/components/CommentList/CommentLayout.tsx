import {CommentType} from "../../store/types";
import moment from "moment";
import Likes from "../Interaction/Likes";
import React from "react";

type Props = {
    id: number
    comment: CommentType,
    onCommentLike: (elementId: number, commentId: number) => void;
}

export default function CommentLayout ({id, comment, onCommentLike} : Props) {

    const onCommentLikePerElement = (event: { currentTarget: any; }): void => {
        onCommentLike(id, parseInt(event.currentTarget.value))
    }
    return <div>
        <div className="text-left flex justify-content-between">
            <div className="flex flex-column text-justify">
                <div><a href=""><small
                    className="text-black font-bold">Camilo </small></a><small> {comment.comment}</small>
                </div>
                <small className="p-0 m-0 comment-likes text-gray-400">{moment(comment.timestamp).fromNow()}</small>
            </div>
            <div className="flex flex-column m-1">
                <Likes id={comment.id} isComment={true} likes={comment.likes} liked={comment.liked}
                       onLiked={onCommentLikePerElement}/>
            </div>
        </div>
    </div>
}