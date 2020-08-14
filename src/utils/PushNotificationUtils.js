import { Notifications } from 'expo';
import { AsyncStorage, Vibration } from 'react-native';
import * as Permissions from 'expo-permissions'
import backendAxios from '../services/backendAxios'
export const registerPushNotification = async () => {
    let token = await AsyncStorage.getItem('pushtoken');
    if (token) {
        return;
    }
    else {

        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        }
        token = await Notifications.getExpoPushTokenAsync();
        //console.log('new', token)
    }
    await backendAxios.post('Account/PushToken', { token: token }).then(
        async () => {
            await AsyncStorage.setItem('pushtoken', token);
        }
    )
        .catch(
            (err) => {
            }
        )
}


export const listenForNotifications = async (navigation) => {

    Notifications.addListener((notification) => {
        Vibration.vibrate();
        console.log(notification)
    })
}