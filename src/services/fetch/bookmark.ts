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

export default Bookmark