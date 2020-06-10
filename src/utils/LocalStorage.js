import * as SecureStore from 'expo-secure-store'

export const token = 'AUTH_TOKEN';

export const getAuthToken = async () => {
    try {
        const value = await SecureStore.getItemAsync(token);
        if (value) {
            return value
        }
        return '';
    } 
    catch (error) {
        return error;
    }
}
export const setAuthToken = async (value) => {
    const res = await SecureStore.setItemAsync(token, value);
    return res;
}
export const clearToken = async () => {
    const res = await SecureStore.deleteItemAsync(token);
    return res;
}


export const getFromLocalStorage = async (key) => {
    const res = await SecureStore.getItemAsync(key);
    return res;
}
export const setInLocalStorage = async (key, value) => {
    const res = await SecureStore.setItemAsync(key, value);
    return res;
}
export const clearFromLocalStorage = async (key) => {
    const res = await SecureStore.deleteItemAsync(key);
    return res;
}