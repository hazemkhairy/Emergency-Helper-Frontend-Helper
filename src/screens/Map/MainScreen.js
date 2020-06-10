import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
const MainScreen = ({ navigation }) => {
    return <View>
        <Text>Main Screen</Text>
        <Button title="Log Out" onPress={
            () => {
                logOut();
                navigation.navigate('PreConfigScreen')
            }
        } />
    </View>
}

const styles = StyleSheet.create({})

export default MainScreen;