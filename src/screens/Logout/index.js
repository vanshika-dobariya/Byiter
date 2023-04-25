import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from '../../components';
// Style
import styles from './style';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../redux/actions/signUpActions';
import { CommonActions } from '@react-navigation/native';

const Logout = ({ navigation }) => {

    /**
     * @description dispatch {object} - Dispatch Action
     */
    const dispatch = useDispatch();

    const [spinner, setSpinner] = useState(true);

    const logOutResponse = useSelector(state => state.signUpReducer.signUpResponse);
    // const spinnerResponse = useSelector(state => state.signUpReducer.spinner);

    useEffect(async () => {
        console.log('Final Logout Resp : ' + JSON.stringify(logOutResponse));
        if (logOutResponse) {
            await AsyncStorage.setItem('EmailAddress', '');
            navigation.navigate('AuthNavigator');
            setSpinner(false);
        }
    }, [logOutResponse]);

    useEffect(async () => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await AsyncStorage.setItem('EmailAddress', '');
            navigation.navigate('AuthNavigator');
            try {
                // navigation.reset();
                navigation.dispatch(
                    CommonActions.reset({
                        index: 2,
                        routes: [
                            { name: 'Featured' },
                        ],
                    })
                );
            } catch (error) {
                console.log('Reset Error : ' + error);
            }
            // setSpinner(true);
            // // Dispatch login request
            // dispatch(logOut());
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, []);

    return (
        <SafeAreaView style={styles.safeView}>
            <StatusBar />
            {spinner ? <Spinner color={colors.blue} /> :
                <View style={styles.container}>
                    <Text>Logout</Text>
                </View>
            }
        </SafeAreaView>
    );
};

export default Logout;
