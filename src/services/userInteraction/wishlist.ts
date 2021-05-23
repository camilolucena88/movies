import {addToWishlist} from "../../store/actions/wishlist";
import {updateElement} from "../../store/actions/elements";
import userIsLogged from "../auth/userStatus";
import {Element} from "../../store/types";
import store from "../../store/store";

export const onBookmark = (elementId: number, data: Element[]): void => {
    if (!userIsLogged()) {
        alert('NEED TO LOGIN')
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if(element){
            store.dispatch(addToWishlist(element))
            store.dispatch(updateElement(elementId, 'bookmark'))
        }
    } else {
        alert('SOMTHING IS WRONG')
    }
}