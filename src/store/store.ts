import {createStore} from 'redux'
import {Movie, Store} from "./types";
import {ActionTypes, ADD_MOVIE, REMOVE_MOVIE} from "./actions";

function wishlistReducer(state: Store = {movies: [], newMovie: null}, action: ActionTypes) {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: addMovie(state.movies, action.payload)
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: removeMovie(state.movies, action.payload)
            }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(wishlistReducer)


// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

const removeMovie = (movies: Movie[], id: number): Movie[] =>
    movies.filter((movie: Movie) => movie.id !== id)

const addMovie = (movies: Movie[], movie: Movie): Movie[] => {
    if (movies.some((oldMovie) => oldMovie.id === movie.id))
        return movies
    return [ ...movies, movie ];
}

export default store;