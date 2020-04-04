import backendAxios from '../services/backendAxios'
import { clearToken } from './LocalStorage'
export const validateToken = async () => {
    try {
        let x = await backendAxios.get('Account/ValidateToken');
        if (x) {
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