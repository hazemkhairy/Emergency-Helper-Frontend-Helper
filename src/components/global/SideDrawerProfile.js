import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { getProfileData } from '../../utils/ProfileData';
import normalize from "react-native-normalize";
import Star from 'react-native-vector-icons/Foundation';


const SideDrawerProfile = (props) => {

    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [profilePic, setProfilePic] = useState();
    const [rate, setRate] = useState("");
    const loadProfileData = () => {
        setLoading(true);
        getProfileData().then((result) => {
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setEmailAddress(result.email)
            setProfilePic(result.profilePicture)
            setRate((Math.round(result.rate * 100) / 100).toFixed(2));
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
            <View style={styles.ProfileContainer}>
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: profilePic }} style={styles.img}></Image>
                        <View style={styles.TextContainer}>
                            <Text style={styles.nameText}>{name}</Text>
                            <View style={styles.rateContainer}>
                            <Text style={styles.ratenumberStyle}>{rate}</Text>
                            <Star name="star" style={styles.starStyle} />
                        </View>
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
    rateContainer: {
        flexDirection: 'row',
        left: normalize(2),
        position: 'absolute',
        top: normalize(30),
    
      },
      starStyle: {
        fontSize: 17,
        marginLeft: 5,
        top: -1,
        color:'white',
      },
      ratenumberStyle: {
        fontFamily: "Montserrat_Medium",
        color: 'white',
        fontSize: 13
      }
});

export default SideDrawerProfile;