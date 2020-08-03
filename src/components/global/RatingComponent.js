import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ColoredStar from '../../../assets/images/svg/colored';
import EmptyStar from '../../../assets/images/svg/empty';
const RatingComponent = ({ maxRating = 5, value, setValue }) => {

    const getRating = () => {
        let ret = [];
        for (let i = 0; i < value; i++) {
            ret.push(
                <TouchableOpacity key={i.toString()} onPress={() => setValue(i)}>
                    <ColoredStar height={styles.svg.height} width={styles.svg.width} />
                </TouchableOpacity>
            )
        }
        for (let i = value; i < maxRating; i++) {
            ret.push(
                <TouchableOpacity key={i.toString()} onPress={() => setValue(i + 1)}>
                    <EmptyStar height={styles.svg.height} width={styles.svg.width} />
                </TouchableOpacity>
            )
        }
        return ret;
    }
    return (
        <View style={styles.container}>
            {
                getRating()
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    svg: {
        width: 25,
        height: 28,
    },
});
export default RatingComponent;