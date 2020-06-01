import backendAxios from '../../../services/backendAxios'
import { SignUpUser } from "../../../Modules/User/UserModule";

import { registerHelper } from '../../../utils/Helper';

export const Start_Sign_Up = 'Start_Sign_Up';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';

export const Save_Sign_Up_Data = 'Save_Sign_Up_Data';

export const Clear_Sign_UP = 'Clear_Sign_UP'
export const Clear_Sign_Up_State = 'Clear_Sign_UP_State'



export const ClearSignUpAction = () => {
    return { type: Clear_Sign_UP }
}
export const ClearSignUpStateAction = () => {

    return { type: Clear_Sign_Up_State }
}
export const SaveSignUpDataAction = (signUpData = new SignUpUser()) => {

    return { type: Save_Sign_Up_Data, payload: signUpData }
}

export const signUpAction = (user = new SignUpUser()) => {

    return (dispatch) => {

        dispatch({ type: Start_Sign_Up })




        registerHelper(user).then(
            (res) => {
                dispatch({ type: Success_Sign_Up })
            }
        )
            .catch(
                (err) => {
                    console.log(err)
                    
                    if(err.response.data)
                    {
                        console.log(err.response.data)
                    }
                    if(err.response.data.message)
                    {
                        console.log(err.response.data.message)
                    }
                    dispatch({ type: Error_Sign_Up, payload: 'err.response.data.message' })
                }
            )
    }
}