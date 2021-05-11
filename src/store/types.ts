export interface Element {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: string[];
    rate: string;
    length: string;
    img: string;
    likes: number;
    comments?: CommentType[];
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

export interface Auth {
    status: boolean
}

export interface CommentType {
    id: number,
    comment: string,
    likes: string,
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