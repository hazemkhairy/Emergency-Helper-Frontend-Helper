import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MainHeader from '../../components/global/MainHeader';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton'
import AboutUsCard from '../../components/global/AboutUsCard';
import { getAboutUs } from '../../utils/AboutUs';

const AboutUsScreen = (props) => {

    const [dataset, setDataset] = useState([]);
    useEffect(() => {
        getAboutUs().then((result) => {
            setDataset(result);
        });
    }, []);

    return (
        <View>
            <MainHeader headerText={'About Us'} name={'info-circle'}></MainHeader>
            <View style={{ marginTop: '10%' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataset}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <AboutUsCard
                            title={item.title}
                            description={item.description}
                        >
                        </AboutUsCard>

                    )}
                />

                <TouchableOpacity onPress={() => { props.navigation.navigate('TermsOfUseScreen') }}>
                    <Text style={styles.termsConditions} >Terms of Use</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

AboutUsScreen.navigationOptions = (props) => {
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

    termsConditions: {
        marginTop: '3%',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#132641',
        fontSize: 14,
        fontFamily: "Montserrat_SemiBold",
    },
});
export default AboutUsScreen;