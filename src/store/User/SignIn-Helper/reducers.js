import { Start_Sign_In, Failed_Sign_In, Success_Sign_In, Clear_Sign_In_State } from './actions'

const initialState = {
    token: '',
    signInStarted: false,
    error: false,
    success: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Clear_Sign_In_State:
            return { ...state, signInStarted: false, error: false, success: false, message: '' }
        case Start_Sign_In:
            return { ...state, signInStarted: true };
        case Success_Sign_In:
            return { ...state, token: action.payload.token, SignInStarted: false, success: true };
        case Failed_Sign_In:
            return { ...state, signInStarted: false, error: true, success: false, message: action.payload.message };
    }
    return state;
}