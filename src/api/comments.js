import axios from 'axios'
import utils from '../utils/api'

class CommentsApi {
    static authorizationHeaders(){
        return {Authorization: 1234565432}
    }

    static getCurrentComments(id){
        const url = `${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`
        return axios(
            {
                headers: this.authorizationHeaders(),
                method: 'get',
                url: url
            }
        )
        .then((response) => utils.checkStatus(response))
        .then((response) => utils.parseJSON(response))
        .catch((error) => {
            throw error
        })
    }
}

export default CommentsApi
