export interface Element {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: string[];
    rate: string;
    length: string;
    img: string;
    likes?: number;
    comments?: CommentType[];
    liked?: boolean;
    bookmark?: boolean;
}

export interface Store {
    elements: Element[];
    newElement: Element | null;
}

export interface CommentType {
    id: number,
    comment: string
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