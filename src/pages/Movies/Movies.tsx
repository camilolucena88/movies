import React from 'react';
import {useParams} from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import Details from "../../components/Details/Details";
import useFetch from "../../store/useFetch";
import {Spinner} from "react-bootstrap";
import {Movie as Payload} from "../../store/types";

const Movies = () => {

    const {id} = useParams<{ id: string }>();

    const url = `http://localhost:4000/movies?id=`+id

    const {status, data, error} = useFetch<Payload[]>(url)
    
    const getMovie = () => {
        if (data) {
            return <Details payload={data[0]}/>
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