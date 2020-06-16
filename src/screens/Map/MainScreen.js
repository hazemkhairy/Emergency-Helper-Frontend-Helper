import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { logOut } from '../../utils/Helper'
import MainButton from "../../components/global/MainButton";

const MainScreen = ({ navigation }) => {
    return <View>
        <Text>Main Screen</Text>
        <Button title="Log Out" onPress={
            () => {
                logOut();
                navigation.navigate('PreConfigScreen')
            }
        } />
         <MainButton
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
      >
        Settings
      </MainButton>
    </View>
}

const styles = StyleSheet.create({})

export default MainScreen;