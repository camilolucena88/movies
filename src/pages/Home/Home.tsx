import React, {useState} from 'react';
import Section from "../../components/Section/Section";
import Layout from '../../components/Layout/Layout';
import useFetch from "../../store/useFetch";
import {Spinner} from 'react-bootstrap';
import {Element, Payload, Store} from "../../store/types";
import {useSelector} from "react-redux";
import {onLiked} from "../../services/userInteraction/likes";
import {onComment, onCommentLike} from "../../services/userInteraction/comments";
import {onBookmark} from "../../services/userInteraction/wishlist";
import Alert from "../../components/Alert/Alert";

const Home = () => {
    const baseURL = process.env.REACT_APP_API_URL;

    const url = baseURL + `/api/places/view`

    const {status, data, error} = useFetch<Element[]>(url)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const storeListings = useSelector((state: Store) => state.movies.elements)

    const getCategories = (listings: Payload[]) => {
        let newCategories = Array.prototype.concat.apply([], listings.map((movie: Payload) => movie.type))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }

    const getListings = () => {
        if (data) {
            const listings = storeListings.map((listing): Payload => {
                return {
                    id: listing.id,
                    url: '/movies/' + listing.id,
                    title: listing.name,
                    type: listing.genres.map(genre => genre.slug),
                    message: listing.description,
                    img: baseURL + 'media/original_images/' + listing.img,
                    thumbnail: baseURL + listing.thumbnail,
                    slug: listing.key,
                    rating: listing.rate,
                    length: listing.length,
                    likes: listing.likes,
                    comments: listing.comments,
                    liked: listing.liked,
                    bookmark: listing.bookmark
                }
            })
            return <Section
                onCommentLike={(elementId, commentId) => onCommentLike(elementId, commentId) === 0 ? '' : handleShow()}
                onLiked={(event: { currentTarget: any; }) => onLiked(event.currentTarget.value, data) === 0 ? '' : handleShow()}
                onComment={(comment, id) => onComment(comment, id, data) === 0 ? '' : handleShow()}
                onBookmark={(event: { currentTarget: any; }) => onBookmark(event.currentTarget.value, data) === 0 ? '' : handleShow()}
                payload={listings}
                categories={getCategories(listings)}/>
        } else if (error) {
            return <div>Error when loading data, refresh the page</div>
        } else if (status) {
            return <Spinner animation="border"/>
        }

    }

    return <div>
        <Layout>
            {getListings()}
            <Alert show={show} handleClose={handleClose} message='Login is required'/>
        </Layout>
    </div>
}

export default Home;