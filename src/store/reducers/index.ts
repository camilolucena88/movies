import elementsReducer from "./elements";
import {combineReducers} from "redux";
import wishlistReducer from "./wishlist";
import likedReducer from "./likes";

const allReducers = combineReducers({
    movies: elementsReducer,
    wishlist: wishlistReducer,
    liked: likedReducer,
})

export default allReducers;