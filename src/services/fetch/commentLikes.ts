import ApiService from "./apiService";

class CommentLikes extends ApiService {

    url = 'places/comment/'

    /**
     * POST method to create a like on the backend
     *
     * @param placeId
     * @param commentId
     */
    create(placeId: number, commentId: number) {
        return this.post(this.url + placeId + '/like/' + commentId).then(
            res => res
        ).catch(err => console.log(err))
    }

    /**
     * DELETE method to remove a like on the backend
     *
     * @param placeId
     * @param commentId
     */
    remove(placeId: number, commentId: number) {
        return this.delete(this.url + placeId + '/like/' + commentId).then(
            res => res
        ).catch(err => console.log(err))
    }
}

export default CommentLikes