import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import SideDrawer from '../components/global/SideDrawer';
import MainScreen from '../screens/Map/MainScreen'
import SupportTicketScreen from '../screens/SupportTicketScreen';
import TicketScreen from '../screens/TicketScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen'
import AccountInfoScreen from '../screens/Settings/AccountInfoScreen'
import ProfessionInfoScreen from '../screens/Settings/ProfessionInfoScreen'
import ChangePasswordScreen from '../screens/Settings/ChangePasswordScreen'
import { Dimensions } from 'react-native';
import WalletScreen from '../screens/WalletScreen'
import AboutUsScreen from '../screens/AboutUs/AboutUsScreen'
import HistoryScreen from '../screens/HistoryScreen';
import SupportScreen from '../screens/Support';
import TermsOfUseScreen from '../screens/AboutUs/TermsOfUseScreen'
const ApplicationNav=  createStackNavigator(
    {
        MainScreen:{
            screen :MainScreen
        },
        HistoryScreen:{
            screen:HistoryScreen
        }, HistoryScreen:{
            screen:HistoryScreen
        },
        SupportScreen:{
            screen:SupportScreen
        },
        WalletScreen:{
            screen:WalletScreen
        },
        SettingsScreen:{
            screen:SettingsScreen
        },
        AboutUsScreen:{
            screen:AboutUsScreen
        },
        TermsOfUseScreen
    }
)
const MainNav = createDrawerNavigator(
    {
        MainScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: <Feather name="home" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>,

            }
        },
        HistoryScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'History',
                drawerIcon: <Feather name="calendar" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }

        },
        SupportScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Support',
                drawerIcon: <MaterialIcons name="people" size={20} style={{ color: '#132641', opacity: 0.8 }}></MaterialIcons>
            }

        },
        WalletScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Wallet',
                drawerIcon: <FontAwesome name="money" size={20} style={{ color: '#132641', opacity: 0.8 }}></FontAwesome>
            }
        },
        SettingsScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: <Feather name="settings" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }

        },
        AboutUsScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: <Feather name="info" size={20} style={{ color: '#132641', opacity: 0.8 }}></Feather>
            }
        },
       
       
    },
  

    {
        contentComponent: props => <SideDrawer   {...props} onItemPress={({ route, focused }) => { props.navigation.navigate(route) }} />
        , contentOptions: {
            activeTintColor: '',
            activeBackgroundColor: 'Transparent',
            labelStyle: {
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                color: '#132641',
                marginLeft: -7,
                fontSize: 18,
                marginVertical: Dimensions.get('window').height > 600 ? 18 : 13
            }
        },
        drawerWidth: '77%'
    }
);
export default createAppContainer(MainNav);