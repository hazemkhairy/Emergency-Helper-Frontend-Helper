import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import LoadingModal from '../../components/global/LoadingModal';
import MapDisplay from '../../components/Map/MapDisplay';
import { getCurrentLocation } from '../../utils/LocationUtils';
const UserLocationMapDisplay = () => {

    const [loading, setLoading] = useState(false);
    const [points, setPoints] = useState(null);

    useEffect(
        () => {
            setLoading(true);
            getCurrentLocation()
                .then(
                    (helperLocation) => {
                        setPoints(
                            [
                                {
                                    coordinate: helperLocation.coords,
                                    title: "Helper's Location",
                                    icon: require('../../../assets/images/Maps/mark2.png')
                                }
                            ]
                        )
                        setLoading(false);
                    }
                )
        }, []
    )
    if (loading || !points)
        return <LoadingModal modalVisible={loading} />

    return <View style={styles.Container}>
        <View style={styles.mapContianer}>
            <MapDisplay
                points={points}
            />
        </View>

    </View>

}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    mapContianer: {
        flex: 1,
    },

})

export default UserLocationMapDisplay;