import backendAxios from '../../../services/backendAxios'
import { SignUpUser } from "../../../Modules/User/UserModule";


export const Start_Sign_Up = 'Start_Sign_Up';
export const Success_Sign_Up = 'Success_SIGN_UP';
export const Error_Sign_Up = 'Error_SIGN_UP';

export const Save_Sign_Up_Data = 'Save_Sign_Up_Data';
export const Clear_Sign_UP = 'Clear_Sign_UP'



export const ClearSignUpDataAction = () => {
    return { type: Clear_Sign_UP }
}
export const SaveSignUpDataAction = (signUpData = new SignUpUser()) => {

    return { type: Save_Sign_Up_Data, payload: signUpData }
}

export const signUpAction = (user = new SignUpUser()) => {
    console.log('user = ')
    console.log(user.certificates.base64.length)
    return (dispatch) => {
        dispatch({ type: Start_Sign_Up })

        backendAxios.post('api/Account/Helper/Register', {
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
            certificates: user.certificates.base64,
            phoneNumber: user.phoneNumber,

        }).then(
            (res) => {
                console.log(res)
                dispatch({ type: Success_Sign_Up })
            }
        )
            .catch(
                (err, x) => {
                    console.log(err)
                    setTimeout(
                        () => {

                            dispatch({ type: Error_Sign_Up })
                        }, 2000
                    )
                }
            )


    }
}