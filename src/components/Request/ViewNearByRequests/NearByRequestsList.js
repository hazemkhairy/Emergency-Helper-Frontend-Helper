import React from 'react';
import { FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import NearByRequestsItem from './NearByRequestsItem'
const NearByRequestsList = ({ requests }) => {
    return (
        <FlatList
            style={styles.list}
            data={requests}
            keyExtractor={(item, index) => { return index.toString() }}
            renderItem={
                ({ item }) => {
                    return <View style={styles.item}>
                        <NearByRequestsItem request={item} />
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