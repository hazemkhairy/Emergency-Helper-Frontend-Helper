import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';
import LoadingModal from '../../global/LoadingModal';
import { getCurrentRequestInfo } from '../../../utils/RequestUtils';
import { Feather } from '@expo/vector-icons';
import RequestAndHelperMapModal from '../../Map/RequestAndHelperMapModal'
const ActiveRequestInfoModal = ({ mv, inProgress, children, close }) => {
    if (!mv)
        return null;
    let mount = useRef(true);
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mapModal, setMapModal] = useState(false);
    const getRequestInfo = () => {

        if (mount.current) {
            setLoading(true);
            getCurrentRequestInfo().then(
                res => {
                    if (mount.current) {
                        setRequest(res);
                        setLoading(false);
                    }
                }
            )
                .catch(
                    err => {
                        //setLoading(false);
                        getRequestInfo();
                        console.log('failed')
                    }
                )
        }

    }

    useEffect(
        () => {
            getRequestInfo();
            return () => { mount.current = false; }
        }, []
    )
    if (loading || !request)
        return <LoadingModal modalVisible={loading} />
    if (mapModal)
        return <RequestAndHelperMapModal requestCoordinates={request.requestLocation} close={() => { setMapModal(false); }} />
    return <Modal isVisible={mv} >
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                {
                    inProgress ?
                        <View style={styles.titleRow}>
                            <Text style={styles.titleText}>Help in progress</Text>
                        </View>
                        : null
                }
                <View style={styles.topRow}>
                    <View style={styles.clientInfoContainer}>
                        <Image style={styles.clientImage} source={{ uri: request.clientImage }} />
                        <View style={styles.clientInfoTextContainer}>
                            <Text style={styles.clientName}>{request.clientName.firstName} {request.clientName.lastName}</Text>
                            <TouchableOpacity style={styles.phoneNumberContainer} onPress={() => { Linking.openURL(`tel:${request.clientNumber}`) }}>
                                <Text style={styles.clientPhoneNumber}>{request.clientNumber}</Text>
                                <Entypo name="phone" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.chatContainer} onPress={() => { }}>
                        <Text style={styles.chatText}>Chat</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleRow}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            setMapModal(true);
                        }}
                    >
                        <Text style={styles.fieldName}>
                            {"Location Name: "}

                            <Text style={styles.fieldContent}>
                                location from map
                            </Text>
                        </Text>
                        <View style={{ marginLeft: '2%', justifyContent: 'center', alignItems: 'center' }}>

                            <Feather name="map-pin" size={18} color="black" />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.fieldName}>
                        {"Price Range: "}
                        <Text style={styles.fieldContent}>
                            {request.priceRange.from} ~ {request.priceRange.to} EGP
                        </Text>
                    </Text>
                    <Text style={styles.fieldName}>
                        {"Accepted Offer: "}
                        <Text style={styles.fieldContent}>
                            {request.offerDescription}
                        </Text>
                    </Text>
                    <Text style={styles.fieldName}>
                        {"Problem’s description: "}
                        <Text style={styles.fieldContent}>
                            {request.requestDescription}
                        </Text>
                    </Text>
                </View>
                <View style={styles.bottomRow}>
                    {children}
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        flex: 1,
        maxHeight: Dimensions.get('screen').height * 0.4,
        paddingTop: '3%',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 1,
    },
    topRow: {
        flex: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    middleRow: {
        flex: 7,
        justifyContent: 'space-around'
    },
    bottomRow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatContainer: {
        borderRadius: 30,
        backgroundColor: '#132641',
        paddingHorizontal: '5%',
        paddingVertical: '1%'
    },
    chatText: {
        fontSize: 13,
        color: '#FFFFFF',
        fontFamily: 'Montserrat_SemiBold'
    },
    clientInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clientImage: {
        width: 65,
        height: 65,
        borderRadius: 100,
    },
    clientInfoTextContainer: {
        paddingLeft: '3%',
    },
    clientName: {
        fontSize: 15,
        fontFamily: 'Montserrat_Bold',
        color: '#132641'
    },
    clientPhoneNumber: {
        fontSize: 13,
        color: 'rgba(19,38,65,0.56)'
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
    },
    fieldName: {
        fontSize: 12,
        color: '#687486',
        fontFamily: 'Montserrat_Medium'
    },
    fieldContent: {
        color: '#B1B7C0',
        fontFamily: 'Montserrat'
    },
    titleRow: {
        flex: 2,
        alignItems: 'center'
    },
    titleText: {
        color: '#132641',
        fontSize: 20,
        fontFamily: 'Montserrat_Bold'
    },

});

export default ActiveRequestInfoModal;