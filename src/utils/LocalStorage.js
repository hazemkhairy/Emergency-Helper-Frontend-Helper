import { AsyncStorage } from 'react-native'
export const getAuthToken = () => {
    return AsyncStorage.getItem('token');
}
export const setAuthToken = (value) => {
    AsyncStorage.getItem('token', value);
}
export const clearToken = () => {
    AsyncStorage.removeItem('token');
}
export const setInLocalStorage = (key, value) => {
    AsyncStorage.getItem(key, value);
}
export const getFromLocalStorage = (key) => {
    return AsyncStorage.getItem(key);
}
export const clearFromLocalStorage = (key) => {
    AsyncStorage.removeItem(key);
}
export const clearAll = () => {
    AsyncStorage.clear()
}