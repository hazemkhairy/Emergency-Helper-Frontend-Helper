import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import LoadingModal from '../../components/global/LoadingModal';
import MapDisplay from '../../components/Map/MapDisplay';
import { getCurrentLocation } from '../../utils/LocationUtils';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal'
const RequestAndHelperMapModal = ({ requestCoordinates, close }) => {


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
                                    coordinate: requestCoordinates,
                                    title: "Request's Location",
                                    icon: require('../../../assets/images/Maps/mark1.png')
                                },
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

    return <Modal isVisible={true} style={{ margin: 0 }}>
        <View style={styles.Container}>
            <View style={styles.mapContianer}>
                <MapDisplay
                    points={points}
                />
            </View>
            <View style={styles.coverContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={close}>

                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    mapContianer: {
        flex: 1,
    },
    coverContainer: {
        flex: 1,
        position: 'absolute'
    },
    iconContainer: {
        marginLeft: '15%',
        marginTop: '15%'
    }
})

export default RequestAndHelperMapModal;