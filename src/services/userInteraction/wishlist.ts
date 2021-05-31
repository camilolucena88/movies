import {addToWishlist, removeFromWishlist} from "../../store/actions/wishlist";
import {updateElement} from "../../store/actions/elements";
import userIsLogged from "../auth/userStatus";
import {Element} from "../../store/types";
import store from "../../store/store";
import {COMPLETED, ERROR, LOGIN_REQUIRED} from "./const";
import Bookmark from "../fetch/bookmark";

export const onBookmark = (elementId: number, data: Element[]): number => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        const bookmarkedElement = store.getState().wishlist
        if (element && (bookmarkedElement.elements.some(elementBookmarked => elementBookmarked.id === element.id))) {
            store.dispatch(removeFromWishlist(elementId))
            store.dispatch(updateElement(elementId, 'bookmark'))
            const bookmark = new Bookmark()
            if (bookmark.remove(elementId)) {
                return COMPLETED
            } else {
                return ERROR
            }
        } else if (element) {
            store.dispatch(addToWishlist(element))
            store.dispatch(updateElement(elementId, 'bookmark'))
            const bookmark = new Bookmark()
            if (bookmark.create(elementId)) {
                return COMPLETED
            } else {
                return ERROR
            }
        }
        return ERROR
    } else {
        return ERROR
    }
}

export const getBookmarked = (elementId: number, data: Element[]): number | void => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if (element) {
            store.dispatch(addToWishlist(element))
            store.dispatch(updateElement(elementId, 'bookmark'))
        }
    } else {
        return ERROR
    }
}