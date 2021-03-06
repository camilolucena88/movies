import React from 'react';
import {Link} from 'react-router-dom';
import CardInteraction from "./CardInteraction";
import {Payload} from "../../store/types";
import CommentList from "../CommentList/CommentList";
import "./Card.css"

type Props = {
    id: number
    payload: Payload
    onLiked: (event: React.MouseEvent) => void;
    onComment: (comment: string, id: number) => void;
    onBookmark: (event: React.MouseEvent) => void;
    onCommentLike: (elementId: number, commentId: number) => void;
}

export default function Card({id, payload, onBookmark, onComment, onLiked, onCommentLike}: Props) {
    const addCardInteraction = () => {
        return <CardInteraction
            id={payload.id}
            liked={payload.liked !== undefined ? payload.liked : false}
            likes={payload.likes}
            comments={payload.comments}
            bookmark={payload.bookmark !== undefined ? payload.bookmark : false}
            onLiked={onLiked}
            onComment={onComment}
            onBookmark={onBookmark}
        />
    }

    const thumbnail = payload.thumbnail !== null ? payload.thumbnail : payload.img

    return (<div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col align-content-between items-center text-center">
            <Link to={payload.url}><img alt="team"
                               className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-2"
                               src={thumbnail}></img></Link>
            <div className="w-full">
                {addCardInteraction()}
                <p className="title-font font-medium text-lg text-gray-900"><small>{payload.type[0]}</small></p>
                <h3 className="text-gray-500 my-4"><Link to={payload.url}>{payload.title}</Link></h3>
                <p className="mb-1 comments"><small>{payload.message}</small></p>
                <span className="ml-2 inline-flex">

                </span>
                <CommentList elementId={payload.id} onCommentLike={onCommentLike} id={id} comments={payload.comments} onComment={onComment}/>
            </div>
        </div>
    </div>)
}