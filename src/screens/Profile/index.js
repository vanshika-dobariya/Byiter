import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
// Images
import Images from '../../utils/Images';
import { Button, Input, TextButton, AuthText, Spinner } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";

/**
 * @class Profile
 * @param  {Object} navigation - Use for navigation
 */
export default Profile = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description email {string} - Email for login user.
   * @description password {string} - Password for login user.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [spinner, setSpinner] = useState(false);

  useEffect(async()=>{
    var userEmail = await AsyncStorage.getItem('EmailAddress');
    console.log('userEmail : '+userEmail);
    setEmail(userEmail);
  },[])

  /**
    * @param {} validateRequest - Validate the request
    */
  validateRequest = () => {
    // Regux string for email validate
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || !regex.test(email)) {
      Alert.alert('BUYITEER', I18n.t('registerPage.invalidEmail'));
      return false;
    } else if (password === '') {
      Alert.alert('BUYITEER', I18n.t('registerPage.missingPassword'));
      return false;
    } else if (confirmPassword === '') {
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
          // setSpinner(true);
          Alert.alert('BUYITEER', 'Update profile coming soon!')
        } else {
          Alert.alert('BUYITEER', I18n.t('connection.errorMessage'))
        }
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeView}>

      <View style={styles.menuView}>
        <View style={{ flex: 0.1, marginStart: 5 }}>
          <Entypo
            name="menu"
            size={25}
            color={colors.appCommonColor}
            onPress={() => {
              navigation.openDrawer();
            }} />
        </View>
        <View style={{ flex: 0.9, alignItems: 'center' }}>
          <Text style={styles.headerText}>Update Profile</Text>
        </View>
      </View>

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
              buttonText={I18n.t('buttonText.updateProfile')}
              onPress={() => onSignupSubmit()}
            />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}