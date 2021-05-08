import React from 'react';
import Section from "../../components/Section/Section";
import Layout from '../../components/Layout/Layout';
import useFetch from "../../store/useFetch";
import { Spinner } from 'react-bootstrap';
import {Element, Payload} from "../../store/types";

const Home = () => {
    
    const url = `http://localhost:4000/movies`
    
    const {status, data, error} = useFetch<Element[]>(url)
    
    const getCategories = (movies: Payload[]) => {
        let newCategories = Array.prototype.concat.apply([], movies.map((movie) => movie.type))
        return newCategories.filter((item, pos) => newCategories.indexOf(item) === pos)
    }
    
    const getMovies = () => {
        if (data) {
            const movies = data.map((movie): Payload => {
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
            return <Section payload={movies} categories={getCategories(movies)}/>
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