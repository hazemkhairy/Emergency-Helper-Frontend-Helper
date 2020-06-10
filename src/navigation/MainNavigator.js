import { createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import PreConfigScreen from '../screens/PreConfigScreen'
export default MainNavigator = createSwitchNavigator(
    {
        PreConfigScreen,
        AuthNavigator,
        AppNavigator
    },
    {
        initialRouteName: 'PreConfigScreen'
    }
)