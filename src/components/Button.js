import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <Button /> component
* @function Button component
* @param  props.buttonText {string} - the text in the button
* @param  props.onPress {object} - the onpress event of the button
*/

export default Button = ({ buttonText, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.buttonBg,
        // width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 3
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: fonts.FontWeight.bold,
        // fontFamily : fonts.FontFamily.medium
    }
})