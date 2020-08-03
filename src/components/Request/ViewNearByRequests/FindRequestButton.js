import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from 'react-navigation-hooks'

const FindRequestButton = () => {
    const { navigate } = useNavigation();
    return (
        <View >
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigate('NearByRequestsScreen') }}
            >
                <Text style={styles.buttonText}>Find Requests</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#132641',
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.85,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14 * (Dimensions.get('window').height / 812),
        fontFamily: 'Montserrat_SemiBold'
    }
});

export default FindRequestButton;