import React, { useState, useEffect, useReducer } from 'react';
import {
    ScrollView,
    View,
    Keyboard,
    Image,
    Alert,
    Text,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { colors, I18n } from '../../constants';
import { Button, Input, TextButton, AuthText, Spinner } from '../../components';
// Internet connection
import NetInfo from "@react-native-community/netinfo";
// Style
import styles from './style';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestSignUp, onsignUpResponse } from '../../redux/actions/signUpActions';
// Images
import Images from '../../utils/Images';

/**
 * @class SignUp
 * @param  {Object} navigation - Use for navigation
 */
const SignUp = ({ navigation }) => {

    /**
     * @description dispatch {object} - Dispatch Action
     */
    const dispatch = useDispatch();

    /**
     * Set user firstname value.
     * @description email {string} - Email for login user.
     * @description password {string} - Password for login user.
     * @description spinner {string} - Spinner for wait login user request.
     */
    // const [email, setEmail] = useState('ugoswami@codal.com');
    // const [password, setPassword] = useState('123456');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [spinner, setSpinner] = useState(false);

    const signUpResponse = useSelector(state => state.signUpReducer.signUpResponse);
    // const spinnerResponse = useSelector(state => state.signUpReducer.spinner);

    useEffect(async () => {
        // console.log('Final SignUp Resp : ' + JSON.stringify(signUpResponse));

        if (Object.keys(signUpResponse).length !== 0 && signUpResponse.hasOwnProperty('status')) {
            console.log('signUpResponse.status : ' + signUpResponse.status);
            if (signUpResponse.status === 200) {
                Alert.alert('Success', 'Your account was successfully created. Please check your email to verify email.');
                navigation.navigate('Login');
                var setResponse = {}
                dispatch(onsignUpResponse(setResponse));
            } else {
                Alert.alert('Error', I18n.t('registerPage.signUpError'))
            }
        }
        setSpinner(false);

    }, [signUpResponse]);

    /**
     * @param {} validateRequest - Validate the request
     */
    const validateRequest = () => {
        // Regux string for email validate
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || !regex.test(email)) {
            Alert.alert('BUYITEER', I18n.t('registerPage.invalidEmail'));
            return false;
        } else if (password === '' || password.length < 6) {
            Alert.alert('BUYITEER', I18n.t('registerPage.missingPassword'));
            return false;
        } else if (confirmPassword === '' || confirmPassword.length < 6) {
            Alert.alert('BUYITEER', I18n.t('registerPage.missingConfirmPassword'));
            return false;
        } else if (confirmPassword !== password) {
            Alert.alert('BUYITEER', I18n.t('registerPage.passwordNotMatch'));
            return false;
        } else {
            console.log('API Calling..');
            return true;
        }
    }

    /**
     * @function onSignupSubmit - Submit the user details
     */
    const onSignupSubmit = () => {
        // Keyboard dismiss
        Keyboard.dismiss();
        if (validateRequest()) {
            NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setSpinner(true);
                    // Dispatch Signup request
                    dispatch(requestSignUp(email, password));
                } else {
                    Alert.alert('BUYITEER', I18n.t('connection.errorMessage'))
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
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Images.headerLogo} style={styles.logoImage} />
                        </View>
                        <View>
                            <Input
                                placeholder={I18n.t('registerPage.emailInputPlaceholder')}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />
                            <Input
                                placeholder={I18n.t('registerPage.PasswordInputPlaceholder')}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={e => setPassword(e)}
                            />
                            <Input
                                placeholder={I18n.t('registerPage.confirmPasswordInputPlaceholder')}
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={e => setConfirmPassword(e)}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                buttonText={I18n.t('buttonText.signUpButtonText')}
                                onPress={() => onSignupSubmit()}
                            />
                        </View>
                    </View>

                    <View style={styles.bottomView}>
                        <TextButton
                            text={I18n.t('buttonText.headerBackButton')}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
};

export default SignUp;
