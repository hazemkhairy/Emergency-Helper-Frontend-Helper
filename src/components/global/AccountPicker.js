import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PhotoInfo } from '../../Modules/GlobalModels';

const getNameFromUri = (uri) => {
    if (uri == '') {
        return '';
    }
    let temp = uri.split('/');
    return temp[temp.length - 1];
}


const AccountPicker = (props) => {

    const [image, setImage] = useState(props.value)

    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,

            quality: 0.5
        });
        if (result.cancelled)
            return;
        const imageName = getNameFromUri(result.uri)
        if (!result.cancelled) {
            setImage({ uri: result.uri, name: imageName })
            props.setValue(new PhotoInfo(result.uri, imageName, result.type));
        }
    };
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <TouchableOpacity
                onPress={_pickImage}
            >

                <Text style={{ ...styles.text, ...props.style }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#132641',
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16,

    }
});

export default AccountPicker; 