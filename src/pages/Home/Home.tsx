import React from 'react';
import Section from "../../components/Section/Section";
import Layout from '../../components/Layout/Layout';
import useFetch from "../../store/useFetch";
import {Spinner} from 'react-bootstrap';
import {Element, Payload, Store} from "../../store/types";
import {useDispatch, useSelector} from "react-redux";
import {
    addCommentToElement,
    addToLikedComments,
    addToLikedElements,
    addToWishlist,
    updateElement
} from "../../store/actions/elements";

const Home = () => {
    const dispatch = useDispatch()

    const url = `http://localhost:4000/movies`

    const {status, data, error} = useFetch<Element[]>(url)

    const storeMovies = useSelector((state: Store) => state.movies.elements)

    const onLiked = (event: { currentTarget: any; }): void => {
        if (data) {
            dispatch(addToLikedElements(data[event.currentTarget.value]))
            dispatch(updateElement(event.currentTarget.value, 'liked'))
        }
    }

    const onCommentLike = (elementId: number, commentId: number): void => {
        if (data) {
            const element = data[elementId-1]
            dispatch(addToLikedComments(element, element.comments[commentId-1]))
        }
    }

    const onComment = (comment : string, id: number): void => {
        dispatch(addCommentToElement(comment, id))
    }

    const onBookmark = (event: { currentTarget: any; }): void => {
        if (data) {
            dispatch(addToWishlist(data[event.currentTarget.value-1]))
            dispatch(updateElement(event.currentTarget.value, 'bookmark'))
        }
    }

    const getCategories = (movies: Payload[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie) => movie.type))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }

    const getMovies = () => {
        if (data) {
            const movies = storeMovies.map((movie): Payload => {
                return {
                    id: movie.id,
                    url: '/movies/' + movie.id,
                    title: movie.name,
                    type: movie.genres,
                    message: movie.description,
                    img: '/assets/images/movie-covers/' + movie.img,
                    slug: movie.key,
                    rating: movie.rate,
                    length: movie.length,
                    likes: movie.likes,
                    comments: movie.comments,
                    liked: movie.liked,
                    bookmark: movie.bookmark
                }
            })
            return <Section onCommentLike={onCommentLike} onLiked={onLiked} onComment={onComment} onBookmark={onBookmark} payload={movies}
                            categories={getCategories(movies)}/>
        } else if (error) {
            return <div>Error when loading data, refresh the page</div>
        } else if (status) {
            return <Spinner animation="border"/>
        }

    }

    return <div>
        <Layout>
            {getMovies()}
        </Layout>
    </div>
}

export default Home;