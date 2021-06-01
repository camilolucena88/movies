import ApiService from "./apiService";
import {Comment} from "../../store/types"

class Comments extends ApiService {

    url = 'places/comment/'

    /**
     * POST method to create a like on the backend
     *
     * @param placeId
     * @param description
     */
    create(placeId: number, description: Comment) {
        return this.post(this.url + placeId, description).then(
            res => res
        ).catch(err => console.log(err))
    }

    /**
     * DELETE method to remove a like on the backend
     *
     * @param placeId
     */
    remove(placeId: number) {
        return this.delete(this.url + placeId).then(
            res => res
        ).catch(err => console.log(err))
    }
}

export default Comments