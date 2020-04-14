import axios from 'axios';
import { setAuthToken, getAuthToken } from '../utils/LocalStorage'
const copy = axios.create({});

copy.interceptors.request.use(
    async (config) => {
        //token ?
        config.baseURL = 'https://emergency-helper.herokuapp.com/api/';
        let token = await getAuthToken();
        if (token)
            config.headers['Authorization'] = 'Bearer ' +token
        config.headers['Content-Type'] = 'application/json';
        return config
    }
)
copy.interceptors.response.use(
    async (response) => {
        if (response.headers['token']) {
            let res = await setAuthToken(response.headers['token'])
        }
        return response;
    }
)

export default copy;