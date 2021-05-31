import {Element} from "../../store/types";
import {addToLikedElements, removeFromLikedElements} from "../../store/actions/likes";
import {updateElement} from "../../store/actions/elements";
import userIsLogged from "../auth/userStatus";
import store from "../../store/store";
import {COMPLETED, ERROR, LOGIN_REQUIRED} from "./const";
import Likes from "../fetch/likes";

const addLiked = (element:Element, elementId:number) => {
    store.dispatch(addToLikedElements(element))
    store.dispatch(updateElement(elementId, 'liked'))
    const like = new Likes()
    if (like.create(elementId)) {
        return COMPLETED
    } else {
        return ERROR
    }
}

const removeLiked = (element:Element, elementId:number) => {
    store.dispatch(removeFromLikedElements(element.id))
    store.dispatch(updateElement(elementId, 'liked'))
    const like = new Likes()
    if (like.remove(elementId)) {
        return COMPLETED
    } else {
        return ERROR
    }
}

export const onLiked = (elementId: number, data: Element[]): number | void => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const likedElement = store.getState().liked
        const element = data.find(element => elementId == element.id)
        if (element && (likedElement.elements.some(elementLiked => elementLiked.id === element.id))) {
            return removeLiked(element, elementId)
        } else if(element) {
            return addLiked(element, elementId)
        }
    } else {
        return ERROR
    }
}

export const getLiked = (elementId: number, data: Element[]): number | void => {
    if (!userIsLogged()) {
        return LOGIN_REQUIRED
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if (element) {
            store.dispatch(addToLikedElements(element))
            store.dispatch(updateElement(elementId, 'setLiked'))
        }
    } else {
        return ERROR
    }
}


