import { combineReducers } from 'redux'
import postsReducer from './Posts/reducer'
import userReducer from '../store/User/SignUp-Helper/reducers'
export default rootReducer = combineReducers({ postsReducer , userReducer })