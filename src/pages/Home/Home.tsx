import React from 'react';
import Section from "../../components/Section/Section";
import Layout from '../../components/Layout/Layout';
import useFetch from "../../store/useFetch";
import {Spinner} from 'react-bootstrap';
import {Element, Payload, Store} from "../../store/types";
import {useSelector} from "react-redux";
import onLiked from "../../services/userInteraction/likes";
import {onComment, onCommentLike} from "../../services/userInteraction/comments";
import {onBookmark} from "../../services/userInteraction/wishlist";

const Home = () => {
    const url = `http://localhost:8000/api/places/view`

    const {status, data, error} = useFetch<Element[]>(url)

    const storeMovies = useSelector((state: Store) => state.movies.elements)

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
            return <Section onCommentLike={(elementId, commentId) => onCommentLike(elementId, commentId, data)}
                            onLiked={(event: { currentTarget: any; }) => onLiked(event.currentTarget.value, data)}
                            onComment={(comment, id) => onComment(comment, id, data)}
                            onBookmark={(event: { currentTarget: any; }) => onBookmark(event.currentTarget.value, data)}
                            payload={movies}
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