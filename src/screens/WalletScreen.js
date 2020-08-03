import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';
import { getProfileData } from '../utils/ProfileData';
import LoadingModal from '../components/global/LoadingModal';


const WalletScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const loadProfileData = () => {
        setLoading(true);
        getProfileData().then((result) => {
            setUserData(result);
            setLoading(false);
        });
    };
    useEffect(() => {
        loadProfileData();
    }, []);

    return (
        <View>
            <LoadingModal modalVisible={loading} />
            <MainHeader headerText={'Wallet'} name={'money'}></MainHeader>
            <SubHeaderText SubHeaderText={'Your available balance'}></SubHeaderText>
            <Text style={styles.Balance} >  {userData.balance} EGP</Text>

        </View>
    )
}
WalletScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        },

    }
}

const styles = StyleSheet.create({
    Balance: {
        fontFamily: 'Montserrat',
        fontSize: 24,
        marginLeft: '8%',
        color: '#132641'
    }

})

export default WalletScreen;