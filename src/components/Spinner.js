import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants';

/**
* Renders a <ActivityIndicator /> component
* @function ActivityIndicator Spinner component
* @param  props.color {string} - Set for spinner color.
*/
export default Spinner = ({ color }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


