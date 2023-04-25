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
import { requestLogin, onLoginResponse } from '../../redux/actions/loginActions';
// Images
import Images from '../../utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @class Login
 * @param  {Object} navigation - Use for navigation
 */
const Login = ({ navigation }) => {

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
    // const [email, setEmail] = useState('deepak6sp@gmail.com');
    // const [password, setPassword] = useState('123456');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [spinner, setSpinner] = useState(false);


    const loginResponse = useSelector(state => state.loginReducer.loginResponse);
    // const spinnerResponse = useSelector(state => state.loginReducer.spinner);

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

    useEffect(async () => {
        // console.log('Final Login Resp : ' + loginResponse);
        if (Object.keys(loginResponse).length !== 0 && loginResponse.hasOwnProperty('status')) {
            console.log('loginResponse.status : ' + loginResponse.status);
            if (loginResponse.status === 200) {
                await AsyncStorage.setItem('EmailAddress', email);
                navigation.navigate('AppNavigator');
                var setResponse = {}
                dispatch(onLoginResponse(setResponse));
            } else {
                Alert.alert('Error', I18n.t('loginPage.invalidErrorMsg'))
            }
        }
        setSpinner(false);
    }, [loginResponse]);


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
        } else {
            console.log('API Calling..');
            return true;
        }
    }
    /**
     * @function onLoginSubmit - Submit the user details
     */
    const onLoginSubmit = () => {
        // Regex string for email validate
        const regex = /^(([^<>()[\]\\.,;:\s@\" ]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validateRequest()) {
            NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setSpinner(true);
                    // Dispatch login request
                    dispatch(requestLogin(email, password));
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
                                placeholder={I18n.t('loginPage.emailInputPlaceholder')}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />
                            <Input
                                placeholder={I18n.t('loginPage.passwordInputPlaceholder')}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={e => setPassword(e)}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                buttonText={I18n.t('buttonText.loginUpButtonText')}
                                onPress={() => onLoginSubmit()}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TextButton
                                text={I18n.t('loginPage.forgotPasswordLabel')}
                                onPress={() => navigation.navigate('ForgotPassword')}
                            />
                        </View>
                    </View>



                    <View style={styles.bottomView}>
                        <TextButton
                            text={I18n.t('loginPage.createAccountLabel')}
                        />
                        <TextButton
                            text={I18n.t('loginPage.createAccountLabel1')}
                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
};

export default Login;
