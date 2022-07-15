import {StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1A1919',
        borderRadius: 100,
        padding: 15,
    },
    topContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    badge: {
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: 'red',
        zIndex: 10,
        borderRadius: 10,
    },
    bottomContainer: {
        flex: 1,
    },
    subContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    icons: {marginTop: 15, marginLeft: 25},
    subtitle: {
        fontSize: 15,
        fontFamily: 'RobotoSlab-Regular',
        color: Colors.lighter,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 20,
    },
    infoText: {
        fontSize: 14,
        color: Colors.lighter,
        marginLeft: 10,
    },
    vLine: {
        width: 1,
        height: 25,
        backgroundColor: Colors.lighter,
        marginHorizontal: 20,
    },
    infoCard: {
        backgroundColor: Colors.darker,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 5,
    },
    infoContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        maxWidth: '40%',
    },
    balance: {
        fontSize: 20,
        fontFamily: 'RobotoSlab-Regular',
        textAlign: 'center',
        color: Colors.lighter,
    },
    coinValue: {
        fontSize: 70,
        fontFamily: 'RobotoSlab-Bold',
        textAlign: 'center',
        color: '#1F1C1D',
        maxWidth: '80%',
    },
    fiatValue: {
        fontSize: 40,
        fontFamily: 'RobotoSlab-Bold',
        textAlign: 'center',
        color: Colors.foreground,
        marginTop: 10,
        marginHorizontal: 30,
    },
    btnImg: {
        width: 40,
        height: 40,
    },
    moreImg: {
        width: 17,
        height: 17,
    },
    moreBtn: {
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        paddingRight: 15,
    },
    input: {flex: 1, color: Colors.foreground, fontSize: 14},
    searchContainer: {
        flex: 1,
        minHeight: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginBottom: 0,
        borderColor: Colors.brick,
        marginHorizontal: 15,
        backgroundColor: Colors.card,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    search: {
        flex: 4,
        fontSize: 16,
        borderWidth: 1,
        borderColor: Colors.brick,
        backgroundColor: Colors.card,
        paddingHorizontal: 10,
        height: 45,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: Colors.foreground,
    },
    connectWalletContainer: {
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: Colors.foreground,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    connectWalletText: {
        color: Colors.background,
        fontSize: 16,
        textAlignVertical: "center",
        paddingBottom: 4,
        paddingHorizontal: 10,
    },
    connectWalletTextIcon: {
        textAlignVertical: "center",
        paddingHorizontal: 10,
        paddingRight: 10,
        color: Colors.background,
    },
});
