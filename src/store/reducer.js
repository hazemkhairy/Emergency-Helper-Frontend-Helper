import { combineReducers } from 'redux'
import postsReducer from './Posts/reducer'
import signUpReducer from '../store/User/SignUp-Helper/reducers'


export default rootReducer = combineReducers({ postsReducer , signUpReducer })