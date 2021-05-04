import {Movie} from './types'

export const ADD_MOVIE = "ADD_MOVIE"
export const REMOVE_MOVIE = "REMOVE_MOVIE"

export type ActionTypes =
    | { type: typeof ADD_MOVIE; payload: Movie }
    | { type: typeof REMOVE_MOVIE; payload: number }

export const addMovie = (movie: Movie): ActionTypes => ({type: ADD_MOVIE, payload: movie});
export const removeMovie = (id: number): ActionTypes => ({type: REMOVE_MOVIE, payload: id});