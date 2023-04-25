import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <AuthText /> component
* @function Text AuthText
* @param  props.text {string} - the text for showing
*/
export default AuthText = ({text}) => {
    return(
        <Text style={styles.text}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        marginTop: 20,
        color: colors.white,
        fontSize: 12,
        fontWeight : fonts.FontWeight.bold
    },
})