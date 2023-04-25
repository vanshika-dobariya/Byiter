import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    topView: {
        flex: 0.1,
        alignItems: 'center'
    },
    container: {
        flex: 0.9,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    menuView: {
        marginVertical: 18,
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderColor: colors.lightGrey,
        height: 35
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
    logoImage: {
        height: 100,
        width: 200
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