import React from 'react'
import CommentList from "../CommentList/CommentList";
import {CommentType} from "../../store/types";

type Props = {
    comments?: CommentType[],
    onComment: (event: React.FormEvent) => void;
}


export default function CommentDetails({comments, onComment}: Props) {
    return <div>
        <div>Comments</div><hr/>
        <div className="container">
            <CommentList comments={comments} onComment={() => onComment}/>
        </div>
    </div>
}
