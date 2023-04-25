import { StyleSheet, StatusBar } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
        // paddingTop: StatusBar.currentHeight
    },
    topView: {
        flex: 0.1,
        alignItems: 'center'
    },
    container: {
        flex: 0.9
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#e7f0f7',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1.2
    },
    locationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: colors.appCommonColor,
        fontSize: 18,
        fontWeight: '500'
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      loadMoreBtn: {
        padding: 10,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: colors.appCommonColor,
        fontSize: 15,
        textAlign: 'center',
      },
});

export default styles;