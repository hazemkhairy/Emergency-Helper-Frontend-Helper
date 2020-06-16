import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/Map/MainScreen'
import NearByRequestsScreen from '../screens/Request/NearByRequestsScreen'
export default createStackNavigator(
    {
        MainScreen,
        NearByRequestsScreen
    }
)