import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Alert } from 'react-native'
export const verifyLocationPermission = async () => {

    const result = await Permissions.askAsync(Permissions.LOCATION)
    if (result.status !== 'granted') {
        Alert.alert(
            'Insufficient permissions!',
            'You need to grant Location permission to use this app',
            [{ text: 'Okay' }]
        );
        return false;
    }
    return true;
}

export const getCurrentLocation = async () => {
    const hasPermission = await verifyLocationPermission();
    if (!hasPermission)
        return;
    try {
        const location = await Location.getCurrentPositionAsync();
        return location;
    }
    catch (err) {
        Alert.alert("Couldn't get current location");
    }

}