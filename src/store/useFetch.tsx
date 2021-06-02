import {useEffect, useReducer, useRef} from 'react'
import axios, {AxiosRequestConfig} from 'axios'
import {useDispatch} from "react-redux";
import {addElement} from "./actions/elements";
import {Element} from "./types";
import store from "./store";
import {addToWishlist} from "./actions/wishlist";
import {addToLikedElements} from "./actions/likes";
import userIsLogged from "../services/auth/userStatus";

// State & hook output
interface State<T> {
    status: 'init' | 'fetching' | 'error' | 'fetched'
    data?: T
    error?: string
}

interface Cache<T> {
    [url: string]: T
}

// discriminated union type
type Action<T> =
    | { type: 'request' }
    | { type: 'success'; payload: T }
    | { type: 'failure'; payload: string }

function useFetch<T = unknown>(
    url?: string,
    options?: AxiosRequestConfig,
): State<T> {
    const cache = useRef<Cache<T>>({})
    const cancelRequest = useRef<boolean>(false)

    const initialState: State<T> = {
        status: 'init',
        error: undefined,
        data: undefined,
    }
    
    const dispatch = useDispatch()

    // Keep state logic separated
    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case 'request':
                return {...initialState, status: 'fetching'}
            case 'success':
                return {...initialState, status: 'fetched', data: action.payload}
            case 'failure':
                return {...initialState, status: 'error', error: action.payload}
            default:
                return state
        }
    }

    const [state, setState] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        if (!url) {
            return
        }

        const fetchData = async () => {
            setState({type: 'request'})
            if (cache.current[url]) {
                setState({type: 'success', payload: cache.current[url]})
            } else {
                try {
                    const response = await axios(url, options)
                    cache.current[url] = response.data

                    if (cancelRequest.current) return
                    response.data.forEach((element:Element) => {
                        dispatch(addElement(element))
                        if(userIsLogged()) {
                            if (element.liked) {
                                dispatch(addToLikedElements(element))
                            }
                            if (element.bookmark) {
                                dispatch(addToWishlist(element))
                            }
                        }
                    })
                    setState({type: 'success', payload: response.data})
                } catch (error) {
                    if (cancelRequest.current) return

                    setState({type: 'failure', payload: error.message})
                }
            }
        }

        fetchData().catch(e => console.log(e))

        return () => {
            cancelRequest.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return state
}

export default useFetch
