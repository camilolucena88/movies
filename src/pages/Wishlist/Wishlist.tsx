import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Element, Payload, Store} from "../../store/types";
import Section from "../../components/Section/Section";
import {useSelector} from "react-redux";

const Wishlist = () => {

    const wishlist = useSelector((state: Store) => state.wishlist.elements)


    const getCategories = (movies: Element[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie) => movie.genres))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }

    const getMovies = () => {
        const movies = wishlist.map((movie): Payload => {
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
            }
        })
        return <Section onBookmark={() => console.log()} onLiked={() => console.log()} onComment={() => console.log()} payload={movies} categories={getCategories(wishlist)}/>
    }
    
    return <div>
        <Layout>
            {getMovies()}
        </Layout>
    </div>
}

export default Wishlist;