import React from "react";
import {CommentType} from "../../store/types";
import "./CommentList.css"

type Props = {
    comments?: CommentType[],
    onComment: (event: React.FormEvent) => void;
}

export default function CommentList({comments, onComment}: Props) {
    const submitBtn = (event: React.FormEvent) => {
        event.preventDefault()
        onComment(event)
    }
    return <div className="text-left">
        {comments ? comments.map((comment) => {
            return <div>
                <div className="text-left flex justify-content-between">
                    <div className="flex flex-column">
                        <div><a href=""><small
                            className="text-black font-bold">Camilo </small></a><small> {comment.comment}</small></div>
                        <small className="p-0 m-0 comment-likes text-gray-400">5 min ago</small>
                    </div>
                    <div className="flex flex-column">
                        <button className="text-gray-500" value="1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>
                        <small className="text-center comment-likes">{comment.likes}</small>
                    </div>
                </div>
            </div>
        }) : <small>There are no comments</small>}
        <div><a className="text-center justify-center" href=""><small>view more</small></a></div>
        <form onSubmit={(event) => submitBtn(event)} className="pt-2 flex justify-content-between">
            <input className="form-control-comments " type="text" placeholder="Add a comment"/>
            <button className="btn btn-sm" type="submit"><small className="text-blue-300">Post</small></button>
        </form>
    </div>
}
