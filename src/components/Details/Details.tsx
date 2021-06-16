import React, {useState} from 'react';
import ReverseBtn from "../Buttons/ReverseBtn";
import RatingStar from "../Rating/RatingStar";
import {Element as Payload} from "./../../store/types"
import { useDispatch } from "react-redux";
import {updateElement} from "../../store/actions/elements";
import CommentDetails from "./CommentDetails";
import {addToWishlist} from "../../store/actions/wishlist";
import {BeachDetails} from "../DetailSection/BeachDetails/BeachDetails";
import {GoogleMaps} from "../GoogleMaps/GoogleMaps";
import {HistoricalPlaces} from "../HistoricalPlaces/HistoricalPlaces";
import {Restaurant} from "../Restaurant/Restaurant";
import {NightClubs} from "../NightClubs/NightClubs";
import {Bars} from "../Bars/Bars";
import {onBookmark} from "../../services/userInteraction/wishlist";
import Alert from "../Alert/Alert";

type Props = {
    payload: Payload,
    onComment: (comment: string, id: number) => void;
    onCommentLike: (elementId: number, commentId: number) => void;
}
const baseURL = process.env.REACT_APP_API_URL;
const Details = ({payload, onComment, onCommentLike}: Props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const slugChooser = (slug : string) => {
        switch (slug) {
            case 'beach':
                return <BeachDetails/>
            case 'historical-places':
                return <HistoricalPlaces/>
            case 'restaurant':
                return <Restaurant/>
            case 'night-clubs':
                return <NightClubs/>
            case 'bars':
                return <Bars/>
            default:
                return ''
        }
    }

    return <section className="text-gray-600 body-font overflow-hidden m-3">
        <ReverseBtn/>
        <div className="container px-5 py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                     src={baseURL + "/media/files/notifications/"+payload.img}></img>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{payload.genres[0].slug}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{payload.name}</h1>
                    <div className="flex mb-4">
                    <RatingStar rating={payload.rate}/>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
                    </div>
                    <p className="leading-relaxed">{payload.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3">Categories</span>
                            {payload.genres.map((genre) => {
                                return <span className="m-1 badge text-white bg-primary">{genre.slug}</span>
                            })}
                        </div>
                    </div>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">{payload.length}</span>
                        <button data-key={payload.key}
                                onClick={(event: { currentTarget: any; }) => onBookmark(event.currentTarget.value, [payload]) === 0 ? '' : handleShow()}
                            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                            { payload.bookmark ? 'remove' : 'add'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {payload.genres.map(genre => slugChooser(genre.slug))}
        <CommentDetails elementId={payload.id} onCommentLike={onCommentLike} id={payload.id} comments={payload.comments} onComment={onComment}/>
        <Alert show={show} handleClose={handleClose} message='Login is required'/>
    </section>
}

export default Details;
