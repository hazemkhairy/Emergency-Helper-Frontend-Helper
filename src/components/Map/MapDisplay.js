import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapDisplay = ({ points }) => {

    const getMarkers = () => {

        return points.map(
            (point, index) => {
                return <Marker
                    coordinate={point.coordinate}
                    title={point.title}
                    key={index}
                    icon={point.icon}
                />
            }
        )
    }
    return <View style={styles.container}>
        <MapView style={styles.map}
            initialRegion={
                {
                    ...points[0].coordinate,
                    latitudeDelta: Math.abs(points[1].coordinate.latitude - points[0].coordinate.latitude) * 3,
                    longitudeDelta: Math.abs(points[1].coordinate.longitude - points[0].coordinate.longitude) * 3,
                }
            }
        >
            {
                getMarkers()
            }
        </MapView>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
    }
});

export default MapDisplay;