import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import FindRequestButton from '../../components/Request/ViewNearByRequests/FindRequestButton'
import LockdownManager from '../../components/Request/Lockdown/LockdownManager';
const MainScreen = ({ navigation }) => {
    const [refresh, setRefresh] = useState(false)
    useEffect(
        () => {
            navigation.addListener(
                'willFocus',
                () => {
                    setRefresh(!refresh);
                }
            )
        }, []
    )
    return <View style={{ flex: 1 }}>
        <Text>Main Screen</Text>
        <LockdownManager />

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