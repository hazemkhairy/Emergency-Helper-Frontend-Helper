import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';


const AboutUsCard = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.title} </Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: '5%'
    },
    title: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 22,
        marginLeft: '13%',
        color: '#132641',
        marginBottom: '1%'
    },
    description: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        marginLeft: '15%',
        marginRight: '8%',
        color: '#132641',

    }

})
export default AboutUsCard;