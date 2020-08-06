import React from 'react';
import { View } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MenuHeaderButton from '../../components/global/MenuHeaderButton';
import FindRequestButton from '../../components/Request/ViewNearByRequests/FindRequestButton'
import LockdownManager from '../../components/Request/Lockdown/LockdownManager';
import UserLocationMapDisplay from '../../components/Map/UserLocationMapDisplay';
const MainScreen = ({ navigation }) => {

    return <View style={{ flex: 1 }}>
        <LockdownManager />
        {/* <UserLocationMapDisplay/> */}
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