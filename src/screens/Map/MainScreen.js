import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import FindRequestButton from '../../components/Request/ViewNearByRequests/FindRequestButton'
const MainScreen = ({ navigation }) => {
    return <View style={{ flex: 1 }}>
        <Text>Main Screen</Text>
        <Button title="Log Out" onPress={
            () => {
                logOut();
                navigation.navigate('PreConfigScreen')
            }
        } />
        <Button title="Test Fill Receipt" onPress={
            () => {
                navigation.navigate('TestFillReceipt')
                
            }
        } />
        <View style={{ alignItems: 'center', width: '100%', justifyContent: 'flex-end', height: '100%', position: 'absolute' }}>
            <FindRequestButton />
        </View>
    </View>
}

const styles = StyleSheet.create({})

export default MainScreen;