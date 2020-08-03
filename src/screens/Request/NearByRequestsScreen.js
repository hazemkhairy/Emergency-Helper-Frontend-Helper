import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getCurrentLocation } from '../../utils/LocationUtils'
import ScreenHeader from '../../components/global/ScreenHeader';
import { getNearByRequests } from '../../utils/RequestUtils'
import NearByRequestsList from '../../components/Request/ViewNearByRequests/NearByRequestsList'
const NearByRequestScreen = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [requests, setRequests] = useState(null);
    const [category, setCategory] = useState('');
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
                    if (mount.current) {

                        setRequests([]);
                        setCategory("Error")
                    }
                    console.log(err.response)
                    throw err;
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