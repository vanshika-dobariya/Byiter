import React, { useState, useEffect, useReducer } from 'react';
import {
    ScrollView,
    View,
    Keyboard,
    Image,
    Alert,
    Text,
    StatusBar,
    SafeAreaView,
    BackHandler
} from 'react-native';
import { colors, I18n } from '../../constants';
import { Button, Input, TextButton, AuthText, Spinner } from '../../components';
// Internet connection
import NetInfo from "@react-native-community/netinfo";
// Style
import styles from './style';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestVerifyForgotPassword, onVerifyForgotPasswordResponse } from '../../redux/actions/forgotPasswordActions';
// Images
import Images from '../../utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @class SetForgotPassword
 * @param  {Object} navigation - Use for navigation
 */
const SetForgotPassword = ({ route, navigation }) => {

    /**
     * @description dispatch {object} - Dispatch Action
     */
    const dispatch = useDispatch();

    const { email } = route.params;

    /**
     * @description password {string} - Password for SetForgotPassword user.
     * @description confirmPassword {string} - confirmPassword for SetForgotPassword user.
     * @description spinner {string} - Spinner for wait SetForgotPassword user request.
     */
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [spinner, setSpinner] = useState(false);

    // const spinnerResponse = useSelector(state => state.loginReducer.spinner);
    const verifyForgotPasswordResponse = useSelector(state => state.forgotPasswordReducer.verifyForgotPasswordResponse);
    // const spinnerResponse = useSelector(state => state.loginReducer.spinner);

    useEffect(async () => {
        // console.log('Final Verify Forgot Password Resp : ' + JSON.stringify(verifyForgotPasswordResponse));
        if (Object.keys(verifyForgotPasswordResponse).length !== 0) {
            if (verifyForgotPasswordResponse.status && verifyForgotPasswordResponse.status === 200) {
                Alert.alert('Success', 'Your password was successfully reset. Please check your email for instructions on choosing a new password..');
                var setResponse = {};
                dispatch(onVerifyForgotPasswordResponse(setResponse));
                navigation.navigate('Login');
            } else {
                Alert.alert('Fail', 'Unfortunately, an error occurred resetting your password.');
            }
            setSpinner(false);
        }
    }, [verifyForgotPasswordResponse]);

    useEffect(() => {
        const backAction = () => {
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    /**
     * @function onSubmit - Submit the user details
     */
    const onSubmit = () => {
        // // Keyboard dismiss
        // Keyboard.dismiss();
        if (code == '') {
            Alert.alert('BUYITEER', I18n.t('setForgotPasswordPage.invalidOTPMsg'));
        } else if (newPassword == '') {
            Alert.alert('BUYITEER', I18n.t('setForgotPasswordPage.invalidPasswordErrorMsg'));
            return false;
        } else if (confirmPassword == '') {
            Alert.alert('BUYITEER', I18n.t('setForgotPasswordPage.invalidConfirmPasswordErrorMsg'));
            return false;
        } else if (confirmPassword !== newPassword) {
            Alert.alert('BUYITEER', I18n.t('setForgotPasswordPage.passwordNotMatch'));
            return false;
        } else {
            console.log('code, newPassword, confirmPassword, email : '+code, newPassword, confirmPassword, email);
            NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setSpinner(true);
                    // Dispatch login request
                    dispatch(requestVerifyForgotPassword(code, newPassword, confirmPassword, email));
                } else {
                    Alert.alert('Error', I18n.t('connection.errorMessage'))
                }
            });
        }
         
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <StatusBar />
            {spinner ? <Spinner color={colors.blue} /> :
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={Images.headerLogo} style={styles.logoImage} />
                        </View>
                        <View>
                            <Input
                                placeholder={I18n.t('setForgotPasswordPage.otpPlaceholder')}
                                value={code}
                                onChangeText={e => setCode(e)}
                            />
                            <Input
                                placeholder={I18n.t('setForgotPasswordPage.passwordInputPlaceholder')}
                                secureTextEntry={true}
                                value={newPassword}
                                onChangeText={e => setNewPassword(e)}
                            />
                            <Input
                                placeholder={I18n.t('setForgotPasswordPage.confirmPasswordInputPlaceholder')}
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={e => setConfirmPassword(e)}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                buttonText={I18n.t('buttonText.forgotPasswordButtonText')}
                                onPress={() => onSubmit()}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TextButton
                                text={I18n.t('setForgotPasswordPage.forgotPasswordLabel')}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </View>

                </View>
            }
        </SafeAreaView>
    )
};

export default SetForgotPassword;
