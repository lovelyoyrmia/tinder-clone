import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-29.herokuapp.com/'
})

export default instance