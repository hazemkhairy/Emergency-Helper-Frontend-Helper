import { createSwitchNavigator } from 'react-navigation';

import SignInScreen from '../screens/Helper/Auth/SignInScreen'
import SignUpScreen from '../screens/Helper/Auth/SignUpScreen'
import SignUp2 from '../screens/Helper/Auth/SignUp2'
import Home from '../screens/Home'
import ForgetPasswordScreen from '../screens/Helper/Auth/ForgetPasswordScreen';

export default AuthNavigator = createSwitchNavigator(
    {
        Home,
        SignUpScreen,
        SignUp2,
        SignInScreen,
        ForgetPasswordScreen,
    }
)