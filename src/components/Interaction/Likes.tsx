import React from "react";
import Header from "../Header/Header";

type Props = {
    likes: number,
    id: number,
    liked: boolean,
    onLiked: (event: React.MouseEvent) => any;
    isComment?: boolean
}

const defaultCommentType = {
    isComment: false
} 

export default function Likes({likes, liked, id, onLiked, isComment}:Props) {
    const svgSizeClass = isComment ? 'w-3 h-3' : 'w-5 h-5'
    const totalLikesClass = isComment ? 'text-center comment-likes' : ''

    return <div className="flex flex-column">
        <button className="text-gray-500" value={id} onClick={onLiked}>
            { liked ? <svg xmlns="http://www.w3.org/2000/svg" className={svgSizeClass} fill="currentColor" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" className={svgSizeClass} fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>}
        </button>
        <small className={totalLikesClass}>{likes}</small>
    </div>
}

Likes.defaultProps = defaultCommentType;