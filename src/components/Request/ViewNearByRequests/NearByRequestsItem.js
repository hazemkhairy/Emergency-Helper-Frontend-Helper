import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import MakeOfferModal from './MakeOfferModal'
const NearByRequestsItem = ({ request }) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    
    return (
        <View style={styles.container}>
            {
                modalVisibility ?
                    <MakeOfferModal
                        modalVisibility={modalVisibility}
                        close={() => { setModalVisibility(false) }}
                        clientName={request.clientName}
                        requestID={request._id}
                    /> : null
            }
            <View style={styles.topHalf}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                        source={{ uri: request.clientPicture }}

                        style={styles.clientImage}
                    />
                    <Text style={styles.clientName}>
                        {request.clientName}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.makeOfferButton}
                    onPress={() => { setModalVisibility(true) }}
                >
                    <Text style={styles.makeOfferText}>
                        Make an offer
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomHalf}>

                <Text style={styles.description}>
                    <Text style={{ fontFamily: 'Montserrat_Medium', color: '#687486' }}>

                        Problem's description:
                    </Text>
                    {request.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: "#C2C9D1",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 1.00,

        elevation: 10,
        borderRadius: 40,

        backgroundColor: 'white',
        paddingHorizontal: '2%',
        paddingVertical: '4%',
        overflow: 'hidden'
    },
    topHalf: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    bottomHalf: {
        paddingTop: '2%',
        paddingLeft: '5%',
        flex: 9
    },
    clientImage: {
        borderRadius: 100,
        height: 55,
        width: 53,
        marginRight: '3%'
    },
    clientName: {
        fontSize: 15,
        fontFamily: 'Montserrat_Bold'
    },
    description: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#B1B7C0'
    },
    makeOfferButton: {
        backgroundColor: '#132641',
        borderRadius: 50,
        padding: '3.5%'

    },
    makeOfferText: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Montserrat_SemiBold'
    }
});

export default NearByRequestsItem