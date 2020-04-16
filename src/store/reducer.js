import { combineReducers } from 'redux'
import signUpReducer from '../store/User/SignUp-Helper/reducers'
import signInReducer from '../store/User/SignIn-Helper/reducers'


export default rootReducer = combineReducers({ signUpReducer, signInReducer })