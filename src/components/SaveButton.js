import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <SaveButton /> component
* @function Button SaveButton component
* @param  props.buttonText {string} - the text in the button
* @param  props.onPress {object} - the onpress event of the button
*/

export default SaveButton = ({ buttonText, onPress, isHeight }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,{height : isHeight ? isHeight : 45}]}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.headerBackgroundColor,
        // width: 350,
        // height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 3
    },
    text: {
        color: colors.white,
        fontSize: 14,
        fontWeight: fonts.FontWeight.medium,
        // fontFamily : fonts.FontFamily.medium
    }
})