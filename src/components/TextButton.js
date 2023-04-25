import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <TextButton /> component
* @function Button TextButton component
* @param  props.text {string} - the text in the button
* @param  props.onPress {object} - the onpress event of the button
*/
export default TextButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.lightGrey,
        fontSize: 16,
        fontWeight: fonts.FontWeight.bold
    }
})