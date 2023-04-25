import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    logoImage: {
        height : 100, 
        width : 200 
    },
    boldText: {
        fontSize: 22,
        alignSelf: 'center',
        color: 'grey'
    }, btnView: {
        marginTop: 30
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        margin: 30
    },
    bottomView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 15
    },
});

export default styles;