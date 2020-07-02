import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import FindRequestButton from '../../components/Request/ViewNearByRequests/FindRequestButton'
import LockdownManager from '../../components/Request/Lockdown/LockdownManager';
import { getLockdownStatus } from '../../utils/LockdownUtils';
const MainScreen = ({ navigation }) => {

    const [lockdown, setLockdown] = useState(false)
    console.log(lockdown)
    const checkLockdown = async () => {
        await getLockdownStatus().then(
            (res) => {
                if (res && res.isLockedDown) {
                    setLockdown(true);
                }
                else {
                    setLockdown(false);
                }
            }
        )
    }
    useEffect(
        () => {
            navigation.addListener(
                'willFocus',
                () => {
                    checkLockdown()
                }
            )
            checkLockdown()
        }, []
    )
    if (lockdown) {
        return <LockdownManager refreshLockdown={checkLockdown} />

    }
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