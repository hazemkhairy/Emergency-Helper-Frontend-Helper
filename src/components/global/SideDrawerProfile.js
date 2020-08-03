import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { getProfileData } from '../../utils/ProfileData';
import normalize from "react-native-normalize";
import LoadingModal from '../global/LoadingModal';

const SideDrawerProfile = (props) => {

    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [profilePic, setProfilePic] = useState();

    const loadProfileData = () => {
        setLoading(true);
        getProfileData().then((result) => {
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setEmailAddress(result.email)
            setProfilePic(result.profilePicture)
            setLoading(false);
        });
    };
    useEffect(() => {
        loadProfileData();
    }, []);

    const fullname = firstName + ' ' + lastName
    const name = fullname.split(' ').slice(0, 2).join(' ')

    return (
        <View>
            {/* <LoadingModal modalVisible={loading} /> */}
            <View style={styles.ProfileContainer}>
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: profilePic }} style={styles.img}></Image>
                        <View style={styles.TextContainer}>
                            <Text style={styles.nameText}>{name}</Text>
                        </View>
                    </View>
                    <Text style={styles.emailText}>{emailAddress}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileContainer: {
        width: '100%',
        backgroundColor: '#7598BA',
        height: Dimensions.get('window').height * 0.28,
        borderBottomLeftRadius: 70,
    },
    img: {
        height: normalize(60),
        borderRadius: 45,
        width: '25%',
        marginLeft: 30,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: normalize(65)
    },
    TextContainer: {
        marginLeft: 10,
        marginTop: '35%'
    },
    nameText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_Bold',
        fontSize: normalize(22),
        width: normalize(180)
    },
    emailText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: normalize(14),
        alignSelf: 'center',
        opacity: 0.8,
        marginLeft: 60,
        marginTop: Dimensions.get('window').height > 600 ? 7 : 5,
        width: '100%'
    },
});

export default SideDrawerProfile;