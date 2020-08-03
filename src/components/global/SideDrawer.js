import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import { logOut } from '../../utils/Helper';
import SideDrawerProfile from "./SideDrawerProfile";

const SideDrawer = (props) => {

    return (
        <View>
            <SideDrawerProfile />
            <View style={styles.itemsContainer} >
                <DrawerItems {...props} fontSize={12} />
                <View style={{ flexDirection: 'column-reverse' }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        logOut();
                        props.navigation.navigate("Home");
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-log-out" size={20} style={styles.logoutIcon}></Ionicons>
                            <Text style={styles.logoutText} >Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemsContainer: {
        marginLeft: '7%'
    },
    logoutButton: {
        marginLeft: '8%',
        marginTop: Dimensions.get('window').height > 600 ? Dimensions.get('window').height * 0.1 : Dimensions.get('window').height * 0.075
    },
    logoutIcon: {
        color: '#132641',
        marginRight: '2%',
        opacity: 0.8
    },
    logoutText: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        opacity: 0.8
    },
});

export default SideDrawer;