import { SignUpUser } from '../../../Modules/User/UserModule'

import { Save_Sign_Up_Data, Clear_Sign_UP } from './actions'

const initialState = {
    user: new SignUpUser()
}

export default (state = initialState, action) => {

    switch (action.type) {
        case Save_Sign_Up_Data:
            const neww = { ...state, user: { ...action.payload } }
            return neww;
        case Clear_Sign_UP:
            return { ...state, user: new SignUpUser() };

    }
    return state;
}
/*
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
}*/