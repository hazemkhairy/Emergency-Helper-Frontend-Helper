import { Provider } from 'react-redux';
import React from 'react'
import store from './src/store/index';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PostsScreen from './src/screens/PostsScreen';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Posts: PostsScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'EMERGENCY HELPER'
  }
});

const App = createAppContainer(navigator);

export default () => <Provider store={store}>
  <App />
</Provider>