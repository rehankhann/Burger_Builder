import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-react-app-37a33.firebaseio.com/'
});

export default instance;