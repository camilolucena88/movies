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

    const access_token = useSelector((state: Store) => state.token.access_token)

    const url = `http://localhost:8000/api/places/view`

    const {status, data, error} = useFetch<Element[]>(url)

    const storeMovies = useSelector((state: Store) => state.movies.elements)

    const onLiked = (event: { currentTarget: any; }): void => {
        if (access_token === '') {
            alert('NEED TO LOGIN')
        } else if (data) {
            dispatch(addToLikedElements(data[event.currentTarget.value]))
            dispatch(updateElement(event.currentTarget.value, 'liked'))
        } else {
            alert('SOMTHING IS WRONG')
        }
    }

    const onCommentLike = (elementId: number, commentId: number): void => {
        if (access_token === '') {
            alert('NEED TO LOGIN')
        } else if (data) {
            const element = data[elementId - 1]
            dispatch(addToLikedComments(element, element.comments[commentId - 1]))
        } else {
            alert('SOMTHING IS WRONG')
        }
    }

    const onComment = (comment : string, id: number): void => {
        if (access_token === '') {
            alert('NEED TO LOGIN')
        } else if (data) {
            dispatch(addCommentToElement(comment, id))
        } else {
            alert('SOMTHING IS WRONG')
        }
    }

    const onBookmark = (event: { currentTarget: any; }): void => {
        if (access_token === '') {
            alert('NEED TO LOGIN')
        } else if (data) {
            dispatch(addToWishlist(data[event.currentTarget.value - 1]))
            dispatch(updateElement(event.currentTarget.value, 'bookmark'))
        } else {
            alert('SOMTHING IS WRONG')
        }
    }

    const getCategories = (movies: Payload[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie: Payload) => movie.type))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }

    const getMovies = () => {
        if (data) {
            const movies = storeMovies.map((movie): Payload => {
                return {
                    id: movie.id,
                    url: '/movies/' + movie.id,
                    title: movie.name,
                    type: movie.genres.map(genre => genre.slug),
                    message: movie.description,
                    img: 'http://localhost:8000/media/files/notifications/' + movie.img,
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