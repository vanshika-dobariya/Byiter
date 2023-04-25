import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors,  fonts} from '../constants';

/**
* Renders a <CancelButton /> component
* @function Button CancelButton component
* @param  props.buttonText {string} - the text in the button
* @param  props.onPress {object} - the onpress event of the button
*/
export default CancelButton = ({buttonText, onPress}) => {
    return(
        <TouchableOpacity onPress= {onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.cancelButtonBg,
        // width: 350,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 3
    },
    text:{
        color: colors.white,
        fontSize: 14,
        fontWeight : fonts.FontWeight.medium,
        // fontFamily : fonts.FontFamily.medium
    }
})