import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainHeader from '../../components/global/MainHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const TermsOfUseScreen = (props) => {


    return (
        <KeyboardAwareScrollView bounces={false}>
            <MainHeader headerText={'Terms of Use'}></MainHeader>
            <View style={styles.container}>
                <Text style={styles.title} >Privacy Policy </Text>
                <Text style={styles.description1}>We only collect the information you choose to give us. We only require the minimum amount of personal infromation that is required to fulfill the purpose of interaction with us </Text>
                <Text style={styles.title} >Eligibility </Text>
                <Text style={styles.description}>We only collect the information you choose to give us. We only require the minimum amount of personal infromation that is required to fulfill the purpose of interaction with us </Text>
            </View>
        </KeyboardAwareScrollView >
    )
}

TermsOfUseScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },

    }
}
const styles = StyleSheet.create({
    container: {
        marginBottom: '5%',
        marginTop: '10%'
    },

    title: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 22,
        marginLeft: '13%',
        color: '#132641',
        marginBottom: '2%'
    },
    description1: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        marginLeft: '15%',
        marginRight: '8%',
        color: '#132641',
        marginBottom: '5%'

    },
    description: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        marginLeft: '15%',
        marginRight: '5%',
        color: '#132641',
    }

});
export default TermsOfUseScreen;