import backendAxios from '../services/backendAxios'
import { clearToken } from './LocalStorage'
import { SignUpUser } from '../Modules/User/UserModule';
export const validateToken = async () => {
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

export const registerHelper = async (user = new SignUpUser()) => {
    let data = new FormData();
    data.append('firstName', user.firstName)
    data.append('lastName', user.lastName)
    data.append('email', user.email)
    data.append('mobile', user.phoneNumber)
    data.append('password', user.password)
    data.append('skills', user.skills)
    data.append('category', user.categories)
    data.append('profilePicture', {
        uri: user.personalPhoto.uri,
        type: 'image/jpeg',
        name: user.personalPhoto.name,
    })
    data.append('frontID', {
        uri: user.frontID.uri,
        type: 'image/jpeg',
        name: user.frontID.name,
    })
    data.append('backID', {
        uri: user.backID.uri,
        type: 'image/jpeg',
        name: user.backID.name,
    })
    data.append('certificate', {
        uri: user.certificates.uri,
        type: 'image/jpeg',
        name: user.certificates.name,
    })
    let res = await backendAxios.post('/Helper/Register', data)
    return res;
}