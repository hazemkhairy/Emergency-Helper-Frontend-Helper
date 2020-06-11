import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MenuHeaderButton from '../../components/global/MenuHeaderButton';
const MainScreen = ({ navigation }) => {
    return <View >
       <View style={{marginTop:'20%'}}>
           
        <Button title="Log Out" onPress={
            () => {
                logOut();
                navigation.navigate('PreConfigScreen')
            }
        } />
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