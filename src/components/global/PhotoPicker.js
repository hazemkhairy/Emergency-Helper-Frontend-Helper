import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Button, Image, Text, TextComponent } from 'react-native';
import Input from './Input';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        });
        if (result.cancelled)
            return
        const imageName = getNameFromUri(result.uri)
        if (!result.cancelled) {
            setImage({ uri: result.uri, name: imageName })
            props.setValue({ uri: result.uri, name: imageName });
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
                    value={image.name?image.name:''}
                />
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',

        alignItems: 'center'
    },
    input: {
        flexGrow: 1,

    },
    button: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 2
    },
    text: {
        color: '#132641',
        textAlign: 'center',
        fontFamily: 'Montserrat'
    }
});

export default PhotoPicker;