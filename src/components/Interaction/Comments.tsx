import React from "react";
import {CommentType} from "../../store/types";

type Props = {
    comments: CommentType[]
    onComment: (comment: string, id: number) => void;
    id: number
}

export default function Comments({comments, id, onComment}:Props) {
    return <div className="flex flex-column">
        <button className="text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                 strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                 viewBox="0 0 24 24">
                <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
        </button>
        <small>{comments.length}</small>
    </div>
}