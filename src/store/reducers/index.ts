import elementsReducer from "./elements";
import {applyMiddleware, combineReducers} from "redux";
import wishlistReducer from "./wishlist";
import likedReducer from "./likes";
import thunk from "redux-thunk";
import authReducer from "./auth";
import loggedUserReducer from "./loggedUser";


const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

const allReducers = combineReducers({
    movies: elementsReducer,
    wishlist: wishlistReducer,
    liked: likedReducer,
    token: authReducer,
    user: loggedUserReducer,
    middleware: applyMiddleware(...middleware),
})

export default allReducers;