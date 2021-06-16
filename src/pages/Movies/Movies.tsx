import React, {useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import Details from "../../components/Details/Details";
import useFetch from "../../store/useFetch";
import {Spinner} from "react-bootstrap";
import {Element as Payload, Store} from "../../store/types";
import {useDispatch, useSelector} from "react-redux";
import {updateElement} from "../../store/actions/elements";
import {addLikedCommentsToElement} from "../../store/actions/comments";
import {onComment} from "../../services/userInteraction/comments";
import Alert from "../../components/Alert/Alert";

const Movies = () => {
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>();
    const storeMovies = useSelector((state: Store) => state.movies.elements)
    const baseURL = process.env.REACT_APP_API_URL;
    const url = baseURL+`/api/places/view`
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const {status, data, error} = useFetch<Payload[]>(url)

    const onCommentLike = (elementId: number, commentId: number): void => {
        if (data) {
            const element = data[elementId]
            dispatch(addLikedCommentsToElement(element, element.comments[commentId], 'liked'))
            dispatch(updateElement(commentId, 'commentLiked'))
        }
    }
    
    const getMovie = () => {
        if (data) {
            if (storeMovies.find(movie => movie.id === parseInt(id))) {
                return <Details
                    onCommentLike={onCommentLike}
                    payload={storeMovies[parseInt(id) - 1]}
                    onComment={(comment, id) => onComment(comment, id, data) === 0 ? '' : handleShow()}/>
            } else {
                return <Redirect to="/not-found"/>
            }
        } else if (error) {
            return <div>Error when loading data, refresh the page</div>
        } else if (status) {
            return <Spinner animation="border"/>
        }
    }
    
    return <div>
        <Layout>
            {getMovie()}
            <Alert show={show} handleClose={handleClose} message='Login is required'/>
        </Layout>
    </div>
}

export default Movies;