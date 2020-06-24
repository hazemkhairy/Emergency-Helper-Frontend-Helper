import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/Map/MainScreen';
import NearByRequestsScreen from '../screens/Request/NearByRequestsScreen';

import TestFillReceipt from '../screens/Request/TestFillReceipt'
export default createStackNavigator(
    {
        MainScreen,
        NearByRequestsScreen,
        TestFillReceipt
    }
)