import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Input from './Input';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PhotoInfo } from '../../Modules/GlobalModels'
import normalize from 'react-native-normalize'
const getNameFromUri = (uri) => {
    if (uri == '') {
        return '';
    }
    let temp = uri.split('/');
    return temp[temp.length - 1];
}


const PhotoPicker = (props) => {

    //const [image, setImage] = useState({ uri: '', name: '' });
    const [image, setImage] = useState(props.value)

    const _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 0.5
        });
        if (result.cancelled)
            return
        const imageName = getNameFromUri(result.uri)
        if (!result.cancelled) {
            setImage({ uri: result.uri, name: imageName, base64: result.base64 })
            props.setValue(new PhotoInfo(result.uri, imageName, result.base64));
        }
    };

    return (
        <View style={{ ...styles.container, ...props.style }}>

            <View style={styles.button}>

                <TouchableOpacity
                    onPress={_pickImage}
                >
                    <Text style={styles.text}>UPLOAD</Text>
                </TouchableOpacity>
            </View><View style={styles.input} >

                <Input
                    placeholder={props.placeholder ? props.placeholder : 'select photo'}
                    editable={false}
                    value={image.name ? image.name : ''}
                    error={props.error}
                // multiline={true}
                />
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',



    },
    input: {
        flexGrow: 1,

    },
    button: {
        position: 'absolute',
        zIndex: 1,
        bottom: normalize(9.9),
        backgroundColor: 'white',
        height: 20,
        marginRight: '7%',



    },
    text: {
        color: '#132641',
        textAlign: 'center',
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 14,


    }
});

export default PhotoPicker;