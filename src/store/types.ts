import store from "./store";

export interface Genres {
    id: number
    slug: string
}

export interface UserCredentials {
    username: string,
    password: string,
}

export interface Element {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: Genres[];
    rate: string;
    length: string;
    img: string;
    thumbnail: string;
    likes: number;
    comments: CommentType[];
    liked?: boolean;
    bookmark?: boolean;
}

export interface Payload {
    id: number;
    url: string;
    title: string;
    type: string[];
    message: string;
    img: string;
    thumbnail: string;
    slug?: string;
    rating?: string;
    length?: string;
}

export interface Store {
    token: AuthStore
    movies: MovieStore;
    wishlist: WishlistStore;
    user: loggedUserStore;
}

export interface MovieStore {
    elements: Element[];
}

export interface WishlistStore {
    elements: Element[];
}

export interface LikesStore {
    elements: Element[];
}

export interface AuthStore {
    access_token: string
}

export interface loggedUserStore {
    username: string
}

export interface CommentLikedStore {
    placeId: number
    commentsLiked: CommentType[]
}

export interface CommentType {
    id: number,
    placeId: number,
    comment: string,
    likes: number,
    liked: boolean,
    timestamp: string
    replies: number[]
}

export interface Comment {
    description: string
}

export interface Payload {
    id: number;
    url: string;
    title: string;
    type: string[];
    message: string;
    img: string;
    slug?: string;
    rating?: string;
    length?: string;
    likes?: number;
    comments?: CommentType[];
    liked?: boolean;
    bookmark?: boolean;
}

export interface GoogleMapCoordinates {
    latitude: number;
    longitude: number;
}

export type AppDispatch = typeof store.dispatch

