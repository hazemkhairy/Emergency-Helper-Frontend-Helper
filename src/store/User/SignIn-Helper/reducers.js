import { Start_Sign_In, Failed_Sign_In, Success_Sign_In, Clear_Sign_In_State } from './actions'

const initialState = {
    signInStarted: false,
    error: false,
    success: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Clear_Sign_In_State:
            return { ...initialState }
        case Start_Sign_In:
            return { ...initialState, signInStarted: true };
        case Success_Sign_In:
            return { ...initialState, success: true };
        case Failed_Sign_In:
            return { ...initialState, error: true, };
    }
    return state;
}