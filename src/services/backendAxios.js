import axios from 'axios';
import {setAuthToken} from '../utils/LocalStorage'

axios.interceptors.request.use(
    config => {
        //token ?
        config.baseURL = 'https://emergency-helper.herokuapp.com/api/';
        config.headers['Content-Type'] = 'application/json';
        return config
    }

)
axios.interceptors.response.use(
    (response) => {
        if (response.headers['token'])
        {
            setAuthToken(response.headers['token'])
        }
        return response;
    }
)

export default axios;