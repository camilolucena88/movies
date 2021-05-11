import React from 'react';
import {Link} from 'react-router-dom';
import CardInteraction from "./CardInteraction";
import {Payload} from "../../store/types";
import CommentList from "../CommentList/CommentList";
import "./Card.css"

type Props = {
    payload: Payload
    onLiked: (event: React.MouseEvent) => void;
    onComment: (event: React.FormEvent) => void;
    onBookmark: (event: React.MouseEvent) => void;
}

export default function Card({payload, onBookmark, onComment, onLiked}: Props) {
    const addCardInteraction = () => {
        if ((payload.liked !== undefined) && payload.likes && payload.comments && (payload.bookmark !== undefined)) {
            return <CardInteraction
                id={payload.id}
                liked={payload.liked}
                likes={payload.likes}
                comments={payload.comments}
                bookmark={payload.bookmark}
                onLiked={onLiked}
                onComment={onComment}
                onBookmark={onBookmark}
            />   
        }
        return ''
    }
    
    return (<div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col align-content-between items-center text-center">
            <Link to={payload.url}><img alt="team"
                               className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-2"
                               src={payload.img}></img></Link>
            <div className="w-full">
                {addCardInteraction()}
                <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                <h3 className="text-gray-500 mb-3 card-height-title"><Link to={payload.url}>{payload.title}</Link></h3>
                <p className="mb-4 comments"><small>{payload.message}</small></p>
                <span className="inline-flex">
                                <a className="text-gray-500">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="w-5 h-5"
                                     viewBox="0 0 24 24">
                                  <path
                                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                              </a>
                                <a className="ml-2 text-gray-500">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="w-5 h-5"
                                     viewBox="0 0 24 24">
                                  <path
                                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                              </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                         className="w-5 h-5"
                                         viewBox="0 0 24 24">
                                  <path
                                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                </a>
                </span>
                <CommentList comments={payload.comments} onComment={() => onComment}/>
            </div>
        </div>
    </div>)
}