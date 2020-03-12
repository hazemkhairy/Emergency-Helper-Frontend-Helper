import { Start_Sign_Up, Success_Sign_UP } from './actions'

const initialState = {
    token:'',
    SignUpStarted:false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Start_Sign_Up:
            return { ...state, SignUpStarted : true };
        case Success_Sign_UP:
            return { ...state, token : action.payload.token, SignUpStarted : false };
       
    }
    return state;
}