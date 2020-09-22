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
import AboutUsScreen from '../screens/AboutUs/AboutUsScreen'
import HistoryScreen from '../screens/HistoryScreen';
import TermsOfUseScreen from '../screens/AboutUs/TermsOfUseScreen';
import NearByRequestsScreen from '../screens/Request/NearByRequestsScreen'
import HelperChat from '../screens/HelperChat'
const ApplicationNav = createStackNavigator(
    {
        MainScreen: {
            screen: MainScreen
        },
        HistoryScreen: {
            screen: HistoryScreen
        }, HistoryScreen: {
            screen: HistoryScreen
        },
        SupportTicketScreen: {
            screen: SupportTicketScreen
        },
        SettingsScreen: {
            screen: SettingsScreen
        },
        AboutUsScreen: {
            screen: AboutUsScreen
        },
        TermsOfUseScreen,
        AccountInfoScreen,
        ProfessionInfoScreen,
        ChangePasswordScreen,
        TicketScreen,
        NearByRequestsScreen,
        HelperChat
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
        SupportTicketScreen: {
            screen: ApplicationNav,
            navigationOptions: {
                drawerLabel: 'Support',
                drawerIcon: <MaterialIcons name="people" size={20} style={{ color: '#132641', opacity: 0.8 }}></MaterialIcons>
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
        contentComponent: props => { return (props.navigation.state.isDrawerOpen) ? <SideDrawer   {...props} onItemPress={({ route, focused }) => { props.navigation.navigate(route) }} /> : null }
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