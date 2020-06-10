import backendAxios from '../../../services/backendAxios';
import { SignInUser } from "../../../Modules/User/UserModule";

export const Sign_In = 'SIGN_IN';
export const Start_Sign_In = 'Start_SIGN_IN';
export const Success_Sign_In = 'Success_SIGN_IN';
export const Failed_Sign_In = 'Failed_SIGN_IN';
export const Clear_Sign_In_State = 'Clear_Sign_In_State';


export const signInAction = (user = new SignInUser()) => {
    return (dispatch) => {
        dispatch({ type: Start_Sign_In })
        backendAxios.post('Helper/login', {
            email: user.email,
            password: user.password
        })
            .then(res => {
                dispatch({ type: Success_Sign_In })
            })
            .catch(err => {
                dispatch({ type: Failed_Sign_In })
            })
    }
}
export const clearSignInStateAction = () => {
    return { type: Clear_Sign_In_State }
} 