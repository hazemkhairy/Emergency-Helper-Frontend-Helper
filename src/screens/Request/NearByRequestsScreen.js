import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getCurrentLocation } from '../../utils/LocationUtils'
import ScreenHeader from '../../components/global/ScreenHeader';
import { getNearByRequests } from '../../utils/RequestUtils';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/global/HeaderButton'
import NearByRequestsList from '../../components/Request/ViewNearByRequests/NearByRequestsList';
import ErrorModal from '../../components/global/ErrorModal';
const NearByRequestScreen = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [requests, setRequests] = useState(null);
    const [category, setCategory] = useState('');
    const [needAdminApproval, setNeedAdminApproval] = useState(false);

    let mount = useRef(true);
    const getUserLocation = () => {
        getCurrentLocation().then(
            location => {
                if (mount.current && location && location.coords) {
                    setCurrentLocation(location.coords);
                }
            }
        )
    }
    const getRequests = () => {
        return getNearByRequests(currentLocation).then(
            (res) => {
                if (mount.current && res) {

                    setRequests(res.requests)
                    setCategory(res.category)
                }
            }
        )
            .catch(
                (err) => {
                    if (err.response.status == "401")
                        setNeedAdminApproval(true);
                    if (mount.current) {

                        setRequests([]);
                        setCategory("Error")
                    }
                    
                }
            )
    }

    useEffect(
        () => {
            getUserLocation();
            return () => { mount.current = false }
        },
        []
    )

    useEffect(
        () => {
            if (currentLocation) {
                getRequests();
            }
        },
        [currentLocation]
    )
    if (needAdminApproval)
        return <ErrorModal
            message={"Cannot get request before admin approve your application, Please wait for admin approval"}
            modalVisible={needAdminApproval}
            closeModal={() => { navigation.goBack() }}
        />
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScreenHeader headerText="Nearby Requests" />
            <View style={styles.container}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Nearby Requests</Text>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
                <View style={{ flex: 1 }}>

                    <NearByRequestsList requests={requests} refresh={getRequests} />
                </View>
            </View>
        </View>
    )
}
NearByRequestScreen.navigationOptions = (props) => {
    return {
        title: '',
        headerTransparent: true,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
                    <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
                </HeaderButtons>
            )
        },

    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: Dimensions.get('window').width * 0.064,
        flex: 1
    },
    headerTextContainer: {
        marginLeft: Dimensions.get('window').width * 0.032
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Montserrat_SemiBold'
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'Montserrat_Medium',
        color: '#132641'
    }
})

export default NearByRequestScreen;