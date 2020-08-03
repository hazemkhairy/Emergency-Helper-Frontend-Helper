import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MenuHeaderButton from '../../components/global/MenuHeaderButton';

import FindRequestButton from '../../components/Request/ViewNearByRequests/FindRequestButton'
import LockdownManager from '../../components/Request/Lockdown/LockdownManager';
const MainScreen = ({ navigation }) => {
    
    return <View style={{ flex: 1 }}>
        <Text>Main Screen</Text>
        <LockdownManager/>
        <Button title="Log Out" onPress={
            () => {
                logOut();
                navigation.navigate('PreConfigScreen')
            }
        } />

        <View style={{ alignItems: 'center', width: '100%', justifyContent: 'flex-end', height: '100%', position: 'absolute' }}>
            <FindRequestButton />
        </View>
    </View>
    

}
MainScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={MenuHeaderButton}   >
                    <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        },

    }
}

export default MainScreen;