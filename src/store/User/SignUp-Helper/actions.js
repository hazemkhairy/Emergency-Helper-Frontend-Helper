import axios from 'axios';
import { SignUpUser } from "../../../Modules/User/UserModule";
import { useEffect } from 'react';

export const Sign_Up = 'Sign_Up';
export const Start_Sign_Up = 'Start_Sign_Up';
export const Success_Sign_UP = 'Success_SIGN_UP';

export const signUpAction = (user = new SignUpUser()) => {

    return (dispatch) => {
        dispatch({ type: Start_Sign_Up })
        axios.post('', {
            firstName:user.firstName,
            lastname:user.lastname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            password:user.password,
            confirmPasswrod:user.password,
            frontID:user.frontID,
            backID:user.backID,
            certificates:user.certificates,
            personalPhoto:user.personalPhoto,
            categories:user.categories,
            skills:user.skills
            
        })
           

    }
}