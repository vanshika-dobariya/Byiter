import { StyleSheet, StatusBar } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.appCommonColor,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding : 15
    },
    locationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '500'
    },
    detailView : {
        marginVertical : 8,
        flexDirection : 'row'
    }
});

export default styles;