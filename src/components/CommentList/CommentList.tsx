import React from "react";
import {CommentType} from "../../store/types";
import "./CommentList.css"
import {Link} from "react-router-dom";
import CommentLayout from "./CommentLayout";

type Props = {
    id: number,
    comments?: CommentType[],
    onComment: (comment: string, id: number) => void;
    onCommentLike: (elementId: number, commentId: number) => void;
    elementId: number
    allCommentsView: boolean
}

const defaultAllCommentsView = {
    allCommentsView: false,
}

export default function CommentList({id, comments, onComment, onCommentLike, elementId, allCommentsView}: Props) {
    const [comment, addComment] = React.useState<string | undefined>('')

    const submitBtn = (event: React.FormEvent) => {
        event.preventDefault()
        if (comment) {
            onComment(comment, id)
            addComment('')
        }
    }

    const viewMoreBtn = () => {
        if (comments) {
            return comments.length > 3 ?
                <div><Link className="text-center justify-center" to={"/movies/" + elementId}><small>view
                    more</small></Link></div> : ''
        }
    }
    
    const viewAllComments = () => {
        if (comments) {
            return comments.map((comment) => {
                return <CommentLayout comment={comment} id={id} onCommentLike={onCommentLike}/>
            })
        }
    }
    
    const showComments = () => {
        if (comments) {
            if (allCommentsView) {
                return viewAllComments()
            } else {
                let commentsView = comments.map((comment, index) => {
                    if (!(comments.length > 3)) {
                        return <CommentLayout comment={comment} id={id} onCommentLike={onCommentLike}/>
                    } else if (index > comments.length - 4) {
                        return <CommentLayout comment={comment} id={id} onCommentLike={onCommentLike}/>
                    }
                })
                return <div> {commentsView} {viewMoreBtn()} </div>
            }
        } else {
            return <small>There are no comments</small>
        }
    }
    
    return <div className="text-left">
        {showComments()}
        <div>
            <form onSubmit={(event) => submitBtn(event)} className="pt-2 flex justify-content-between bg-white rounded-md">
                    <input className="form-control-comments " type="text" placeholder="Add a comment" value={comment}
                           onChange={(event) => addComment(event.currentTarget.value)}/>
                    <button className="btn btn-sm" type="submit"><small className="text-blue-300">Post</small></button>
            </form>
        </div>
    </div>
}

CommentList.defaultProps = defaultAllCommentsView;
