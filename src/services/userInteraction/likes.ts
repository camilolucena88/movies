import {Element} from "../../store/types";
import {addToLikedElements} from "../../store/actions/likes";
import {updateElement} from "../../store/actions/elements";
import userIsLogged from "../auth/userStatus";
import store from "../../store/store";

const onLiked = (elementId: number, data: Element[]): void => {
    if (!userIsLogged()) {
        alert('NEED TO LOGIN')
    } else if (data) {
        const element = data.find(element => elementId == element.id)
        if(element){
            store.dispatch(addToLikedElements(element))
            store.dispatch(updateElement(elementId, 'liked'))
        }
    } else {
        alert('SOMTHING IS WRONG')
    }
}

export default onLiked;