import backendAxios from '../services/backendAxios'
import { clearToken } from './LocalStorage'
export const validateToken = async () => {
    console.log('will validate')
    try {
        let x = await backendAxios.get('Account/ValidateToken');
        if (x && x.data && x.data.payload && x.data.payload.result) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}
export const logOut = () => {
    clearToken();
}