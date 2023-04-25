import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors, fonts } from '../constants';
import Images from '../utils/Images';


/**
* Renders a <AuthHeader /> component
* @function Header AuthHeader
* @param  props.text {string} - the text for button
* @param  props.onPress {object} - the onpress event of the back button
*/
export default AuthHeader = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.mainView}
            onPress={onPress}>
            <Image source={Images.backArrow} style={styles.backArrow} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 12,
        fontWeight: fonts.FontWeight.bold
    },
    backArrow: {
        marginEnd: 10
    }
})


