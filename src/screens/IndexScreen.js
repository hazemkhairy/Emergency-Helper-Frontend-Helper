import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Font from "expo-font";
class IndexScreen extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
            Montserrat_Medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
            Montserrat_SemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
            Montserrat_Bold: require("../../assets/fonts/Montserrat-Bold.ttf")
        });
        
        this.props.navigation.navigate("Home");
    }


    render() {
        return (
            <View>
                {/* <Text>Index Screen</Text>
            <Button title="Posts" onPress={() => { navigation.navigate('Home') }} /> */}
                {/* {navigation.navigate('Home')} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default IndexScreen;