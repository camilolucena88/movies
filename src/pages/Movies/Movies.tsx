import React from 'react';
import {useParams} from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import Details from "../../components/Details/Details";
import useFetch from "../../store/useFetch";
import {Spinner} from "react-bootstrap";
import {Element as Payload, Store} from "../../store/types";
import {useSelector} from "react-redux";

const Movies = () => {

    const {id} = useParams<{ id: string }>();
    const storeMovies = useSelector((state: Store) => state.movies.elements)
    const url = `http://localhost:4000/movies?id=`+id

    const {status, data, error} = useFetch<Payload[]>(url)
    
    const onComment = (event: React.FormEvent): void => {
        alert(event.currentTarget)
    }
    
    const getMovie = () => {
        if (data) {
            return <Details payload={storeMovies[parseInt(id)-1]} onComment={(event) => onComment(event)}/>
        } else if (error) {
            return <div>Error when loading data, refresh the page</div>
        } else if (status) {
            return <Spinner animation="border"/>
        }
    }
    
    return <div>
        <Layout>
            {getMovie()}
        </Layout>
    </div>
}

export default Movies;