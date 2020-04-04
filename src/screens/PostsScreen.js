import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { getFromLocalStorage, setInLocalStorage } from '../utils/LocalStorage'
const PostsScreen = (props) => {
    const [message, setMessage] = useState('');
    useEffect(
        () => {
            const s = async () => {
                const ret = await getFromLocalStorage('x');
                setMessage(ret);
            }
            s()
        }, []
    )
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
            <Button title="Get Data" onPress={() => { setInLocalStorage('x', 'hello') }} />

        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'red',
    height:'100%',
    width:'100%',
    justifyContent:'center'
}
})

export default PostsScreen;