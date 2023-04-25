import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { colors, fonts } from '../constants';
import Images from '../utils/Images';

/**
* Renders a <AppHeader /> component
* @function Header AppHeader
* @param  props.onPressProfile {object} - the onpress event of the profile
* @param  props.onPressNotification {object} - the onpress event of the notification
*/

export default AppHeader = ({ inNotification, onPressProfile, onPressNotification }) => {
    /**
     * @description notificationCount show the notification count
     */
    const [notificationCount, setNotificationCount] = useState(0);

    // useSelector for receive deshboard api response
    const pushNotificationCount = useSelector((state) => state.dashboardReducer.pushNotificationCount);

    /**
     * @description useEffect {object} - Default call this function
     */
    useEffect(async () => {
        setNotificationCount(pushNotificationCount);
    }, [pushNotificationCount]);

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity
                    onPress={onPressProfile}>
                    <Image source={Images.headerUser} style={styles.profileIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Image source={Images.headerLogo} style={styles.logoImg} />
            </View>
            <View style={styles.notification}>
                {!inNotification ?
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={onPressNotification}>
                        <Image source={Images.headerNotification} style={styles.notificationIcon} />
                        {notificationCount === 0 ? null :
                            <View style={styles.notificationView}>
                                {notificationCount > 99 ?
                                    <Text style={styles.notificationText}>{notificationCount + '+'}</Text>
                                    :
                                    <Text style={styles.notificationText}>{notificationCount}</Text>
                                }
                            </View>
                        }
                    </TouchableOpacity>
                    : <Image source={Images.headerNotification} style={styles.notificationIcon} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.headerBackgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
    },
    profile: {
    },
    logo: {
        alignItems: 'center'
    },
    notification: {
    },
    profileIcon: {
    },
    logoImg: {
    },
    notificationIcon: {
    },
    notificationView: {
        backgroundColor: '#f02f2f',
        height: 17,
        width: 17,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#232c52',
        borderRadius: 10,
        position: 'absolute',
        right: 10,
        top: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationText: {
        fontSize: 8,
        color: '#ffffff',
        fontWeight: '600'
    }
})


