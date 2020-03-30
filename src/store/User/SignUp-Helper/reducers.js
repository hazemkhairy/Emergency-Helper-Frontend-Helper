import { SignUpUser } from '../../../Modules/User/UserModule'

import { Save_Sign_Up_Data, Clear_Sign_UP, Start_Sign_Up,Error_Sign_Up,Success_Sign_Up } from './actions'

const initialState = {
    user: new SignUpUser(),
    sendingSignUpRequest: false,
    errorSignUpRequest: false,
    successSignUpRequest: false,

}

export default (state = initialState, action) => {

    switch (action.type) {
        case Save_Sign_Up_Data:
            const neww = { ...state, user: { ...action.payload } }
            return neww;
        case Clear_Sign_UP:
            return { ...state, user: new SignUpUser() };
        case Start_Sign_Up:
            return { ...state, sendingSignUpRequest: true, successSignUpRequest: false, errorSignUpRequest: false };
        case Error_Sign_Up:
            return { ...state, sendingSignUpRequest: false, errorSignUpRequest: true };
        case Success_Sign_Up:
            return { ...state, sendingSignUpRequest: false, successSignUpRequest: true };

    }
    return state;
}