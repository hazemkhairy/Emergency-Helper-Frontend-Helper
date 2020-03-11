import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SignUpScreen from './src/screens/Helper/SignUpScreen';
import SignUp2 from './src/screens/Helper/SignUp2';
import SignInScreen from './src/screens/Helper/SignInScreen'
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import React from 'react'
import store from './src/store/index';

const navigator = createAppContainer(
  createSwitchNavigator({
    Home,
    SignUpScreen,
    SignUp2,
    SignInScreen

  })

)
const App = createAppContainer(navigator);

export default () => 
<Provider store={store}>
  <App />
</Provider>