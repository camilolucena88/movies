import store from "./store";

export interface Genres {
    id: number
    slug: string
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
    likes: number;
    comments: CommentType[];
    liked?: boolean;
    bookmark?: boolean;
}

export interface Store {
    movies: MovieStore;
    wishlist: WishlistStore;
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

export interface CommentStore {
    elements: Element[];
}

export interface AuthStore {
    access_token: string
}

export interface CommentType {
    id: number,
    comment: string,
    likes: number,
    liked: boolean,
    timestamp: string
    replies: number[]
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

export type AppDispatch = typeof store.dispatch

