import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import NearByRequestsItem from './NearByRequestsItem'
import MakeOfferModal from './MakeOfferModal';
const NearByRequestsList = ({ requests, refresh }) => {

    const [loading, setLoading] = useState(false);
    const [mv, setMV] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const getNewRequests = async () => {
        setLoading(true);
        await refresh();
        setLoading(false);
    }
    if (mv) {
        return <MakeOfferModal
            clientName={modalInfo.clientName}
            requestID={modalInfo.requestID}
            modalVisibility={mv}
            close={() => { setMV(false); }}

        />
    }
    return (
        <FlatList
            refreshing={loading}
            onRefresh={() => {
                getNewRequests()
            }}
            style={styles.list}
            data={requests}
            keyExtractor={(item, index) => { return item._id }}
            renderItem={
                ({ item }) => {
                    return <View style={styles.item}>
                        <NearByRequestsItem request={item}
                            openModal={
                                () => {
                                    setModalInfo({ clientName: item.clientName, requestID: item._id });
                                    setMV(true);
                                }} />
                    </View>
                }
            }
            ListEmptyComponent={
                () => {
                    return <Text>There is no nearby requests</Text>
                }
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: '2%'
    },
    item: {
        width: 0.85 * Dimensions.get('window').width,
        minHeight: 0.23 * Dimensions.get('window').height,
        flex: 1,
        margin: '3%',
        marginBottom: '6%'
    }
});

export default NearByRequestsList