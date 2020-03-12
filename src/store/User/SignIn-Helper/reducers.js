import { Start_Sign_In, Failed_Sign_In, Success_Sign_In } from './actions'

const initialState = {
    token:'',
    SignInStarted:false,
    error : false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_In:
            return { ...state, SignInStarted : true };
        case Success_Sign_In:
            return { ...state, token : action.payload.token, SignInStarted : false };
        case Failed_Sign_In:
            return { ...state, SignInStarted : false, error : true };
    }
    return state;
}