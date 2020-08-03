import { combineReducers } from 'redux'
import signUpReducer from '../store/User/SignUp-Helper/reducers'
import signInReducer from '../store/User/SignIn-Helper/reducers'
import fillReceiptReducer from './Request/FillReceipt/reducer'


export default rootReducer = combineReducers({ signUpReducer, signInReducer, fillReceiptReducer })