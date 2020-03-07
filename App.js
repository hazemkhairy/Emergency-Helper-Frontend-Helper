import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignUpScreen from './src/screens/SignUpScreen';
import SignUp2 from './src/screens/SignUp2';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    SignUpScreen,
    SignUp2,
    Login

  })

);