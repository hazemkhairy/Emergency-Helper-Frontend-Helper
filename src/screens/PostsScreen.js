import React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { getData } from '../store/Posts/actions'
import { connect } from 'react-redux'
const PostsScreen = (props) => {
    return (
        <View>
            <Text>Posts Screen</Text>
            <Button title="Get Data" onPress={() => { props.getDatax() }} />
            <FlatList
                data={props.posts}
                keyExtractor={(item) => { return String(item.id) }}
                renderItem={({ item }) => { return <Text>{item.id} - {item.name}</Text> }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

const mapStateToProps = state => ({
    posts: state.postsReducer
})

const mapDispatchToProps = dispatch => ({
    getDatax: () => { dispatch(getData()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);