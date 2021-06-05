import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Element, Payload, Store} from "../../store/types";
import Section from "../../components/Section/Section";
import {useSelector} from "react-redux";
import {onComment, onCommentLike} from "../../services/userInteraction/comments";
import {onLiked} from "../../services/userInteraction/likes";
import {onBookmark} from "../../services/userInteraction/wishlist";

const Wishlist = () => {
    const baseURL = process.env.REACT_APP_API_URL;
    const wishlist = useSelector((state: Store) => state.wishlist.elements)

    const moviesElements = useSelector((state: Store) => state.movies.elements)

    const getCategories = (movies: Element[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie) => movie.genres))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
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
                img: baseURL + '/media/files/notifications/' + newMovie.img,
                slug: newMovie.key,
                rating: newMovie.rate,
                length: newMovie.length,
                likes: newMovie.likes,
                comments: newMovie.comments,
                liked: newMovie.liked,
                bookmark: newMovie.bookmark
            }
        })
        return <Section onCommentLike={(elementId, commentId) => onCommentLike(elementId, commentId)}
                        onLiked={(event: { currentTarget: any; }) => onLiked(event.currentTarget.value, wishlist)}
                        onComment={(comment, id) => onComment(comment, id, wishlist)}
                        onBookmark={(event: { currentTarget: any; }) => onBookmark(event.currentTarget.value, wishlist)}
                        payload={movies} categories={getCategories(wishlist)}/>
    }

    return <div>
        <Layout>
            {getMovies()}
        </Layout>
    </div>
}

export default Wishlist;