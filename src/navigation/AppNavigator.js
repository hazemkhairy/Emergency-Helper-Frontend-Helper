import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/Map/MainScreen'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen'
import ProfessionInfoScreen from '../screens/Settings/ProfessionInfoScreen'
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen'

export default createStackNavigator(
    {
        MainScreen,
        SettingsScreen,
        AccountInfoScreen,
        ProfessionInfoScreen,
        ChangePasswordScreen,
    }
)