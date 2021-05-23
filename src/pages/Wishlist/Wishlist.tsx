import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Element, Payload, Store} from "../../store/types";
import Section from "../../components/Section/Section";
import {useDispatch, useSelector} from "react-redux";
import {
    addCommentToElement,
    addToLikedComments,
    addToLikedElements,
    addToWishlist,
    updateElement
} from "../../store/actions/elements";

const Wishlist = () => {
    const dispatch = useDispatch()

    const wishlist = useSelector((state: Store) => state.wishlist.elements)

    const moviesElements = useSelector((state: Store) => state.movies.elements)

    const getCategories = (movies: Element[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie) => movie.genres))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }

    const onLiked = (event: { currentTarget: any; }): void => {
        if (wishlist) {
            dispatch(addToLikedElements(wishlist[event.currentTarget.value]))
            dispatch(updateElement(event.currentTarget.value, 'liked'))
        }
    }

    const onCommentLike = (elementId: number, commentId: number): void => {
        if (wishlist) {
            const element = wishlist[elementId - 1]
            dispatch(addToLikedComments(element, element.comments[commentId - 1]))
        }
    }

    const onBookmark = (event: { currentTarget: any; }): void => {
        if (wishlist) {
            dispatch(addToWishlist(wishlist[event.currentTarget.value - 1]))
            dispatch(updateElement(event.currentTarget.value, 'bookmark'))
        }
    }

    const onComment = (comment: string, id: number): void => {
        dispatch(addCommentToElement(comment, id))
    }

    const getMovies = () => {
        const movies = wishlist.map((movie): Payload => {
            let newMovie = moviesElements[movie.id-1]
            return {
                id: newMovie.id,
                url: '/movies/' + newMovie.id,
                title: newMovie.name,
                type: [],
                message: newMovie.description,
                img: 'http://localhost:8000/media/files/notifications/' + newMovie.img,
                slug: newMovie.key,
                rating: newMovie.rate,
                length: newMovie.length,
                likes: newMovie.likes,
                comments: newMovie.comments,
                liked: newMovie.liked,
                bookmark: newMovie.bookmark
            }
        })
        return <Section onCommentLike={onCommentLike} onBookmark={onBookmark} onLiked={onLiked} onComment={onComment}
                        payload={movies} categories={getCategories(wishlist)}/>
    }

    return <div>
        <Layout>
            {getMovies()}
        </Layout>
    </div>
}

export default Wishlist;