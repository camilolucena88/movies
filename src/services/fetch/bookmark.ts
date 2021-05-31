import ApiService from "./apiService";

class Bookmark extends ApiService {

    url = 'places/bookmark/'

    /**
     * POST method to create a like on the backend
     *
     * @param placeId
     */
    create(placeId: number) {
        return this.post(this.url + placeId).then(
            res => res
        )
    }

    /**
     * DELETE method to remove a like on the backend
     *
     * @param placeId
     */
    remove(placeId: number) {
        return this.delete(this.url + placeId).then(
            res => res
        )
    }
}

export default Bookmark