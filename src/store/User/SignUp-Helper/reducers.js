import { SignUpUser } from '../../../Modules/User/UserModule'

import { Save_Sign_Up_Data, Clear_Sign_UP, Start_Sign_Up, Error_Sign_Up, Success_Sign_Up, Clear_Sign_Up_State } from './actions'

const initialState = {
    user: new SignUpUser(),
    requestState: {
        sendingSignUpRequest: false,
        errorSignUpRequest: false,
        successSignUpRequest: false,
        errorMessage: ''
    }

}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case Save_Sign_Up_Data:
            const neww = { ...state, user: { ...action.payload } }
            return neww;
        case Clear_Sign_UP:
            return { ...initialState };
        case Start_Sign_Up:
            return {
                ...state,
                requestState: {
                    sendingSignUpRequest: true,
                    successSignUpRequest: false,
                    errorSignUpRequest: false,
                    errorMessage: ''
                }
            };
        case Error_Sign_Up:
            return {
                ...state,
                requestState: {
                    sendingSignUpRequest: false,
                    successSignUpRequest: false,
                    errorSignUpRequest: true,
                    errorMessage: action.payload
                }
            };
        case Success_Sign_Up:
            return {
                ...state,
                requestState: {
                    sendingSignUpRequest: false,
                    successSignUpRequest: true,
                    errorSignUpRequest: false,
                    errorMessage: ''
                }
            };
        case Clear_Sign_Up_State:
            return {
                ...state,
                requestState: {
                    sendingSignUpRequest: false,
                    successSignUpRequest: false,
                    errorSignUpRequest: false,
                    errorMessage: ''
                }
            }

    }
    return state;
}