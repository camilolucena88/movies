export interface Movie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: string[];
    rate: string;
    length: string;
    img: string;
}

export interface Store {
    movies: Movie[];
    newMovie: Movie | null;
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
}