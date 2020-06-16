import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/Map/MainScreen'
import HistoryScreen from '../screens/HistoryScreen';
import SupportTicketScreen from '../screens/SupportTicketScreen';
import TicketScreen from '../screens/TicketScreen'

export default createStackNavigator(
    {
        MainScreen,
        HistoryScreen,
        SupportTicketScreen,
        TicketScreen
    }
)