import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignUpScreen from './src/screens/Helper/Auth/SignUpScreen';
import SignUp2 from './src/screens/Helper/Auth/SignUp2';
import SignInScreen from './src/screens/Helper/Auth/SignInScreen';
import AuthHeader from './src/screens/Helper/Auth/AuthHeader';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import React from 'react'
import store from './src/store/index';
import IndexScreen from './src/screens/IndexScreen';
const navigator = createAppContainer(
  createSwitchNavigator({
    IndexScreen,
    Home,
    SignUpScreen,
    SignUp2,
    SignInScreen,
    AuthHeader
    

  })

)
const App = createAppContainer(navigator);

export default () => 
<Provider store={store}>
  <App />
</Provider>