import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    logoImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    btnView: {
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