import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../constants';
// Style
import styles from './style';

/**
 * @class About
 * @param  {Object} navigation - Use for navigation
 */
export default About = ({ navigation }) => {

  const OpenURLButton = async (url) => {
    console.log('url : '+url);
    await Linking.openURL(url);
    // Checking if the link is supported for links with custom URL scheme.
    // const supported = await Linking.canOpenURL(url);
    // if (supported) {
    //   // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //   // by some browser in the mobile
    //   await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  };

  return (
    <SafeAreaView style={styles.safeView}>

      <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>

        <View style={{ flex: 0.9, alignItems: 'center' }}>
          <Text style={styles.headerText}>About</Text>
        </View>
        <View style={{ flex: 0.1, marginEnd: 5 }}>
          <Entypo
            name="menu"
            size={25}
            color={colors.white}
            onPress={() => {
              navigation.openDrawer();
            }} />
        </View>

      </View>

      <View style={styles.container}>
        <View style={styles.detailView}>
          <Text style={{ color: colors.gray }}>Version : 1.0.0</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={{ color: colors.gray }}>To view privacy policy : </Text>
          <TouchableOpacity
            onPress={() => OpenURLButton('https://docs.google.com/document/d/1PhfzbDleOfdyTYNXSIIxVFg4qP3NnfNS2A4tN72QVWY/edit')}>
            <Text style={{ color: colors.blue }}>click here </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailView}>
          <Text style={{ color: colors.gray }}>To view terms and conditions : </Text>
          <TouchableOpacity
            onPress={() => OpenURLButton('https://docs.google.com/document/d/1PhfzbDleOfdyTYNXSIIxVFg4qP3NnfNS2A4tN72QVWY/edit')}>
            <Text style={{ color: colors.blue }}>click here </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}