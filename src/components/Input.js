import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants'

/**
* Renders a <TextInput /> component
* @function TextInput Input component
* @param  props.placeholder {string} - Placeholder of text input.
* @param  props.value {string} - Value of text input.
* @param  props.onChangeText {string} - Change Text event of text input.
* @param  props.secureTextEntry {string} - Secure Text Entry for password
*/
export default Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.lightGrey}
            style={styles.inputContainer}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize='none'
        />
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        height: 50,
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.7,
        marginVertical: 5,
        color: colors.black,
        fontSize: 18,
        paddingHorizontal: 5,
        backgroundColor : colors.white
    }
});