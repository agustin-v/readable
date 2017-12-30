import axios from 'axios'
import utils from '../utils/api'

class PostsApi {
    static authorizationHeaders(){
        return {Authorization: 1234565432}
    }

    static getAll(){
        const url = `${process.env.REACT_APP_BASE_URL}/posts`
        return axios(
            {
                headers: this.authorizationHeaders(),
                method: 'get',
                url:url
            }
        )
        .then((response) => utils.checkStatus(response))
        .then((response) => utils.parseJSON(response))
        .catch((error) => {
            throw error
        })
    }

    static getCategory(category){
        const url = `${process.env.REACT_APP_BASE_URL}/${category}/posts`

        return axios(
            {
                headers: this.authorizationHeaders(),
                method: 'get',
                url:url
            }
        )
        .then((response) => utils.checkStatus(response))
        .then((response) => utils.parseJSON(response))
        .catch((error) => {
            throw error
        })
    }

    static getOne(id){
        const url = `${process.env.REACT_APP_BASE_URL}/posts/${id}`

        return axios(
            {
                headers: this.authorizationHeaders(),
                method: 'get',
                url:url
            }
        )
        .then((response) => utils.checkStatus(response))
        .then((response) => utils.parseJSON(response))
        .catch((error) => {
            throw error
        })
    }
}



export default PostsApi