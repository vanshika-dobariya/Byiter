import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @class SplashScreen
 * @param  {Object} navigation - Use for navigation
 */
export default SplashScreen = ({ navigation }) => {

    useEffect(async () => {
        var isLogIn = await AsyncStorage.getItem('EmailAddress');
        if (isLogIn) {
            navigation.navigate('AppNavigator');
        } else {
            navigation.navigate('AuthNavigator');
        }
    }, []);

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <Image source={Images.splashLogo} style={styles.splashLogo} />
            </View>
        </SafeAreaView>

    )
}