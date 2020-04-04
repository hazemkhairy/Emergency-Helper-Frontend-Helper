import backendAxios from '../../../services/backendAxios'
import { SignUpUser } from "../../../Modules/User/UserModule";
import { setAuthToken } from '../../../utils/LocalStorage'


export const Start_Sign_Up = 'Start_Sign_Up';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';

export const Save_Sign_Up_Data = 'Save_Sign_Up_Data';

export const Clear_Sign_UP = 'Clear_Sign_UP'
export const Clear_Sign_Up_State = 'Clear_Sign_UP_State'



export const ClearSignUpDataAction = () => {
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
        let obj = {
            name: {
                firstName: user.firstName,
                lastName: user.lastName
            },
            email: user.email,
            password: user.password,
            skills: user.skills,
            categories: [user.categories],
            picture: user.personalPhoto.base64,
            frontID: user.frontID.base64,
            backID: user.backID.base64,
            certificate: user.certificates.base64,
            mobile: user.phoneNumber
        }
        backendAxios.post('Account/Helper/Register',
            obj
        ).then(
            (res) => {
                setAuthToken(res.data.token)
                dispatch({ type: Success_Sign_Up })
            }
        )
            .catch(
                (err) => {
                    setTimeout(
                        () => {

                            dispatch({ type: Error_Sign_Up, payload: err.response.data.message })
                        }, 2000
                    )
                }
            )


    }
}